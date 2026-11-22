#!/usr/bin/env bash
set -euo pipefail

IMAGE="${SMOKE_TEST_IMAGE:?SMOKE_TEST_IMAGE not set}"
ENV_DIR=""
SUFFIX="${GITHUB_RUN_ID:-$$}-${GITHUB_RUN_ATTEMPT:-1}"
CONTAINER="smoke-${SUFFIX}"

echo "::group::Environment"
echo "Image: $IMAGE"
echo "Platform: $(uname -m)"
echo "Docker: $(docker --version 2>/dev/null || echo 'not found')"
echo "Suffix: $SUFFIX"
echo "::endgroup::"

cleanup() {
  echo "::group::Cleanup"
  echo "Removing container..."
  docker rm --force "$CONTAINER" >/dev/null 2>&1 || true
  rm -f "${HEADERS:-}"
  if [ -n "${ENV_DIR:-}" ]; then
    rm -rf "$ENV_DIR" || true
  fi
  echo "Cleanup complete."
  echo "::endgroup::"
}
trap cleanup EXIT

echo "::group::Start"
ENV_DIR="$(mktemp -d -p "$(pwd)" smoke-env.XXXXXX)"
chmod 755 "$ENV_DIR"

docker run --detach --name "$CONTAINER" \
  --volume "$ENV_DIR:/run/environment-variables:ro" \
  -p 0:3000 \
  "$IMAGE"
echo "Container started."
echo "::endgroup::"

if ! HOST_PORT="$(docker port "$CONTAINER" 3000/tcp | head -1 | awk -F: '{print $NF}')"; then
  echo "Failed to determine host port for container"
  docker logs "$CONTAINER"
  exit 1
fi
if [ -z "$HOST_PORT" ]; then
  echo "Failed to determine host port for container"
  docker logs "$CONTAINER"
  exit 1
fi

echo "::group::Wait for healthy"
for i in $(seq 1 60); do
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

fail() {
  echo "Assertion failed, container logs:"
  docker logs "$CONTAINER"
  exit 1
}

BASE_URL="http://localhost:${HOST_PORT}"
HEADERS="$(mktemp)"

echo "::group::Smoke test"
# src/server/api/service/vibetype/healthcheck.get.ts
BODY="$(curl -fsS --max-time 10 -D "$HEADERS" "$BASE_URL/api/service/vibetype/healthcheck")" || fail
echo "Healthcheck: $BODY"
[ "$BODY" = "OK" ] || fail
grep -qi '^content-type: text/plain' "$HEADERS" || fail

# Server-side rendering works without a backend, and the default locale sets `lang`.
HTML="$(curl -fsS --max-time 30 -D "$HEADERS" "$BASE_URL/")" || fail
grep -q '<html[^>]* lang="en"' <<<"$HTML" || fail
grep -q '<title>Vibetype' <<<"$HTML" || fail

# The `nuxt-security` headers must survive the production build (src/server/plugins/security.ts extends the CSP).
for header in content-security-policy x-content-type-options x-frame-options strict-transport-security; do
  grep -qi "^${header}:" "$HEADERS" || { echo "Missing header: $header"; fail; }
done
grep -qi "^content-security-policy:.*frame-ancestors 'none'" "$HEADERS" || fail

# The `de` locale is served under a prefix, the default one is not.
HTML_DE="$(curl -fsS --max-time 30 "$BASE_URL/de")" || fail
grep -q '<html[^>]* lang="de"' <<<"$HTML_DE" || fail

# The entry chunk named in the import map proves the client build is part of the image.
ENTRY="$(grep -o '"#entry":"[^"]*"' <<<"$HTML" | head -1 | cut -d'"' -f4)"
echo "Entry chunk: $ENTRY"
[ -n "$ENTRY" ] || fail
curl -fsS --max-time 10 -o /dev/null "${BASE_URL}${ENTRY}" || fail

# Unknown routes must not fall through to a 200 (src/server/api/[...].ts for the api, the app router for pages).
for path in /api/does-not-exist /does-not-exist; do
  STATUS="$(curl -sS --max-time 30 -o /dev/null -w '%{http_code}' "${BASE_URL}${path}")" || fail
  echo "Unknown route ${path}: $STATUS"
  [ "$STATUS" = "404" ] || fail
done
echo "Smoke test OK."
echo "::endgroup::"

echo "::group::Container logs"
docker logs "$CONTAINER"
echo "::endgroup::"

echo "Smoke test passed."
