import { z } from 'zod'

import { EventVisibility } from '~~/gql/generated/graphql'
import { SITE_URL } from '~~/node/static'

const icalPostBodySchema = z.object({
  contact: z
    .object({
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
    })
    .optional(),
  event: z.object({
    accountByCreatedBy: z.object({
      username: z.string(),
    }),
    description: z.string().optional().nullable(),
    end: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    name: z.string(),
    rowId: z.string(),
    start: z.string(),
    slug: z.string(),
    visibility: z.nativeEnum(EventVisibility),
  }),
  guest: z
    .object({
      rowId: z.string(),
    })
    .optional(),
})

export default defineEventHandler(async (h3Event) => {
  const body = await getBodySafe({ event: h3Event, schema: icalPostBodySchema })

  const contact = body.contact
  const event = body.event
  const eventAuthorUsername = body.event.accountByCreatedBy.username
  const guest = body.guest

  setResponseHeaders(h3Event, {
    'Content-Type': 'text/calendar',
    'Content-Disposition': `attachment; filename="${eventAuthorUsername}_${event.slug}.ics`,
  })

  return getIcalString({ contact, event, guest, siteUrl: SITE_URL })
})
