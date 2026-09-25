#!/usr/bin/env node

// Extracts bundle-size metrics from a `nuxt analyze` client report
// (rollup-plugin-visualizer's `client.html`). The report embeds the full
// module/chunk graph in a `<script>` tag as `const data = {...};`, a JS
// statement rather than standalone JSON, and further JS follows the object
// literal in the same script block, so it is string-extracted by balanced
// brace/bracket scanning rather than parsed as a whole file or matched with a
// greedy regex (which would overshoot into the trailing script content).
//
// The report also inlines the visualizer's own chart bundle in an earlier
// `<script>` block, so the first occurrence of the marker is not guaranteed to
// be the report data. Every occurrence is tried in turn and the first one that
// parses into the expected shape wins, rather than trusting a fixed position.
//
// Usage: extract-chunks.mjs <client.html> <output.json>

import { readFileSync, writeFileSync } from 'node:fs'

const [, , reportFile, outputFile] = process.argv

if (!reportFile || !outputFile) {
  console.error('Usage: extract-chunks.mjs <client.html> <output.json>')
  process.exit(1)
}

const html = readFileSync(reportFile, 'utf8')

const DATA_MARKER = 'const data = '

function extractFirstJsonValue(text, start) {
  let depth = 0
  let inString = false
  let stringChar = ''
  let escaped = false

  for (let i = start; i < text.length; i++) {
    const character = text[i]

    if (inString) {
      if (escaped) {
        escaped = false
      } else if (character === '\\') {
        escaped = true
      } else if (character === stringChar) {
        inString = false
      }
      continue
    }

    if (character === '"' || character === "'") {
      inString = true
      stringChar = character
    } else if (character === '{' || character === '[') {
      depth++
    } else if (character === '}' || character === ']') {
      depth--
      if (depth === 0) {
        return text.slice(start, i + 1)
      }
    }
  }

  return undefined
}

function parseJsonValue(text, start) {
  const value = extractFirstJsonValue(text, start)

  if (value === undefined) return undefined

  try {
    return JSON.parse(value)
  } catch {
    return undefined
  }
}

function extractReportData(text) {
  let markerIndex = text.indexOf(DATA_MARKER)

  while (markerIndex !== -1) {
    const candidate = parseJsonValue(text, markerIndex + DATA_MARKER.length)

    if (candidate?.tree?.children && candidate.nodeParts) {
      return candidate
    }

    markerIndex = text.indexOf(DATA_MARKER, markerIndex + DATA_MARKER.length)
  }

  throw new Error(`Could not find the report data in ${reportFile}`)
}

const data = extractReportData(html)
const { nodeMetas, nodeParts } = data

// Module ids are absolute paths, and the base branch is measured from a
// different checkout directory than the pull request, so the raw id can never
// be compared across the two sides. Everything up to the last `node_modules`
// segment is dropped for a dependency (which also drops pnpm's
// version-stamped directory), and everything up to the application source
// directory is dropped for a project file. Virtual modules match neither and
// are already checkout-independent.
function normalizeModuleId(id) {
  const dependencyIndex = id.lastIndexOf('/node_modules/')

  if (dependencyIndex !== -1) {
    return id.slice(dependencyIndex + '/node_modules/'.length)
  }

  const sourceIndex = id.lastIndexOf('/src/')

  if (sourceIndex !== -1) {
    return id.slice(sourceIndex + 1)
  }

  return id
}

function sumParts(moduleUids) {
  const totals = { renderedBytes: 0, gzipBytes: 0, brotliBytes: 0 }

  for (const moduleUid of moduleUids) {
    for (const partUid of Object.values(
      nodeMetas[moduleUid]?.moduleParts ?? {},
    )) {
      const part = nodeParts[partUid]

      if (!part) continue

      totals.renderedBytes += part.renderedLength
      totals.gzipBytes += part.gzipLength
      totals.brotliBytes += part.brotliLength ?? 0
    }
  }

  return totals
}

// What a visitor downloads before any lazily-loaded code is requested: the
// modules reachable from the entry without crossing a dynamic `import()`.
// This is the figure a code-splitting change is supposed to move, unlike a sum
// over every chunk, which stays flat when code is deferred rather than removed.
function collectInitialModuleUids() {
  const reached = new Set()
  const pending = Object.entries(nodeMetas)
    .filter(([, meta]) => meta.isEntry)
    .map(([uid]) => uid)

  while (pending.length > 0) {
    const moduleUid = pending.pop()

    if (reached.has(moduleUid)) continue

    reached.add(moduleUid)

    for (const imported of nodeMetas[moduleUid]?.imported ?? []) {
      if (!imported.dynamic) pending.push(imported.uid)
    }
  }

  return reached
}

// Intermediate folder-grouping nodes only carry `children`, while leaf module
// nodes carry a `uid` that indexes into `nodeParts`, so leaf uids are
// collected recursively to cover chunks with deeply nested module trees.
function collectLeafUids(node, uids) {
  if (node.uid) {
    uids.push(node.uid)
  }

  if (node.children) {
    for (const child of node.children) {
      collectLeafUids(child, uids)
    }
  }
}

// A chunk's display name is not a stable identity. A generic source basename
// that collides with another module's (many packages ship `dist/index.js`, and
// route directories repeat names like `[username]`) gets a numbered suffix,
// and that number follows module-graph encounter order, so it shifts when an
// unrelated dependency is added elsewhere. The normalized id of the chunk's
// largest module does not move that way, so it is used to match chunks across
// the two builds while the name is kept only for display.
function getChunkKey(partUids) {
  let largestPart

  for (const partUid of partUids) {
    const part = nodeParts[partUid]

    if (!part) continue
    if (!largestPart || part.gzipLength > largestPart.gzipLength) {
      largestPart = part
    }
  }

  const id = largestPart && nodeMetas[largestPart.metaUid]?.id

  return id ? normalizeModuleId(id) : undefined
}

const chunks = data.tree.children
  .map((chunk) => {
    const partUids = []
    collectLeafUids(chunk, partUids)

    const totals = partUids.reduce(
      (sum, partUid) => {
        const part = nodeParts[partUid]

        return {
          renderedBytes: sum.renderedBytes + part.renderedLength,
          gzipBytes: sum.gzipBytes + part.gzipLength,
          brotliBytes: sum.brotliBytes + (part.brotliLength ?? 0),
        }
      },
      { renderedBytes: 0, gzipBytes: 0, brotliBytes: 0 },
    )

    return {
      name: chunk.name,
      key: getChunkKey(partUids) ?? chunk.name,
      ...totals,
    }
  })
  .sort((a, b) => a.key.localeCompare(b.key))

const initial = sumParts(collectInitialModuleUids())
const totals = sumParts(Object.keys(nodeMetas))

writeFileSync(outputFile, JSON.stringify({ chunks, initial, totals }, null, 2))
