import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'
import type { ContactItemFragment } from '~~/gql/generated/graphql'

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

export type ContactCreationCandidate = {
  accountId?: string
  emailAddress?: string
  username?: string
}

// Someone who is searched for but is not in the contact book yet can be turned
// into a contact right away, either through the account behind the searched
// username or through the searched email address.
export const getContactCreationCandidate = ({
  accountId,
  contacts,
  emailAddress,
  username,
}: {
  accountId?: string
  contacts: Pick<ContactItemFragment, 'accountByAccountId' | 'emailAddress'>[]
  emailAddress?: string
  username?: string
}): ContactCreationCandidate | undefined => {
  if (emailAddress) {
    return contacts.some(
      (contact) =>
        contact.emailAddress?.toLowerCase() === emailAddress.toLowerCase(),
    )
      ? undefined
      : { emailAddress }
  }

  if (!accountId || !username) return undefined

  return contacts.some(
    (contact) =>
      contact.accountByAccountId?.username.toLowerCase() ===
      username.toLowerCase(),
  )
    ? undefined
    : { accountId, username }
}
