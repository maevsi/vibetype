import { z } from 'zod'

import { graphql } from '~~/gql/generated'

const ticketPostBodySchema = z.object({
  guestId: z.uuid(),
  locale: LocaleSchema,
})

const ticketGuestQuery = graphql(`
  query TicketGuest($id: UUID!) {
    guestByRowId(rowId: $id) {
      contactByContactId {
        accountByAccountId {
          id
          username
        }
        accountId
        firstName
        id
        lastName
        nickname
      }
      eventByEventId {
        accountByCreatedBy {
          id
          username
        }
        addressByAddressId {
          id
          name
        }
        end
        id
        name
        slug
        start
      }
      id
      rowId
    }
  }
`)

const TICKET_LABELS = {
  de: {
    date: 'Datum',
    guest: 'Gast',
    hint: 'Dieser Code ist deine Zugangsberechtigung für die Veranstaltung',
    location: 'Ort',
    organizer: 'Veranstaltet von',
  },
  en: {
    date: 'Date',
    guest: 'Guest',
    hint: 'This code is your access authorization for the event',
    location: 'Location',
    organizer: 'Organized by',
  },
} satisfies Record<AppLocale, Record<string, string>>

export default defineEventHandler(async (h3Event) => {
  const { guestId, locale } = await getBodySafe({
    event: h3Event,
    schema: ticketPostBodySchema,
  })

  // only renders what the caller may read, so nobody can brand made up text
  const result = await urqlQuery({
    event: h3Event,
    urql: { query: ticketGuestQuery, variables: { id: guestId } },
  })

  if (result.error) throw result.error

  const guest = result.data?.guestByRowId
  const event = guest?.eventByEventId

  if (!guest || !event) {
    throw createAppError({ status: 404, statusText: 'Guest not found' })
  }

  const labels = TICKET_LABELS[locale]
  const dateTimeFormat = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    month: 'long',
    timeZone: h3Event.context.$timeZone,
    timeZoneName: 'short',
    weekday: 'long',
    year: 'numeric',
  })
  const contactName = guest.contactByContactId
    ? getContactName({
        account: guest.contactByContactId.accountByAccountId,
        contact: guest.contactByContactId,
      })
    : undefined
  const pdf = await getTicketPdf({
    details: [
      {
        label: labels.date,
        value: event.end
          ? dateTimeFormat.formatRange(
              new Date(event.start),
              new Date(event.end),
            )
          : dateTimeFormat.format(new Date(event.start)),
      },
      ...(event.addressByAddressId?.name
        ? [{ label: labels.location, value: event.addressByAddressId.name }]
        : []),
      ...(event.accountByCreatedBy
        ? [
            {
              label: labels.organizer,
              value: event.accountByCreatedBy.username,
            },
          ]
        : []),
      ...(contactName ? [{ label: labels.guest, value: contactName }] : []),
    ],
    guestId: guest.rowId,
    hint: labels.hint,
    title: event.name,
  })

  setResponseHeaders(h3Event, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(`${event.slug}.pdf`)}`,
  })

  return Buffer.from(pdf)
})
