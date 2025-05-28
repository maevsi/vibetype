import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const EventItem = graphql(`
  fragment EventItem on Event {
    id
    nodeId
    accountByCreatedBy {
      id
      username
    }
    addressByAddressId {
      ...AddressItem
    }
    createdBy
    description
    end
    guestCountMaximum
    isArchived
    isInPerson
    isRemote
    name
    slug
    start
    url
    visibility

    eventFavoritesByEventId {
      nodes {
        ...EventFavoriteItem
      }
    }
  }
`)

export const getEventItem = (
  fragment?: FragmentType<typeof EventItem> | null,
) => useFragment(EventItem, fragment)
