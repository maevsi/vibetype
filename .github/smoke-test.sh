#!/usr/bin/env bash
set -euo pipefail

IMAGE="${SMOKE_TEST_IMAGE:?SMOKE_TEST_IMAGE not set}"
ENV_DIR=""
SUFFIX="${GITHUB_RUN_ID:-$$}-${GITHUB_RUN_ATTEMPT:-1}"
CONTAINER="smoke-${SUFFIX}"
NETWORK="smoke-${SUFFIX}"

echo "::group::Environment"
echo "Image: $IMAGE"
echo "Platform: $(uname -m)"
echo "Docker: $(docker --version 2>/dev/null || echo 'not found')"
echo "Suffix: $SUFFIX"
echo "::endgroup::"

cleanup() {
  echo "::group::Cleanup"
  echo "Removing containers and network..."
  docker rm --force "$CONTAINER" >/dev/null 2>&1 || true
  docker network rm "$NETWORK" >/dev/null 2>&1 || true
  if [ -n "${ENV_DIR:-}" ]; then
    rm -rf "$ENV_DIR" || true
  fi
  echo "Cleanup complete."
  echo "::endgroup::"
}
trap cleanup EXIT

echo "::group::Create test network"
docker network inspect "$NETWORK" >/dev/null 2>&1 || docker network create "$NETWORK"
echo "Network ready."
echo "::endgroup::"

echo "::group::Start"
ENV_DIR="$(mktemp -d -p . smoke-env.XXXXXX)"

docker run --detach --name "$CONTAINER" \
  --network "$NETWORK" \
  --volume "$ENV_DIR:/run/environment-variables:ro" \
  -p 0:3000 \
  "$IMAGE"
echo "Container started."
echo "::endgroup::"

HOST_PORT="$(docker port "$CONTAINER" 3000/tcp | head -1 | awk -F: '{print $NF}')"
if [ -z "$HOST_PORT" ]; then
  echo "Failed to determine host port for container"
  docker logs "$CONTAINER"
  exit 1
fi

echo "::group::Wait for healthy"
for i in $(seq 1 120); do
  if ! STATUS=$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}no-healthcheck{{end}}' "$CONTAINER"); then
    echo "Failed to inspect container health status"
    docker logs "$CONTAINER"
    exit 1
  fi
  if [ "$STATUS" = "no-healthcheck" ]; then
    echo "Image does not define a Docker HEALTHCHECK"
    docker logs "$CONTAINER"
    exit 1
  fi
  if [ "$STATUS" = "healthy" ]; then
    echo "Container is healthy after ${i}s"
    break
  fi
  if [ "$STATUS" = "unhealthy" ]; then
    echo "Container became unhealthy"
    docker logs "$CONTAINER"
    exit 1
  fi
  if [ "$((i % 10))" -eq 0 ]; then
    echo "Still waiting... (${i}s)"
  fi
  sleep 1
done
if [ "$STATUS" != "healthy" ]; then
  echo "Timeout waiting for healthy status"
  docker logs "$CONTAINER"
  exit 1
fi
echo "::endgroup::"

echo "::group::Smoke test"
HTTP_CODE=$(curl -sS --max-time 10 -o /dev/null -w '%{http_code}' "http://localhost:${HOST_PORT}/api/service/vibetype/healthcheck") || {
  echo "Request failed, container logs:"
  docker logs "$CONTAINER"
  exit 1
}
echo "HTTP status: $HTTP_CODE"
if [ "$HTTP_CODE" -ge 400 ]; then
  echo "Healthcheck returned HTTP $HTTP_CODE, container logs:"
  docker logs "$CONTAINER"
  exit 1
fi
echo "Smoke test OK."
echo "::endgroup::"

echo "::group::Container logs"
docker logs "$CONTAINER"
echo "::endgroup::"

echo "Smoke test passed."
