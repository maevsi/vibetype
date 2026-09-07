#!/usr/bin/env node

// Extracts per-chunk bundle-size metrics from a `nuxt analyze` client report
// (rollup-plugin-visualizer's `client.html`). The report embeds the full
// module/chunk graph in a `<script>` tag as `const data = {...};` -- a JS
// statement, not standalone JSON, and further JS follows the object literal
// in the same script block, so it is string-extracted by balanced
// brace/bracket scanning rather than parsed as a whole file or matched with a
// greedy regex (which would overshoot into the trailing script content).
//
// The report also inlines the visualizer's own chart bundle in an earlier
// `<script>` block, so the first occurrence of the marker is not guaranteed to
// be the report data. Every occurrence is tried in turn and the first one that
// parses into the expected shape wins, rather than trusting a fixed position.
//
// Usage: extract-chunks.mjs <client.html> <output.json>

import { readFileSync, writeFileSync } from "node:fs";

const [, , reportFile, outputFile] = process.argv;

if (!reportFile || !outputFile) {
  console.error("Usage: extract-chunks.mjs <client.html> <output.json>");
  process.exit(1);
}

const html = readFileSync(reportFile, "utf8");

const DATA_MARKER = "const data = ";

function extractFirstJsonValue(text, start) {
  let depth = 0;
  let inString = false;
  let stringChar = "";
  let escaped = false;

  for (let i = start; i < text.length; i++) {
    const character = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === stringChar) {
        inString = false;
      }
      continue;
    }

    if (character === '"' || character === "'") {
      inString = true;
      stringChar = character;
    } else if (character === "{" || character === "[") {
      depth++;
    } else if (character === "}" || character === "]") {
      depth--;
      if (depth === 0) {
        return text.slice(start, i + 1);
      }
    }
  }

  return undefined;
}

function parseJsonValue(text, start) {
  const value = extractFirstJsonValue(text, start);

  if (value === undefined) return undefined;

  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
}

function extractReportData(text) {
  let markerIndex = text.indexOf(DATA_MARKER);

  while (markerIndex !== -1) {
    const candidate = parseJsonValue(text, markerIndex + DATA_MARKER.length);

    if (candidate?.tree?.children && candidate.nodeParts) {
      return candidate;
    }

    markerIndex = text.indexOf(DATA_MARKER, markerIndex + DATA_MARKER.length);
  }

  throw new Error(`Could not find the report data in ${reportFile}`);
}

const data = extractReportData(html);

// Each top-level `tree.children` entry is a chunk, whose display name is
// stable across builds in analyze mode (unlike production chunk filenames,
// which are content-hashed). Intermediate folder-grouping nodes only carry
// `children`, while leaf module nodes carry a `uid` that indexes into
// `data.nodeParts`, so leaf uids are collected recursively to cover chunks
// with deeply nested module trees.
function collectLeafUids(node, uids) {
  if (node.uid) {
    uids.push(node.uid);
  }

  if (node.children) {
    for (const child of node.children) {
      collectLeafUids(child, uids);
    }
  }
}

const chunks = data.tree.children
  .map((chunk) => {
    const uids = [];
    collectLeafUids(chunk, uids);

    const { renderedBytes, gzipBytes } = uids.reduce(
      (totals, uid) => {
        const part = data.nodeParts[uid];
        return {
          renderedBytes: totals.renderedBytes + part.renderedLength,
          gzipBytes: totals.gzipBytes + part.gzipLength,
        };
      },
      { renderedBytes: 0, gzipBytes: 0 },
    );

    return { name: chunk.name, renderedBytes, gzipBytes };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const totals = chunks.reduce(
  (sum, chunk) => ({
    renderedBytes: sum.renderedBytes + chunk.renderedBytes,
    gzipBytes: sum.gzipBytes + chunk.gzipBytes,
  }),
  { renderedBytes: 0, gzipBytes: 0 },
);

writeFileSync(outputFile, JSON.stringify({ chunks, totals }, null, 2));
