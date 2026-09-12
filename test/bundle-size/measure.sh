#!/usr/bin/env bash
set -euo pipefail

# Builds the client in `nuxt analyze` mode and writes a JSON file with
# per-chunk bundle-size metrics, extracted from the interactive report's
# embedded module/chunk graph.
#
# Unlike a normal production build, `nuxt analyze` keeps chunk filenames
# readable instead of content-hashed (e.g. `_nuxt/AppTipTap.js`), which is
# what makes it possible to match chunks by name across a base and a PR
# build -- the same way sqitch's benchmark workflow matches rows by query
# name. See `AGENTS.md` for more background.
#
# Usage: measure.sh <output_file> [repo_directory]
#
# `repo_directory` defaults to the current directory and lets the same script
# measure a base-branch checkout placed in a sibling directory (e.g. `base`).

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

OUTPUT_FILE="${1:?Usage: measure.sh <output_file> [repo_directory]}"
REPO_DIR="${2:-.}"
SRC_DIR="$REPO_DIR/src"

BUILD_TIMEOUT_SECONDS=600

# A leftover report from a previous local run would otherwise be picked up
# instead of the one this run is about to produce. Scoped to `.nuxt/analyze`
# specifically (rather than any directory named `analyze`) so this can never
# reach into an unrelated package under `node_modules` that happens to ship a
# same-named folder.
find "$SRC_DIR" -path "*/.nuxt/analyze" -type d -exec rm -rf {} + 2>/dev/null || true

echo "Building client in analyze mode..."

# The `nuxi` binary is invoked directly, instead of through the `build:analyze`
# `package.json` script (which `AGENTS.md` still documents as the convenient
# way to run this locally), so this keeps working even against a base-branch
# checkout that predates that script. `--no-serve` skips the interactive
# stats server `nuxi analyze` would otherwise start and block on once the
# build finishes, so the command exits on its own once the report is
# written -- no need to background it, poll for the report file, and kill it.
timeout "$BUILD_TIMEOUT_SECONDS" pnpm --dir "$SRC_DIR" exec nuxi analyze --no-serve

REPORT_FILE="$(find "$SRC_DIR" -path "*/.nuxt/analyze/client.html" 2>/dev/null | head -n 1)"

if [ -z "$REPORT_FILE" ]; then
  echo "Analyze report not found after the build completed" >&2
  exit 1
fi

echo "Analyze report found at $REPORT_FILE"

echo "Extracting per-chunk bundle size..."
node "$SCRIPT_DIR/extract-chunks.mjs" "$REPORT_FILE" "$OUTPUT_FILE"

echo "Bundle size measurement written to $OUTPUT_FILE"
