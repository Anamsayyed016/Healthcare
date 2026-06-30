#!/usr/bin/env bash
set -euo pipefail

KEY_PATH="${1:?usage: setup-deploy-ssh.sh <key-path>}"

mkdir -p "$(dirname "$KEY_PATH")"
chmod 700 "$(dirname "$KEY_PATH")"

printf '%s' "${SSH_KEY:?SSH_KEY is not set}" | sed 's/\\n/\n/g' > "$KEY_PATH"
chmod 600 "$KEY_PATH"
