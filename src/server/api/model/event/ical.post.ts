import { z } from 'zod'

import { EventVisibility } from '~~/gql/generated/graphcache'
import { SITE_URL } from '~~/node/static'

const icalPostBodySchema = z.object({
  event: z.object({
    accountByCreatedBy: z.object({
      username: z.string(),
    }),
    description: z.string().nullable(),
    end: z.string().nullable(),
    name: z.string(),
    rowId: z.string(),
    start: z.string(),
    slug: z.string(),
    visibility: z.enum(EventVisibility),
  }),
  guest: z
    .object({
      rowId: z.string(),
    })
    .optional(),
})

export default defineEventHandler(async (h3Event) => {
  const body = await getBodySafe({ event: h3Event, schema: icalPostBodySchema })

  const event = body.event
  const eventAuthorUsername = body.event.accountByCreatedBy.username
  const guest = body.guest

  setResponseHeaders(h3Event, {
    'Content-Type': 'text/calendar',
    'Content-Disposition': `attachment; filename="${eventAuthorUsername}_${event.slug}.ics"`,
  })

  return getIcalString({ event, guest, siteUrl: SITE_URL })
})
