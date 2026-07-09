#!/usr/bin/env bash
# Build on the VPS (no GitHub runner queue) then run zero-downtime swap.
set -euo pipefail

REPO_DIR="${REPO_DIR:-/var/www/pharmefc-healthcare/source}"
REPO_URL="${REPO_URL:-https://github.com/Anamsayyed016/Healthcare.git}"
REPO_BRANCH="${REPO_BRANCH:-main}"
STAGING_FOLDER="${STAGING_FOLDER:-/var/www/pharmefc-healthcare/staging}"
DEPLOY_FOLDER="${DEPLOY_FOLDER:-/var/www/pharmefc-healthcare}"
DEPLOY_SCRIPT="${DEPLOY_FOLDER}/shared/deploy-pharmefc-zero-downtime.sh"

echo "═══════════════════════════════════════════════"
echo " PharmEFC VPS build + deploy — $(date -Is)"
echo "═══════════════════════════════════════════════"

for cmd in git node pnpm; do
  command -v "$cmd" >/dev/null || { echo "❌ Missing command: $cmd"; exit 1; }
done

mkdir -p "$STAGING_FOLDER" "${DEPLOY_FOLDER}/shared" "${DEPLOY_FOLDER}/logs"

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "📥 Cloning repository to $REPO_DIR..."
  git clone --depth 1 --branch "$REPO_BRANCH" "$REPO_URL" "$REPO_DIR"
fi

echo "🔄 Syncing $REPO_BRANCH..."
cd "$REPO_DIR"
git fetch origin "$REPO_BRANCH" --depth 1
git reset --hard "origin/$REPO_BRANCH"

export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

echo "📦 Installing dependencies..."
corepack enable 2>/dev/null || true
pnpm install --frozen-lockfile

echo "🏗️  Building Next.js standalone..."
pnpm run build
[ -d .next/standalone ] || { echo "❌ standalone output missing"; exit 1; }
[ -f .next/BUILD_ID ] || { echo "❌ BUILD_ID missing"; exit 1; }

BUNDLE_NAME="release-$(date +%s).tar.gz"
BUNDLE_PATH="$STAGING_FOLDER/$BUNDLE_NAME"
chmod +x scripts/prepare-deploy-bundle.sh
scripts/prepare-deploy-bundle.sh "$BUNDLE_PATH"

[ -f "$DEPLOY_SCRIPT" ] || { echo "❌ Deploy script missing: $DEPLOY_SCRIPT"; exit 1; }
chmod +x "$DEPLOY_SCRIPT"

echo "🚀 Running zero-downtime deploy..."
BUNDLE_NAME="$BUNDLE_NAME" \
  STAGING_FOLDER="$STAGING_FOLDER" \
  RELEASES_FOLDER="${RELEASES_FOLDER:-/var/www/pharmefc-healthcare/releases}" \
  BACKUP_FOLDER="${BACKUP_FOLDER:-/var/www/pharmefc-healthcare/backups}" \
  bash "$DEPLOY_SCRIPT"

echo "✅ VPS build and deploy complete"
