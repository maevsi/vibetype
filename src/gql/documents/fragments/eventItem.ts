import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const EventItem = graphql(`
  fragment EventItem on Event {
    accountByCreatedBy {
      id
      rowId
      username
    }
    addressByAddressId {
      ...AddressItem
    }
    createdBy
    description
    end
    guestCountMaximum
    id
    isArchived
    isInPerson
    isRemote
    name
    rowId
    slug
    start
    url
    visibility
  }
`)

export const getEventItem = (
  fragment?: FragmentType<typeof EventItem> | null,
) => useFragment(EventItem, fragment)
