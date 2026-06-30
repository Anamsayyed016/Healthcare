#!/usr/bin/env bash
# Wrapper: pull latest code, then exec the run script (avoids stale in-memory script after git reset).
set -euo pipefail

APP_ROOT="/var/www/pharmefc-healthcare"
CURRENT="${APP_ROOT}/current"

cd "$CURRENT"
git fetch origin main
git reset --hard origin/main
chmod +x scripts/deploy-pharmefc-run.sh
exec bash scripts/deploy-pharmefc-run.sh
