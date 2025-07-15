import { z } from 'zod'

import { EventVisibility } from '~~/gql/generated/graphql'
import { SITE_URL } from '~~/node'

const icalPostBodySchema = z.object({
  contact: z
    .object({
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
    })
    .optional(),
  event: z.object({
    id: z.uuidv4(),
    description: z.string().optional().nullable(),
    end: z.iso.datetime({ offset: true }).optional().nullable(),
    location: z.string().optional().nullable(),
    name: z.string(),
    start: z.iso.datetime({ offset: true }),
    accountByCreatedBy: z.object({
      id: z.string(),
      username: z.string(),
    }),
    slug: z.string(),
    visibility: z.enum(EventVisibility),
  }),
  invitation: z
    .object({
      id: z.uuidv4(),
    })
    .optional(),
})

export default defineEventHandler(async (h3Event) => {
  const body = await getBodySafe({ event: h3Event, schema: icalPostBodySchema })

  const contact = body.contact
  const event = body.event
  const eventAuthorUsername = body.event.accountByCreatedBy.username
  const invitation = body.invitation

  setResponseHeaders(h3Event, {
    'Content-Type': 'text/calendar',
    'Content-Disposition': `attachment; filename="${eventAuthorUsername}_${event.slug}.ics`,
  })

  return getIcalString({ contact, event, invitation, siteUrl: SITE_URL })
})
