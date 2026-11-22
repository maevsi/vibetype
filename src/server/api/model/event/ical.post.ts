import { z } from 'zod'

import { EventVisibility } from '~~/gql/generated/graphcache'
import { SITE_URL } from '~~/node/static'

const icalPostBodySchema = z.object({
  event: z.object({
    accountByCreatedBy: z.object({
      username: z.string(),
    }),
    addressByAddressId: z
      .object({
        city: z.string().nullish(),
        country: z.string().nullish(),
        line1: z.string().nullish(),
        line2: z.string().nullish(),
        location: z
          .object({ latitude: z.number(), longitude: z.number() })
          .nullish(),
        name: z.string().nullish(),
        postalCode: z.string().nullish(),
        region: z.string().nullish(),
      })
      .nullish(),
    description: z.string().nullable(),
    end: z.string().nullable(),
    isInPerson: z.boolean().nullish(),
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
  language: LocaleSchema.optional(),
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

  return getIcalString({
    event,
    guest,
    language: body.language,
    siteUrl: SITE_URL,
  })
})
