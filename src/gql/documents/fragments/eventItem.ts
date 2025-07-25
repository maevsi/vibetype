import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

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
  }
`)

export const getEventItem = (
  fragment?: FragmentType<typeof EventItem> | null,
) => useFragment(EventItem, fragment)
