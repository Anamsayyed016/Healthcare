#!/usr/bin/env bash
set -euo pipefail

ARCHIVE="${1:-release.tar.gz}"
ROOT="${2:-.}"

cd "$ROOT"

[ -d .next/standalone ] || { echo "❌ .next/standalone missing — enable output: standalone in next.config"; exit 1; }
[ -d .next/static ] || { echo "❌ .next/static missing"; exit 1; }
[ -f .next/BUILD_ID ] || { echo "❌ .next/BUILD_ID missing — build did not complete"; exit 1; }

mkdir -p .next/standalone/.next
cp -a .next/static .next/standalone/.next/static
[ -d public ] && cp -a public .next/standalone/public
cp ecosystem.config.cjs .next/standalone/ecosystem.config.cjs

(cd .next/standalone && tar -czf "$OLDPWD/$ARCHIVE" .)

FILE_COUNT="$(tar -tzf "$ARCHIVE" | wc -l)"
echo "✅ Bundle created: $ARCHIVE ($FILE_COUNT entries)"
