import type { H3Event } from 'h3'
import { htmlToText } from 'html-to-text'
import { z } from 'zod'

const eventIngestUrlPostBodySchema = z.object({
  url: z.url({ protocol: /^https?$/ }),
})
// a page that does not answer within this time is not worth holding a request open for
const FETCH_TIMEOUT_MILLISECONDS = 10_000
// event pages are small, and reading stops here so a huge or endless body is never buffered
const RESPONSE_BYTES_MAXIMUM = 2_000_000
// bounds the tokens sent to OpenAI per request, about 8k tokens, enough for the text of an event page
const TEXT_CHARACTERS_MAXIMUM = 30_000
const getPrompt =
  () => `You are a data extraction specialist responsible for identifying and cataloging event information.
Only accept html. Only if the html contains event information, extract that information into JSON. For dates, use ISO 8601 and, if no year is given, the year of the next occurrence on or after today (${new Date().toISOString().slice(0, 10)}). In all other cases, set all fields to an empty string and \`is_event\` to \`false\`.`

// typing the event lets `$fetch` check the request body against the schema // TODO: switch to `defineValidatedHandler` from `nuxt/server` once available (https://github.com/nuxt/nuxt/issues/36475)
type EventIngestUrlPostEvent = H3Event<{
  body: z.input<typeof eventIngestUrlPostBodySchema>
}>

const createBadRequest = (statusText: string) =>
  createAppError({ status: 400, statusText })

// every hop is checked on its own, as a redirect could lead to a non-public address
const fetchPage = async (url: string) => {
  let currentUrl = url

  for (let redirects = 0; ; redirects++) {
    await requirePublicUrl(currentUrl)

    const response = await fetch(currentUrl, {
      headers: { accept: 'text/html,application/xhtml+xml' },
      redirect: 'manual',
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MILLISECONDS),
    }).catch(() => {
      throw createBadRequest('The URL could not be reached.')
    })

    if (response.status >= 300 && response.status < 400) {
      await response.body?.cancel()

      const location = response.headers.get('location')
      const nextUrl = location
        ? getResolvedUrl(location, currentUrl)
        : undefined

      if (!nextUrl || redirects >= EVENT_INGEST_REDIRECTS_MAXIMUM)
        throw createBadRequest('The URL redirects too often.')

      currentUrl = nextUrl
      continue
    }

    return { response, url: currentUrl }
  }
}

const readText = async (response: Response) => {
  const contentType = response.headers.get('content-type') ?? ''

  if (!/^(text\/html|application\/xhtml\+xml)\b/i.test(contentType)) {
    await response.body?.cancel()
    throw createBadRequest('The URL must point to an html page.')
  }

  const charset = /charset=["']?([^\s;"']+)/i.exec(contentType)?.[1]
  let decoder: TextDecoder

  try {
    decoder = new TextDecoder(charset)
  } catch {
    decoder = new TextDecoder()
  }

  const reader = response.body?.getReader()
  let text = ''
  let bytes = 0

  while (reader) {
    const { done, value } = await reader.read().catch(() => {
      throw createBadRequest('The URL could not be read.')
    })

    if (done) break

    bytes += value.byteLength

    if (bytes > RESPONSE_BYTES_MAXIMUM) {
      await reader.cancel()
      throw createBadRequest('The page is too large.')
    }

    text += decoder.decode(value, { stream: true })
  }

  return text + decoder.decode()
}

export default defineEventHandler(async (event: EventIngestUrlPostEvent) => {
  const { client: openAiClient, getCompletionCost, model } = useOpenAi()
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()

  const jwt = getJwtFromCookie()
  const jwtPayload = await verifyJwt<Jwt>(jwt)

  if (!(jwtPayload?.role === `${SITE_NAME}_account`))
    throw createAppError({
      status: 403,
      statusText: 'This endpoint only available to registered users.',
    })

  const body = await getBodySafe({
    event,
    schema: eventIngestUrlPostBodySchema,
  })

  const { assertBelowLimit, count } = useEventIngestQuota(jwtPayload.sub)

  assertBelowLimit()

  const { response, url } = await fetchPage(body.url)

  if (!response.ok) throw createBadRequest('The URL could not be loaded.')

  const html = await readText(response)
  const eventFromJsonLd = getEventFromJsonLd(html, url)

  // the page already names its event, so no model is needed and no request counts
  if (eventFromJsonLd) return { output: eventFromJsonLd }

  const htmlText = htmlToText(html).slice(0, TEXT_CHARACTERS_MAXIMUM)

  // count only now, as unreachable pages and pages with structured data never reach OpenAI
  count()

  const completion = await openAiClient.chat.completions.parse({
    messages: [
      {
        role: 'system',
        content: getPrompt(),
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `\`\`\`
${htmlText}
\`\`\``,
          },
        ],
      },
    ],
    model,
    response_format: eventIngestResponseFormat,
  })

  console.info('Link reading', {
    account: jwtPayload.sub,
    costs: getCompletionCost(completion),
    usage: completion.usage,
  })

  return {
    output: {
      ...completion.choices[0]?.message?.parsed,
      url: body.url,
    },
  }
})
