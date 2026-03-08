import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const ContactItem = graphql(`
  fragment ContactItem on Contact {
    accountId
    accountByAccountId {
      id
      rowId
      username
    }
    accountByCreatedBy {
      id
      rowId
      username
    }
    addressByAddressId {
      ...AddressItem
    }
    createdBy
    emailAddress
    emailAddressHash
    firstName
    id
    lastName
    nickname
    note
    phoneNumber
    rowId
    url
  }
`)

export const getContactItem = (
  fragment?: FragmentType<typeof ContactItem> | null,
) => useFragment(ContactItem, fragment)
