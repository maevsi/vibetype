#!/usr/bin/env bash
set -euo pipefail

# Builds the client with bundle analysis enabled and writes a JSON file with
# per-chunk bundle-size metrics, extracted from the interactive report's
# embedded module/chunk graph.
#
# This is the local counterpart to what CI does: the `bundle-size` workflow
# gets the same report out of the `bundle-size` stage of the `Dockerfile` and
# runs `extract-chunks.mjs` over it directly. See `AGENTS.md` for background.
#
# Usage: measure.sh <output_file> [repo_directory]
#
# `repo_directory` defaults to the current directory.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

OUTPUT_FILE="${1:?Usage: measure.sh <output_file> [repo_directory]}"
REPO_DIR="${2:-.}"
SRC_DIR="$REPO_DIR/src"

echo "Building client with bundle analysis enabled..."

# Building through `NUXT_ANALYZE` rather than `nuxi analyze` keeps the content
# hashes in the chunk filenames, so the output stays deployable and the build
# is the same one a release would run. Chunks are matched across branches by
# their largest module's id, so readable filenames are not needed.
NUXT_ANALYZE=1 pnpm --dir "$SRC_DIR" run build:node

# `analyzeDir` resolves to `<buildDir>/analyze`, and `buildDir` is not
# necessarily `<rootDir>/.nuxt`: this project's resolves under
# `node_modules/.cache`, so the report is located by searching rather than by
# assuming a path. A stale report from an earlier build directory turns into a
# loud failure below instead of a silently wrong measurement.
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
