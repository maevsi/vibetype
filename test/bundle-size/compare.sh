#!/bin/sh
set -e

# Compares two per-chunk bundle-size JSON files (as produced by `measure.sh`)
# and generates a Markdown report. Chunks are matched by name across base and
# PR, the same way sqitch's benchmark workflow matches rows by query name.
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

  # A chunk whose source has a generic basename that collides with another
  # module'\''s (many packages ship `dist/index.js`; multiple pages can share a
  # dynamic route segment name like `[username]`) falls back to a numbered
  # name, e.g. `_nuxt/dist.js`, `_nuxt/dist2.js`, `_nuxt/dist3.js`. That number
  # is assigned in module-graph encounter order, which shifts whenever
  # unrelated dependencies are added or removed elsewhere -- so on its own a
  # same-numbered chunk is not reliably the same code across base and PR.
  # Stripping the numeric suffix recovers a stable family key shared by every
  # member on a given side; summing each side'\''s family before matching makes
  # the comparison immune to the reshuffle, since a pure rename within a
  # family leaves the family total unchanged.
  def family_key:
    if test("[0-9]+\\.js$") then sub("[0-9]+\\.js$"; ".js") else . end;

  def group_by_family($chunks):
    $chunks
    | group_by(.name | family_key)
    | map({
        key: (.[0].name | family_key),
        members: [.[] | .name] | sort,
        memberCount: length,
        renderedBytes: (map(.renderedBytes) | add),
        gzipBytes: (map(.gzipBytes) | add)
      });

  # A singleton family displays under its own real chunk name; a multi-member
  # family (only ever `distN.js`-style collision names in practice) displays
  # as a wildcard with a member count, so the grouping is visible in the
  # report rather than silently hiding those chunks'\'' identities.
  def display_name:
    if .memberCount == 1 then .members[0]
    else (.key | sub("\\.js$"; "*.js")) + " (\(.memberCount) chunks)"
    end;

  # Build one comparison row for a base/pr gzip byte-count pair, keyed by an
  # arbitrary label (a metric name for the totals rows, a chunk family'\''s
  # display name for the per-chunk rows).
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

  (group_by_family($base.chunks)) as $base_families |
  (group_by_family($pr.chunks)) as $pr_families |

  ($base_families | map({key: .key, value: .}) | from_entries) as $base_map |
  ($pr_families | map({key: .key, value: .}) | from_entries) as $pr_map |

  # Chunk families present on both sides, matched by family key, ranked by
  # absolute delta so the most notable changes surface first.
  ([
    $pr_families[] |
    select($base_map[.key] != null) |
    row(display_name; $base_map[.key].gzipBytes; .gzipBytes)
  ] | sort_by(-.deltaBytesAbs)) as $matched_rows |

  [$matched_rows[] | select(.icon != "")] as $significant_rows |
  [$matched_rows[] | select(.icon == "")] as $insignificant_rows |

  # Families that only exist on one side cannot be diffed, but are exactly
  # the interesting signal that content-hashed production filenames could
  # never surface: a component becoming its own lazy-loaded chunk shows up as
  # a new chunk, paired with its old host chunk shrinking in the matched
  # table above; a chunk disappearing entirely (e.g. a component getting
  # merged away or deleted) shows up as removed.
  ([$pr_families[] | select($base_map[.key] == null) | . + {name: display_name}] | sort_by(-.gzipBytes)) as $new_chunks |
  ([$base_families[] | select($pr_map[.key] == null) | . + {name: display_name}] | sort_by(-.gzipBytes)) as $removed_chunks |

  [
    row("Total (gzip)"; $base.totals.gzipBytes; $pr.totals.gzipBytes),
    row("Total (raw)"; $base.totals.renderedBytes; $pr.totals.renderedBytes)
  ] as $total_rows |

  ($total_rows[0]) as $headline |

  def render_table($rows):
    "| Chunk | Base (gzip) | PR (gzip) | Delta |\n" +
    "|-------|--------------|-----------|-------|\n" +
    ([$rows[] | "| `\(.name)` | \(.base) | \(.pr) | \(.delta)\(.icon) |"] | join("\n"));

  def render_total_table:
    "| Metric | Base | PR | Delta |\n" +
    "|--------|------|----|-------|\n" +
    ([$total_rows[] | "| \(.name) | \(.base) | \(.pr) | \(.delta)\(.icon) |"] | join("\n"));

  def render_new_chunks_table($chunks):
    if ($chunks | length) == 0 then
      "_none_\n"
    else
      "| Chunk | PR (gzip) |\n" +
      "|-------|-----------|\n" +
      ([$chunks[] | "| `\(.name)` | \(.gzipBytes | format_bytes) |"] | join("\n")) + "\n"
    end;

  def render_removed_chunks_table($chunks):
    if ($chunks | length) == 0 then
      "_none_\n"
    else
      "| Chunk | Base (gzip) |\n" +
      "|-------|-------------|\n" +
      ([$chunks[] | "| `\(.name)` | \(.gzipBytes | format_bytes) |"] | join("\n")) + "\n"
    end;

  "## Bundle Size\n\n" +
  (if $headline.icon == " :warning:" then
    ":warning: **Total gzip size regressed** by \($headline.deltaBytesAbs | format_bytes) (+\($headline.deltaPercentAbs)%, threshold: >\($threshold)% and ≥\($min_abs / 1024)KiB)\n\n"
  elif $headline.icon == " :rocket:" then
    ":rocket: **Total gzip size improved** by \($headline.deltaBytesAbs | format_bytes) (-\($headline.deltaPercentAbs)%, threshold: >\($threshold)% and ≥\($min_abs / 1024)KiB)\n\n"
  else
    ":white_check_mark: No significant change in total gzip size: \($headline.delta)\n\n"
  end) +
  render_total_table + "\n\n" +
  (if ($significant_rows | length) > 0 then
    "**\($significant_rows | length) chunk(s) with a significant change**\n\n" + render_table($significant_rows) + "\n\n"
  else
    ":white_check_mark: No chunk changed by more than the threshold\n\n"
  end) +
  "**\($new_chunks | length) new chunk(s) in the PR**\n\n" + render_new_chunks_table($new_chunks) + "\n" +
  "**\($removed_chunks | length) chunk(s) removed (present only in base)**\n\n" + render_removed_chunks_table($removed_chunks) + "\n" +
  "<details>\n<summary>\($insignificant_rows | length) chunk(s) without a significant delta</summary>\n\n" +
  render_table($insignificant_rows) +
  "\n\n</details>\n\n" +
  "<details>\n<summary>Details</summary>\n\n" +
  "- The headline verdict is based on total gzip size alone; the table below it also breaks out raw size, which may not move in the same direction\n" +
  "- Threshold for regression/improvement markers: >\($threshold)% AND ≥\($min_abs / 1024)KiB absolute change\n" +
  "- Deltas in parentheses indicate that the absolute change is below the minimum threshold\n" +
  "- Chunks are matched by the readable name `nuxt analyze` (rollup-plugin-visualizer) gives them, e.g. `_nuxt/AppTipTap.js`, which stays stable across builds, unlike a normal production build'\''s content-hashed filenames\n" +
  "- A chunk whose source has a generic basename that collides with another module'\''s (many packages ship `dist/index.js`; multiple pages can share a dynamic route segment name) falls back to a numbered name, e.g. `_nuxt/dist.js`, `_nuxt/dist2.js`; that number is assigned in module-graph encounter order, which shifts whenever unrelated dependencies are added or removed elsewhere, so a same-numbered chunk is not reliably the same code across base and PR. These are grouped into one `_nuxt/dist*.js (N chunks)` family per side, summed, and matched by that family key instead, so a pure renumbering nets out to no change; a genuine size change inside the family still shows up in the family total\n" +
  "- Per-module rendered/gzip sizes come from the visualizer'\''s pre-minification module graph, not the final minified production bundle, so absolute chunk sizes here run higher than what actually ships; base and PR are measured identically, so the deltas between them stay meaningful\n" +
  "- Totals sum every chunk, including lazily-loaded ones, alongside the initial bundle, so code-splitting that defers loading without removing code (e.g. moving a component behind a dynamic `import()`) reads as roughly neutral in the total rather than as an improvement; look at the new/removed/changed chunk tables for that signal instead, e.g. a chunk shrinking or disappearing paired with a new small async chunk appearing\n" +
  "- Chunk count: \($base.chunks | length) → \($pr.chunks | length)\n" +
  "- Runner: GitHub Actions\n" +
  (if $run_url != "" then "- [Workflow run](\($run_url))\n" else "" end) +
  "\n</details>"
  ' -r > "$OUTPUT_FILE"

echo "Comparison written to $OUTPUT_FILE"
