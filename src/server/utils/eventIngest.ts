import { htmlToText } from 'html-to-text'
import { zodResponseFormat } from 'openai/helpers/zod'
import { z } from 'zod'

// OpenAI's structured outputs require every field, so a missing value must be `null` instead of absent
const eventIngestSchema = z.object({
  description: z.string(),
  end: z.string().nullable(),
  is_event: z.boolean(),
  location: z.string().nullable(),
  name: z.string().nullable(),
  start: z.string().nullable(),
  url: z.string().nullable(),
})

export const eventIngestResponseFormat = zodResponseFormat(
  eventIngestSchema,
  'event',
)

export const EVENT_INGEST_REDIRECTS_MAXIMUM = 3

type EventIngestOutput = {
  description: string
  end: string | null
  is_event: true
  location: string | null
  name: string
  start: string
  url: string | null
}

const jsonLdScriptPattern =
  /<script\b[^>]*\btype\s*=\s*["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script\s*>/gi

/** Resolves a URL that may be relative, such as a `Location` header, against the URL that answered with it. */
export const getResolvedUrl = (location: string, currentUrl: string) => {
  try {
    return new URL(location, currentUrl).href
  } catch {
    return undefined
  }
}

const getText = (value: unknown): string | undefined => {
  if (typeof value === 'string') return value.trim() || undefined
  if (Array.isArray(value)) return getText(value[0])
  if (value && typeof value === 'object' && 'name' in value)
    return getText(value.name)
}
const getAddressText = (address: unknown): string | undefined => {
  if (typeof address === 'string') return getText(address)
  if (!address || typeof address !== 'object') return

  const record = address as Record<string, unknown>

  return (
    [
      getText(record.streetAddress),
      [getText(record.postalCode), getText(record.addressLocality)]
        .filter(Boolean)
        .join(' '),
      getText(record.addressCountry),
    ]
      .filter(Boolean)
      .join(', ') || undefined
  )
}
const getLocationText = (location: unknown): string | undefined => {
  if (Array.isArray(location)) return getLocationText(location[0])
  if (typeof location === 'string') return getText(location)
  if (!location || typeof location !== 'object') return

  const record = location as Record<string, unknown>

  return (
    [getText(record.name), getAddressText(record.address)]
      .filter(Boolean)
      .join(', ') || undefined
  )
}
const isEventNode = (node: unknown): node is Record<string, unknown> => {
  if (!node || typeof node !== 'object') return false

  const type = (node as Record<string, unknown>)['@type']

  return (Array.isArray(type) ? type : [type]).some(
    (entry) => typeof entry === 'string' && entry.endsWith('Event'),
  )
}
const collectNodes = (value: unknown): unknown[] => {
  if (Array.isArray(value)) return value.flatMap(collectNodes)
  if (!value || typeof value !== 'object') return []

  const graph = (value as Record<string, unknown>)['@graph']

  return [value, ...collectNodes(graph)]
}

/** Maps the first schema.org event with a name and a start date found in the page's JSON-LD blocks, so that no model has to read the page. */
export const getEventFromJsonLd = (
  html: string,
  pageUrl: string,
): EventIngestOutput | undefined => {
  for (const [, block] of html.matchAll(jsonLdScriptPattern)) {
    let parsed: unknown

    try {
      parsed = JSON.parse(block ?? '')
    } catch {
      continue
    }

    for (const node of collectNodes(parsed)) {
      if (!isEventNode(node)) continue

      const name = getText(node.name)
      const start = getText(node.startDate)

      if (!name || !start) continue

      const description = getText(node.description)
      const url = getResolvedUrl(getText(node.url) ?? '', pageUrl)

      return {
        description: description
          ? htmlToText(description, { wordwrap: false })
          : '',
        end: getText(node.endDate) ?? null,
        is_event: true,
        location: getLocationText(node.location) ?? null,
        name,
        start,
        url: url && /^https?:/.test(url) ? url : pageUrl,
      }
    }
  }
}
