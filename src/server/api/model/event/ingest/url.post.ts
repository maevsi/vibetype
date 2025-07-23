import * as cheerio from 'cheerio'
import { zodResponseFormat } from 'openai/helpers/zod'
import { z } from 'zod'

const eventIngestUrlPostBodySchema = z.object({
  url: z.string(),
})
const eventSchema = z.object({
  description: z.string(),
  end: z.string().optional(), // TODO: z.iso.datetime({ offset: true }) when OpenAI supports it
  is_event: z.boolean(),
  location: z.string().optional(),
  name: z.string().optional(),
  start: z.string().optional(), // TODO: z.iso.datetime({ offset: true }) when OpenAI supports it
})
const prompt = `You are a data extraction specialist responsible for identifying and cataloging event information.
Only accept html. Only if the html contains event information, extract that information into JSON. For dates, use ISO 8601 and the current year (${new Date().getFullYear()}) if no year is given. In all other cases, set all fields to an empty string and \`is_event\` to \`false\`.`

export default defineEventHandler(async (event) => {
  if (!import.meta.dev) {
    return throwError({
      statusCode: 503,
      statusMessage:
        'This endpoint is currently disabled until proper authentication and cost tracking is implemented.',
    })
  }

  const { client: openAiClient, getCompletionCost } = useOpenAi()
  const { getJwtFromHeader, verifyJwt } = await useJsonWebToken()

  const jwtDecoded = await verifyJwt(getJwtFromHeader())
  if (!(jwtDecoded.role === `${SITE_NAME}_account`))
    return throwError({
      statusCode: 403,
      statusMessage: 'This endpoint only available to registered users.',
    })

  const body = await getBodySafe({
    event,
    schema: eventIngestUrlPostBodySchema,
  })

  const html = await $fetch<string>(body.url)
  const htmlParsed = cheerio.load(html)

  const completion = await openAiClient.chat.completions.parse({
    messages: [
      {
        role: 'system',
        content: prompt,
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `\`\`\`
${htmlParsed.text()}
\`\`\``,
          },
        ],
      },
    ],
    model: 'gpt-4o-mini',
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
