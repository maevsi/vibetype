import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { EventByCreatedByAndSlugQueryVariables } from '~~/gql/generated/graphql'

export const eventByCreatedByAndSlugQuery = graphql(`
  query EventByCreatedByAndSlug(
    $createdBy: UUID!
    $guestId: UUID
    $slug: String!
  ) {
    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {
      ...EventItem
      guestsByEventId(condition: { id: $guestId }) {
        nodes {
          ...GuestItem
          contactByContactId {
            ...ContactItem
          }
        }
      }
    }
  }
`)

export const useEventByCreatedByAndSlugQuery = (
  variables?: EventByCreatedByAndSlugQueryVariables,
) =>
  useQuery({
    query: eventByCreatedByAndSlugQuery,
    variables,
  })
