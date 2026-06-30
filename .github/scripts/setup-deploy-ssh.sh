#!/usr/bin/env bash
set -euo pipefail

KEY_PATH="${1:?usage: setup-deploy-ssh.sh <key-path>}"

mkdir -p "$(dirname "$KEY_PATH")"
chmod 700 "$(dirname "$KEY_PATH")"

write_key_from_b64() {
  printf '%s' "$1" | tr -d ' \t\r\n' | base64 --decode > "$KEY_PATH"
}

write_key_from_pem() {
  printf '%s' "$1" | sed 's/\\n/\n/g' | tr -d '\r' > "$KEY_PATH"
  # Ensure file ends with a newline
  [ -n "$(tail -c1 "$KEY_PATH" 2>/dev/null || true)" ] && echo >> "$KEY_PATH"
}

if [ -n "${SSH_KEY_B64:-}" ]; then
  write_key_from_b64 "$SSH_KEY_B64"
elif [ -n "${SSH_KEY:-}" ]; then
  write_key_from_pem "$SSH_KEY"
else
  echo "❌ Set GitHub secret SSH_KEY_B64 (recommended) or SSH_KEY"
  exit 1
fi

chmod 600 "$KEY_PATH"

if ! ssh-keygen -y -f "$KEY_PATH" > /dev/null 2>&1; then
  echo "❌ SSH private key is invalid after decode."
  echo "   Re-create SSH_KEY_B64 on your PC:"
  echo '   [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes((Get-Content $env:USERPROFILE\.ssh\pharmefc_deploy -Raw)))'
  exit 1
fi

echo "✅ SSH private key validated"
