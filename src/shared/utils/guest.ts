import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'
import type { GuestItemFragment } from '~~/gql/generated/graphql'

// Shared field-shape contract for `Guest` data drilled through many
// components (see `Pick<GuestItemFragment, ...>` usages) and used
// server-side for ical generation.
export const GuestItem = graphql(`
  fragment GuestItem on Guest {
    companionCount
    companionCountRequested
    contactByContactId {
      ...ContactItem
    }
    contactId
    feedback
    feedbackOverride
    feedbackReason
    id
    rowId
  }
`)

export const getGuestItem = (
  fragment?: FragmentType<typeof GuestItem> | null,
) => useFragment(GuestItem, fragment)

// the organizer's override takes precedence over the guest's own feedback
export const getGuestFeedback = (
  guest: Pick<GuestItemFragment, 'feedback' | 'feedbackOverride'>,
) => guest.feedbackOverride ?? guest.feedback
