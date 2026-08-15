import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

// Shared field-shape contract for `Guest` data drilled through many
// components (see `Pick<GuestItemFragment, ...>` usages) and used
// server-side for ical generation.
export const GuestItem = graphql(`
  fragment GuestItem on Guest {
    contactByContactId {
      ...ContactItem
    }
    contactId
    feedback
    id
    rowId
  }
`)

export const getGuestItem = (
  fragment?: FragmentType<typeof GuestItem> | null,
) => useFragment(GuestItem, fragment)
