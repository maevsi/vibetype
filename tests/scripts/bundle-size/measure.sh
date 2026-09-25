#!/usr/bin/env bash
set -euo pipefail

# Builds the client in `nuxt analyze` mode and writes a JSON file with
# per-chunk bundle-size metrics, extracted from the interactive report's
# embedded module/chunk graph.
#
# Unlike a normal production build, `nuxt analyze` keeps chunk filenames
# readable instead of content-hashed (e.g. `_nuxt/AppTipTap.js`), which is
# what makes it possible to match chunks by name across a base and a PR
# build, the same way sqitch's benchmark workflow matches rows by query
# name. See `AGENTS.md` for more background.
#
# Usage: measure.sh <output_file> [repo_directory]
#
# `repo_directory` defaults to the current directory and lets the same script
# measure a base-branch checkout placed in a sibling directory (e.g. `base`).
#
# Set `BUNDLE_SIZE_REUSE_BUILD` to a non-empty value to skip the build and read
# the report an earlier build already wrote, which is how the `Dockerfile`
# measures the image build instead of paying for a second one.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

OUTPUT_FILE="${1:?Usage: measure.sh <output_file> [repo_directory]}"
REPO_DIR="${2:-.}"
SRC_DIR="$REPO_DIR/src"

if [ -z "${BUNDLE_SIZE_REUSE_BUILD:-}" ]; then
  echo "Building client in analyze mode..."

  # `nuxi` is the same binary as `nuxt`, invoked directly rather than through the
  # `build:analyze` package script so this also works against a base-branch
  # checkout that predates that script. `--no-serve` skips the stats server the
  # command would otherwise start and block on; the CLI already skips it when
  # `CI` is set, so this only matters for local runs. There is no wall-clock
  # guard here because the workflow's job timeout already covers a hung build,
  # and `timeout` is not available on macOS by default.
  pnpm --dir "$SRC_DIR" exec nuxi analyze --no-serve
fi

# `analyzeDir` resolves to `<buildDir>/analyze`, and `buildDir` is not
# necessarily `<rootDir>/.nuxt`: this project's resolves under
# `node_modules/.cache`, so the report is located by searching rather than by
# assuming a path. The CLI clears `analyzeDir` itself before building, so a
# stale report can only appear under a *different* build directory, which the
# match count below turns into a loud failure instead of a silently wrong
# measurement.
REPORT_FILES="$(find "$SRC_DIR" -path '*/.nuxt/analyze/client.html' -type f)"
REPORT_COUNT="$(printf '%s' "$REPORT_FILES" | grep -c . || true)"

if [ "$REPORT_COUNT" -ne 1 ]; then
  echo "Expected exactly one analyze report under $SRC_DIR, found $REPORT_COUNT:" >&2
  echo "$REPORT_FILES" >&2
  exit 1
fi

REPORT_FILE="$REPORT_FILES"

echo "Analyze report found at $REPORT_FILE"

echo "Extracting per-chunk bundle size..."
node "$SCRIPT_DIR/extract-chunks.mjs" "$REPORT_FILE" "$OUTPUT_FILE"

echo "Bundle size measurement written to $OUTPUT_FILE"
