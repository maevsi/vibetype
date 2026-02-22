import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

// TODO: work around missing id for `location`
export const AddressItem = graphql(`
  fragment AddressItem on Address {
    city
    country
    id
    line1
    line2
    location {
      latitude
      longitude
    }
    name
    postalCode
    region
    rowId
  }
`)

export const getAddressItem = (
  fragment?: FragmentType<typeof AddressItem> | null,
) => useFragment(AddressItem, fragment)
