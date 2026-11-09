import type { H3Event } from 'h3'

import { InvitationFeedback } from '~~/gql/generated/graphcache'
import { GuestEventDocument } from '~~/gql/generated/graphql'
import { SITE_URL } from '~~/node/static'

// Postgraphile's row-level security decides with the requester's cookie
// whether the guest is visible, so a pass is only signed for what the
// requester may already see.
export const getWalletTicket = async ({
  event,
  guestId,
}: {
  event: H3Event
  guestId: string
}): Promise<WalletTicket> => {
  const cookieHeaderValue = event.headers.get('cookie')
  const result = await event.context.$urql.value
    .query(
      GuestEventDocument,
      { id: guestId },
      {
        fetchOptions: () => ({
          headers: {
            ...(cookieHeaderValue ? { cookie: cookieHeaderValue } : {}),
          },
        }),
        requestPolicy: 'network-only',
      },
    )
    .toPromise()

  if (result.error) {
    throw createAppError({ status: 500, statusText: result.error.message })
  }

  const guest = result.data?.guestByRowId
  const eventData = guest?.eventByEventId

  if (!guest || !eventData) {
    throw createAppError({ status: 404, statusText: 'Guest unavailable' })
  }

  if (guest.feedback !== InvitationFeedback.Accepted) {
    throw createAppError({ status: 403, statusText: 'Invitation not accepted' })
  }

  const address = eventData.addressByAddressId
  const contact = guest.contactByContactId

  return {
    end: eventData.end ? new Date(eventData.end) : undefined,
    eventId: eventData.rowId,
    eventName: eventData.name,
    guestId: guest.rowId,
    guestName: contact
      ? getContactName({ account: contact.accountByAccountId, contact })
      : undefined,
    location: address
      ? {
          latitude: address.location?.latitude ?? undefined,
          longitude: address.location?.longitude ?? undefined,
          name: address.name,
        }
      : undefined,
    organizer: eventData.accountByCreatedBy?.username,
    start: new Date(eventData.start),
    url: `${SITE_URL}/guest/view/${guest.rowId}`,
  }
}
