#!/bin/sh
set -eu

ENVIRONMENT_VARIABLES_PATH="/run/environment-variables"

is_valid_var_name() {
  case "$1" in
    ''|[!a-zA-Z_]*|*[!a-zA-Z0-9_]*) return 1 ;;
    *) return 0 ;;
  esac
}

load_env_file() {
  file="$1"
  name=$(basename "$file")
  is_valid_var_name "$name" || return 0
  value=$(cat "$file")
  export "$name=$value"
}

load_environment_variables() {
  [ -d "$ENVIRONMENT_VARIABLES_PATH" ] || return 0
  set -- "$ENVIRONMENT_VARIABLES_PATH"/*
  [ -e "$1" ] || return 0

  for file in "$ENVIRONMENT_VARIABLES_PATH"/*; do
    [ -f "$file" ] && load_env_file "$file"
  done
}

load_environment_variables

if [ "${NODE_ENV:-}" != "production" ]; then
  pnpm config set store-dir "/srv/.pnpm-store"
  pnpm install
fi

exec "$@"
