import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

// Shared field-shape contract for `Contact` data drilled through many
// components (see `Pick<ContactItemFragment, ...>` usages) and used
// server-side for ical generation.
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
