import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

// TODO: work around missing id for `location`
export const AddressItem = graphql(`
  fragment AddressItem on Address {
    id
    city
    country
    line1
    line2
    location {
      latitude
      longitude
    }
    name
    postalCode
    region
  }
`)

export const getAddressItem = (
  fragment?: FragmentType<typeof AddressItem> | null,
) => useFragment(AddressItem, fragment)
