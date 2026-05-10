import { z } from 'zod'

import { EventVisibility } from '~~/gql/generated/graphcache'
import { SITE_URL } from '~~/node/static'

const icalPostBodySchema = z.object({
  contact: z
    .object({
      firstName: z.string().nullable(),
      lastName: z.string().nullable(),
    })
    .optional(),
  event: z.object({
    accountByCreatedBy: z.object({
      username: z.string(),
    }),
    description: z.string().nullable(),
    end: z.string().nullable(),
    location: z.string().nullable(),
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
    'Content-Disposition': `attachment; filename="${eventAuthorUsername}_${event.slug}.ics"`,
  })

  return getIcalString({ contact, event, guest, siteUrl: SITE_URL })
})
