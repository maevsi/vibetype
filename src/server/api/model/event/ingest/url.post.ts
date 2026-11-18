import type { H3Event } from 'h3'
import { htmlToText } from 'html-to-text'
import { zodResponseFormat } from 'openai/helpers/zod'
import { z } from 'zod'

const eventIngestUrlPostBodySchema = z.object({
  url: z.url({ protocol: /^https?$/ }),
})
const eventSchema = z.object({
  description: z.string(),
  end: z.string().optional(),
  is_event: z.boolean(),
  location: z.string().optional(),
  name: z.string().optional(),
  start: z.string().optional(),
})
const getPrompt =
  () => `You are a data extraction specialist responsible for identifying and cataloging event information.
Only accept html. Only if the html contains event information, extract that information into JSON. For dates, use ISO 8601 and, if no year is given, the year of the next occurrence on or after today (${new Date().toISOString().slice(0, 10)}). In all other cases, set all fields to an empty string and \`is_event\` to \`false\`.`

// typing the event lets `$fetch` check the request body against the schema // TODO: switch to `defineValidatedHandler` from `nuxt/server` once available (https://github.com/nuxt/nuxt/issues/36475)
type EventIngestUrlPostEvent = H3Event<{
  body: z.input<typeof eventIngestUrlPostBodySchema>
}>

export default defineEventHandler(async (event: EventIngestUrlPostEvent) => {
  if (!import.meta.dev) {
    throw createAppError({
      status: 503,
      statusText:
        'This endpoint is currently disabled until proper authentication and cost tracking is implemented.',
    })
  }

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

  await requirePublicUrl(body.url)

  // a redirect could lead to a non-public address, so none is followed
  const response = await $fetch.raw<string>(body.url, { redirect: 'manual' })

  if (response.status >= 300)
    throw createAppError({
      status: 400,
      statusText: 'The URL must not redirect.',
    })

  const html = response._data ?? ''
  const htmlText = htmlToText(html)

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
    response_format: zodResponseFormat(eventSchema, 'event'),
  })

  return {
    output: {
      ...completion.choices[0]?.message?.parsed,
      url: body.url,
    },
    usage: completion.usage,
    costs: getCompletionCost(completion),
  }
})
