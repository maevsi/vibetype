import type { H3Event } from 'h3'
import { zodResponseFormat } from 'openai/helpers/zod'
import sharp from 'sharp'
import { z } from 'zod'

const eventIngestImagePostBodySchema = z.object({
  base64Image: z.string().max(14_000_000), // about 10 MB of image data
})
const eventSchema = z.object({
  description: z.string(),
  end: z.string().optional(),
  is_event: z.boolean(),
  location: z.string().optional(),
  name: z.string().optional(),
  start: z.string().optional(),
  url: z.string().optional(),
})
const REQUESTS_PER_ACCOUNT_PER_DAY = 10
// deliberate shortcut: counted in memory, so it resets on restart and is not shared across replicas; the upgrade path is a persistent per-account cost quota
const requestCounts = new Map<string, number>()

// OpenAI's high detail scales the shorter side to 768 pixels, which a portrait poster within 2048 pixels still reaches
const IMAGE_SIZE_MAXIMUM = 2048

const getPrompt =
  () => `You are a data extraction specialist responsible for identifying and accurately cataloging event information.
Only accept images. Only if the image is an event poster containing event information, extract that information into JSON. In all other cases, set \`is_event\` to \`false\`.
If the image contains event information:
- format \`start\` and \`end\` according to ISO 8601 and, if no year is given, use the year of the next occurrence on or after today (${new Date().toISOString().slice(0, 10)})
- output data exactly as given, i.e. in the same language
- don't repeat the \`name\` in the \`description\``

// typing the event lets `$fetch` check the request body against the schema // TODO: switch to `defineValidatedHandler` from `nuxt/server` once available (https://github.com/nuxt/nuxt/issues/36475)
type EventIngestImagePostEvent = H3Event<{
  body: z.input<typeof eventIngestImagePostBodySchema>
}>

export default defineEventHandler(async (event: EventIngestImagePostEvent) => {
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
    schema: eventIngestImagePostBodySchema,
  })

  const day = new Date().toISOString().slice(0, 10)
  const requestCountKey = `${jwtPayload.sub}:${day}`
  const assertBelowLimit = () => {
    const requestCount = requestCounts.get(requestCountKey) ?? 0

    if (requestCount >= REQUESTS_PER_ACCOUNT_PER_DAY)
      throw createAppError({
        status: 429,
        statusText: 'The daily limit of poster readings has been reached.',
      })

    return requestCount
  }

  assertBelowLimit()

  const base64Buffer = Buffer.from(body.base64Image, 'base64')
  const sharpBuffer = await sharp(base64Buffer)
    .rotate() // applies the orientation phone cameras store as metadata, which the resize would drop
    .resize({
      width: IMAGE_SIZE_MAXIMUM,
      height: IMAGE_SIZE_MAXIMUM,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg()
    .toBuffer()
  const base64Image = sharpBuffer.toString('base64')
  // count only now, as invalid images fail before reaching OpenAI, and check again, as parallel requests passed the first check during the resize
  for (const key of requestCounts.keys())
    if (!key.endsWith(`:${day}`)) requestCounts.delete(key)

  requestCounts.set(requestCountKey, assertBelowLimit() + 1)

  // moderation is free of charge (https://platform.openai.com/docs/pricing#moderation)
  const moderation = await openAiClient.moderations.create({
    model: 'omni-moderation-latest',
    input: [
      {
        type: 'image_url',
        image_url: {
          url: `data:image/jpeg;base64,${base64Image}`,
        },
      },
    ],
  })

  const firstResult = moderation.results[0]

  if (firstResult?.flagged) {
    const flaggedCategories = Object.keys(firstResult.categories)
      .filter(
        (key) =>
          firstResult.categories[key as keyof typeof firstResult.categories],
      )
      .join(', ')

    throw createAppError({
      status: 422,
      statusText: `The image seems to contain content that has been moderated to be of the following type${flaggedCategories.length > 1 ? 's' : ''}: ${flaggedCategories}`,
    })
  }

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
            type: 'image_url',
            image_url: {
              detail: 'high', // automatic detail may shrink the poster to 512 pixels, too small for its fine print
              url: `data:image/jpeg;base64,${base64Image}`,
            },
          },
        ],
      },
    ],
    model,
    response_format: zodResponseFormat(eventSchema, 'event'),
  })

  console.info('Poster reading', {
    account: jwtPayload.sub,
    costs: getCompletionCost(completion),
    usage: completion.usage,
  })

  return {
    output: completion.choices[0]?.message?.parsed,
  }
})
