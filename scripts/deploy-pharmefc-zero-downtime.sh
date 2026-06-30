#!/usr/bin/env bash
# Zero-downtime standalone deploy — production stays up if staging health check fails.
set -euo pipefail

STAGING_FOLDER="${STAGING_FOLDER:-/var/www/pharmefc-healthcare/staging}"
RELEASES_FOLDER="${RELEASES_FOLDER:-/var/www/pharmefc-healthcare/releases}"
BACKUP_FOLDER="${BACKUP_FOLDER:-/var/www/pharmefc-healthcare/backups}"
CURRENT_LINK="${CURRENT_LINK:-/var/www/pharmefc-healthcare/current}"
SHARED_ENV="${SHARED_ENV:-/var/www/pharmefc-healthcare/shared/.env.production}"
STAGING_PORT="${STAGING_PORT:-3002}"

BUNDLE_NAME="${BUNDLE_NAME:?BUNDLE_NAME required}"
BUNDLE_PATH="$STAGING_FOLDER/$BUNDLE_NAME"

if [ ! -f "$BUNDLE_PATH" ]; then
  echo "❌ Bundle not found: $BUNDLE_PATH"
  exit 1
fi

set -a
# shellcheck disable=SC1090
[ -f "$SHARED_ENV" ] && source "$SHARED_ENV"
set +a
PROD_PORT="${PORT:-3001}"

TEMP_DEPLOY="/var/www/pharmefc-healthcare/temp-$$"
NEW_RELEASE="$RELEASES_FOLDER/$(date +%Y%m%d%H%M%S)"

mkdir -p "$TEMP_DEPLOY" "$RELEASES_FOLDER" "$BACKUP_FOLDER" "$STAGING_FOLDER"

echo "📦 Extracting $BUNDLE_NAME to temp..."
tar -xzf "$BUNDLE_PATH" -C "$TEMP_DEPLOY"
[ -f "$TEMP_DEPLOY/server.js" ] || { echo "❌ server.js missing in bundle"; exit 1; }

[ -f "$SHARED_ENV" ] && cp "$SHARED_ENV" "$TEMP_DEPLOY/.env"

echo "🧪 Staging health check on port $STAGING_PORT (production on $PROD_PORT stays running)..."
pm2 delete pharmefc-healthcare-staging 2>/dev/null || true
PHARMEFC_RELEASE_DIR="$TEMP_DEPLOY" pm2 start "$TEMP_DEPLOY/ecosystem.config.cjs" --only pharmefc-healthcare-staging

HEALTH_OK=0
for i in $(seq 1 15); do
  if curl -fsS -o /dev/null "http://127.0.0.1:${STAGING_PORT}/"; then
    HEALTH_OK=1
    break
  fi
  echo "   Staging health attempt ${i}/15..."
  sleep 2
done

pm2 delete pharmefc-healthcare-staging 2>/dev/null || true

if [ "$HEALTH_OK" != "1" ]; then
  echo "❌ Staging failed — production unchanged"
  pm2 logs pharmefc-healthcare-staging --lines 20 --nostream 2>/dev/null || true
  rm -rf "$TEMP_DEPLOY"
  exit 1
fi

echo "✅ Staging passed — swapping release..."
mkdir -p "$NEW_RELEASE"
mv "$TEMP_DEPLOY"/* "$NEW_RELEASE/"

if [ -L "$CURRENT_LINK" ] && [ -d "$(readlink -f "$CURRENT_LINK")" ]; then
  BACKUP_PATH="$BACKUP_FOLDER/backup-$(date +%s)"
  mkdir -p "$BACKUP_PATH"
  cp -a "$(readlink -f "$CURRENT_LINK")" "$BACKUP_PATH/release" 2>/dev/null || true
  echo "💾 Backed up previous release to $BACKUP_PATH"
fi

ln -sfn "$NEW_RELEASE" "$CURRENT_LINK"

export PHARMEFC_RELEASE_DIR="$NEW_RELEASE"
export PORT="$PROD_PORT"

pm2 delete pharmefc-healthcare 2>/dev/null || true
pm2 start "$NEW_RELEASE/ecosystem.config.cjs" --only pharmefc-healthcare --env production
pm2 save

PROD_OK=0
for i in $(seq 1 10); do
  if curl -fsS -o /dev/null "http://127.0.0.1:${PROD_PORT}/"; then
    PROD_OK=1
    break
  fi
  echo "   Production health attempt ${i}/10..."
  sleep 2
done

if [ "$PROD_OK" != "1" ]; then
  echo "❌ Production health failed after swap"
  pm2 logs pharmefc-healthcare --lines 30 --nostream || true
  exit 1
fi

rm -f "$BUNDLE_PATH"
cd "$BACKUP_FOLDER" 2>/dev/null && ls -t 2>/dev/null | tail -n +4 | xargs -r rm -rf

echo "✅ Zero-downtime deploy complete — $NEW_RELEASE"
