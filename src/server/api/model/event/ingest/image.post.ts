import type { H3Event } from 'h3'
import sharp from 'sharp'
import { z } from 'zod'

const eventIngestImagePostBodySchema = z.object({
  base64Image: z.string().max(EVENT_INGEST_IMAGE_REQUEST_SIZE_MAXIMUM),
})

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

  const { assertBelowLimit, count } = useEventIngestQuota(jwtPayload.sub)

  assertBelowLimit()

  const base64Buffer = Buffer.from(body.base64Image, 'base64')
  const sharpBuffer = await sharp(base64Buffer)
    .rotate() // applies the orientation phone cameras store as metadata, which the resize would drop
    .resize({
      width: POSTER_SIZE_MAXIMUM,
      height: POSTER_SIZE_MAXIMUM,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg()
    .toBuffer()
  const base64Image = sharpBuffer.toString('base64')
  // count only now, as invalid images fail before reaching OpenAI
  count()

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
    response_format: eventIngestResponseFormat,
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
