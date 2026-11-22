#!/usr/bin/env sh
# Runs docker directly if the current user can already reach the daemon,
# falling back to sudo only when that is not the case.
set -e

if docker info > /dev/null 2>&1; then
  exec docker "$@"
else
  exec sudo docker "$@"
fi
