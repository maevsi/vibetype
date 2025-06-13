import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const EventItemWithFavorites = graphql(`
  fragment EventItemWithFavorites on Event {
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

export const getEventItemWithFavorites = (
  fragment?: FragmentType<typeof EventItemWithFavorites> | null,
) => useFragment(EventItemWithFavorites, fragment)
