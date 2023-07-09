import { FragmentType, graphql, useFragment } from '~/gql/generated'

export const InvitationItem = graphql(`
  fragment InvitationItem on Invitation {
    id
    nodeId
    contactId
    eventId
    feedback
    feedbackPaper
    uuid
    contactByContactId {
      ...ContactItem
    }
  }
`)

export const getInvitationItem = (
  fragment?: FragmentType<typeof InvitationItem> | null,
) => useFragment(InvitationItem, fragment)
