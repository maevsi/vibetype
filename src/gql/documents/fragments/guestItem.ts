import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const GuestItem = graphql(`
  fragment GuestItem on Guest {
    contactByContactId {
      ...ContactItem
    }
    contactId
    eventId
    feedback
    feedbackPaper
    id
    rowId
  }
`)

export const getGuestItem = (
  fragment?: FragmentType<typeof GuestItem> | null,
) => useFragment(GuestItem, fragment)
