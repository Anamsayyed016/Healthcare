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

if command -v corepack >/dev/null 2>&1; then
  corepack enable 2>/dev/null || true
  corepack prepare pnpm@9.15.9 --activate 2>/dev/null || true
fi

unset NODE_ENV
pnpm install --frozen-lockfile --prod=false

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a
PORT="${PORT:-3001}"

NODE_ENV=production pnpm run build

export PORT NODE_ENV
pm2 reload "$PM2_APP" --update-env
pm2 save

sleep 2

HEALTH_OK=0
for i in 1 2 3 4 5 6 7 8 9 10; do
  if curl -fsS -o /dev/null "http://127.0.0.1:${PORT}/"; then
    HEALTH_OK=1
    break
  fi
  echo "   Health check attempt ${i}/10..."
  sleep 2
done

if [ "$HEALTH_OK" = "1" ]; then
  echo "✅ Health check passed on port ${PORT}"
else
  echo "❌ Health check failed on port ${PORT}"
  pm2 logs "$PM2_APP" --lines 30 --nostream || true
  exit 1
fi

echo "✅ PharmEFC deployment complete"
