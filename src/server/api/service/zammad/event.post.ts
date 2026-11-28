import type { H3Event } from 'h3'
import sharp from 'sharp'
import { z } from 'zod'

const text = z.string().max(10_000).nullish()

const eventSubmissionPostBodySchema = z.object({
  base64Image: z
    .string()
    .max(EVENT_INGEST_IMAGE_REQUEST_SIZE_MAXIMUM)
    .optional(),
  description: text,
  end: text,
  location: text,
  name: z.string().max(1_000),
  organizerContact: z.string().max(1_000).optional(),
  sourceUrl: z
    .url({ protocol: /^https?$/ })
    .max(2_000)
    .optional(),
  start: text,
  url: text,
})

type EventSubmissionPostEvent = H3Event<{
  body: z.input<typeof eventSubmissionPostBodySchema>
}>

/** Hands an event that someone found but does not organize to the team, so it is not created under their account. */
export default defineEventHandler(async (event: EventSubmissionPostEvent) => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwtPayload = await verifyJwt<Jwt>(getJwtFromCookie())

  if (!(jwtPayload?.role === `${SITE_NAME}_account`))
    throw createAppError({
      status: 403,
      statusText: 'This endpoint only available to registered users.',
    })

  const body = await getBodySafe({
    event,
    schema: eventSubmissionPostBodySchema,
  })
  const { assertBelowLimit, count } = useEventSubmissionQuota(jwtPayload.sub)

  assertBelowLimit()

  // re-encoded, so only an image reaches the ticket
  const poster = body.base64Image
    ? (
        await sharp(Buffer.from(body.base64Image, 'base64'))
          .rotate()
          .resize({
            fit: 'inside',
            height: POSTER_SIZE_MAXIMUM,
            width: POSTER_SIZE_MAXIMUM,
            withoutEnlargement: true,
          })
          .jpeg()
          .toBuffer()
      ).toString('base64')
    : undefined
  const { createTicket } = useZammad()

  count()
  await createTicket({
    attachments: poster
      ? [{ data: poster, filename: 'poster.jpg', 'mime-type': 'image/jpeg' }]
      : undefined,
    body: [
      `Name: ${body.name}`,
      `Start: ${body.start || ''}`,
      `End: ${body.end || ''}`,
      `Location: ${body.location || ''}`,
      `Url: ${body.url || ''}`,
      `Description: ${body.description || ''}`,
      '',
      `Organizer contact: ${body.organizerContact || ''}`,
      `Source: ${body.sourceUrl || (poster ? 'poster' : '')}`,
      '',
      `Submitted by: ${jwtPayload.username} (${jwtPayload.sub})`,
    ].join('\n'),
    customerEmailAddress: 'anonymous@vibetype.app',
    title: `Event Submission: ${body.name.substring(0, 100)}`,
  })
})
