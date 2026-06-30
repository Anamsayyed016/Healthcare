#!/usr/bin/env bash
set -euo pipefail

KEY_PATH="${1:?usage: setup-deploy-ssh.sh <key-path>}"
SSH_KEY="${SSH_KEY:?SSH_KEY is not set}"

mkdir -p "$(dirname "$KEY_PATH")"
chmod 700 "$(dirname "$KEY_PATH")"

# Normalize: literal \n -> newline, strip Windows CR, trim outer whitespace
KEY_NORMALIZED="$(
  printf '%s' "$SSH_KEY" \
    | sed 's/\\n/\n/g' \
    | tr -d '\r' \
    | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//'
)"

printf '%s\n' "$KEY_NORMALIZED" > "$KEY_PATH"
chmod 600 "$KEY_PATH"

if ! ssh-keygen -y -f "$KEY_PATH" > /dev/null 2>&1; then
  echo "❌ SSH_KEY is invalid (libcrypto/parse error)."
  echo "   Re-add GitHub secret SSH_KEY: paste the FULL private key from:"
  echo "   Get-Content \$env:USERPROFILE\\.ssh\\pharmefc_deploy"
  exit 1
fi

echo "✅ SSH private key validated"
