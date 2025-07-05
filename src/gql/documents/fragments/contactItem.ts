import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const ContactItem = graphql(`
  fragment ContactItem on Contact {
    nodeId
    id
    accountId
    accountByAccountId {
      id
      username
    }
    accountByCreatedBy {
      id
      username
    }
    addressByAddressId {
      ...AddressItem
    }
    createdBy
    emailAddress
    emailAddressHash
    firstName
    lastName
    nickname
    note
    phoneNumber
    url
  }
`)

export const getContactItem = (
  fragment?: FragmentType<typeof ContactItem> | null,
) => useFragment(ContactItem, fragment)
