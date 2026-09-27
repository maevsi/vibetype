#!/bin/sh
set -e

# Compares two bundle-size JSON files (as produced by `measure.sh`) and
# generates a Markdown report.
#
# Usage: compare.sh <base.json> <pr.json> <output.md> [run_url]

BASE_FILE="${1:?Usage: compare.sh <base.json> <pr.json> <output.md> [run_url]}"
PR_FILE="${2:?Usage: compare.sh <base.json> <pr.json> <output.md> [run_url]}"
OUTPUT_FILE="${3:?Usage: compare.sh <base.json> <pr.json> <output.md> [run_url]}"
RUN_URL="${4:-}"

REGRESSION_THRESHOLD_PERCENT=5
MINIMUM_ABSOLUTE_BYTES=10240

jq -n \
  --argjson base "$(cat "$BASE_FILE")" \
  --argjson pr "$(cat "$PR_FILE")" \
  --argjson threshold "$REGRESSION_THRESHOLD_PERCENT" \
  --argjson min_abs "$MINIMUM_ABSOLUTE_BYTES" \
  --arg run_url "$RUN_URL" \
  '
  def format_bytes:
    if (. | fabs) < 1024 then "\(.) B"
    else "\((. / 1024 * 10 | round / 10)) KiB"
    end;

  def format_delta_bytes:
    if . > 0 then "+\(. | format_bytes)"
    else (. | format_bytes)
    end;

  def format_delta_percent:
    if . == null then "N/A"
    elif . > 0 then "+\(. | tostring)%"
    else "\(. | tostring)%"
    end;

  # Builds one comparison row for a base/pull request byte-count pair, keyed by
  # an arbitrary label (a metric name for the summary rows, a chunk name for
  # the per-chunk rows).
  def row($label; $base_bytes; $pr_bytes):
    (($pr_bytes - $base_bytes) | fabs) as $delta_abs |
    (if $base_bytes > 0 then
      (($pr_bytes - $base_bytes) / $base_bytes * 100 | . * 10 | round / 10)
    else null end) as $delta_pct |
    (if $delta_pct == null then ""
    elif ($delta_pct > $threshold) and ($delta_abs >= $min_abs) then " :warning:"
    elif ($delta_pct < (-1 * $threshold)) and ($delta_abs >= $min_abs) then " :rocket:"
    else ""
    end) as $icon |
    (if $delta_abs < $min_abs then
      "(" + (($pr_bytes - $base_bytes) | format_delta_bytes) + ", " + ($delta_pct | format_delta_percent) + ")"
    else
      (($pr_bytes - $base_bytes) | format_delta_bytes) + " (" + ($delta_pct | format_delta_percent) + ")"
    end) as $delta_display |
    {
      name: $label,
      base: ($base_bytes | format_bytes),
      pr: ($pr_bytes | format_bytes),
      delta: $delta_display,
      deltaBytesAbs: $delta_abs,
      deltaPercentAbs: (if $delta_pct == null then null else ($delta_pct | fabs) end),
      icon: $icon
    };

  ($base.chunks | map({key: .key, value: .}) | from_entries) as $base_map |
  ($pr.chunks | map({key: .key, value: .}) | from_entries) as $pr_map |

  # Chunks present in both builds, matched on the normalized id of their
  # largest module, ranked by absolute delta so the most notable changes
  # surface first.
  ([
    $pr.chunks[] |
    select($base_map[.key] != null) |
    row(.key; $base_map[.key].gzipBytes; .gzipBytes)
  ] | sort_by(-.deltaBytesAbs)) as $matched_rows |

  [$matched_rows[] | select(.icon != "")] as $significant_rows |
  [$matched_rows[] | select(.icon == "")] as $insignificant_rows |

  # Chunks that exist in only one of the two builds cannot be diffed, but are
  # exactly the signal content-hashed production filenames could never surface:
  # a component becoming its own lazily-loaded chunk shows up as a new chunk,
  # paired with its former host chunk shrinking in the matched table above.
  ([$pr.chunks[] | select($base_map[.key] == null)] | sort_by(-.gzipBytes)) as $new_chunks |
  ([$base.chunks[] | select($pr_map[.key] == null)] | sort_by(-.gzipBytes)) as $removed_chunks |

  row("Initial (gzip)"; $base.initial.gzipBytes; $pr.initial.gzipBytes) as $headline |

  [
    $headline,
    row("Initial (brotli)"; $base.initial.brotliBytes; $pr.initial.brotliBytes),
    row("All chunks (gzip)"; $base.totals.gzipBytes; $pr.totals.gzipBytes)
  ] as $summary_rows |

  def render_table($rows):
    "| Largest module | Base (gzip) | PR (gzip) | Delta |\n" +
    "|----------------|-------------|-----------|-------|\n" +
    ([$rows[] | "| `\(.name)` | \(.base) | \(.pr) | \(.delta)\(.icon) |"] | join("\n"));

  def render_summary_table:
    "| Metric | Base | PR | Delta |\n" +
    "|--------|------|----|-------|\n" +
    ([$summary_rows[] | "| \(.name) | \(.base) | \(.pr) | \(.delta)\(.icon) |"] | join("\n"));

  def render_chunk_list($chunks; $column):
    if ($chunks | length) == 0 then
      "_none_\n"
    else
      "| Largest module | \($column) |\n" +
      "|----------------|-----------|\n" +
      ([$chunks[] | "| `\(.key)` | \(.gzipBytes | format_bytes) |"] | join("\n")) + "\n"
    end;

  "## Bundle Size\n\n" +
  (if $headline.icon == " :warning:" then
    ":warning: **Initial gzip size regressed** by \($headline.deltaBytesAbs | format_bytes) (+\($headline.deltaPercentAbs)%, threshold: >\($threshold)% and >=\($min_abs / 1024)KiB)\n\n"
  elif $headline.icon == " :rocket:" then
    ":rocket: **Initial gzip size improved** by \($headline.deltaBytesAbs | format_bytes) (-\($headline.deltaPercentAbs)%, threshold: >\($threshold)% and >=\($min_abs / 1024)KiB)\n\n"
  else
    ":white_check_mark: No significant change in initial gzip size: \($headline.delta)\n\n"
  end) +
  render_summary_table + "\n\n" +
  (if ($significant_rows | length) > 0 then
    "**\($significant_rows | length) chunk(s) with a significant change**\n\n" + render_table($significant_rows) + "\n\n"
  else
    ":white_check_mark: No chunk changed by more than the threshold\n\n"
  end) +
  "**\($new_chunks | length) new chunk(s) in the PR**\n\n" + render_chunk_list($new_chunks; "PR (gzip)") + "\n" +
  "**\($removed_chunks | length) chunk(s) removed (present only in base)**\n\n" + render_chunk_list($removed_chunks; "Base (gzip)") + "\n" +
  "<details>\n<summary>\($insignificant_rows | length) chunk(s) without a significant delta</summary>\n\n" +
  render_table($insignificant_rows) +
  "\n\n</details>\n\n" +
  "<details>\n<summary>Details</summary>\n\n" +
  "- The headline verdict is the initial size: the modules reachable from the app entry without crossing a dynamic `import()`, which is what a visitor downloads before any lazily-loaded code is requested. Deferring a component moves this number, which is the point of code splitting\n" +
  "- `All chunks` sums every chunk instead, including lazily-loaded ones. It stays roughly flat when code is deferred rather than deleted, so it answers a different question: whether the application as a whole grew\n" +
  "- Threshold for regression and improvement markers: >\($threshold)% AND >=\($min_abs / 1024)KiB absolute change\n" +
  "- Deltas in parentheses indicate that the absolute change is below the minimum threshold\n" +
  "- Chunks are identified by the normalized module id of their largest module rather than by their filename, which is either content-hashed or, in analyze mode, a name like `_nuxt/dist2.js` numbered in module-graph encounter order, so neither is a stable identity across two builds\n" +
  "- Every module is minified and compressed on its own before being measured, which misses what a pass over the whole chunk saves, so absolute figures run higher than what actually ships. Base and PR are measured identically, so the deltas between them stay meaningful\n" +
  "- Chunk count: \($base.chunks | length) -> \($pr.chunks | length)\n" +
  "- Runner: GitHub Actions\n" +
  (if $run_url != "" then "- [Workflow run](\($run_url))\n" else "" end) +
  "\n</details>"
  ' -r > "$OUTPUT_FILE"

echo "Comparison written to $OUTPUT_FILE"
