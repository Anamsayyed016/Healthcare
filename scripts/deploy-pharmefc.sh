#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="/var/www/pharmefc-healthcare"
CURRENT="${APP_ROOT}/current"
ENV_FILE="${APP_ROOT}/shared/.env.production"
PM2_APP="pharmefc-healthcare"
LOG_DIR="${APP_ROOT}/logs"

mkdir -p "$LOG_DIR"

cd "$CURRENT"

echo "════════════════════════════════════════════════════════════"
echo "🚀 PharmEFC deploy — $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo "════════════════════════════════════════════════════════════"

git fetch origin main
git reset --hard origin/main

if command -v corepack >/dev/null 2>&1; then
  corepack enable 2>/dev/null || true
  corepack prepare pnpm@9.15.9 --activate 2>/dev/null || true
fi

# Install all deps (incl. dev) — Tailwind/PostCSS are required for next build.
unset NODE_ENV
pnpm install --frozen-lockfile --prod=false

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

NODE_ENV=production pnpm run build

pm2 reload "$PM2_APP" --update-env
pm2 save

if curl -fsS -o /dev/null "http://127.0.0.1:${PORT}/"; then
  echo "✅ Health check passed on port ${PORT}"
else
  echo "❌ Health check failed on port ${PORT}"
  pm2 logs "$PM2_APP" --lines 30 --nostream || true
  exit 1
fi

echo "✅ PharmEFC deployment complete"
