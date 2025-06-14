import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllEventsWithFavoritesQueryVariables } from '~~/gql/generated/graphql'

export const allEventsWithFavoritesQuery = graphql(`
  query AllEventsWithFavorites($after: Cursor, $createdBy: UUID, $first: Int!) {
    allEvents(
      after: $after
      condition: { createdBy: $createdBy }
      first: $first
      orderBy: START_DESC
    ) {
      nodes {
        ...EventItemWithFavorites
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`)

export const useAllEventsWithFavoritesQuery = (
  variables?: AllEventsWithFavoritesQueryVariables,
) =>
  useQuery({
    query: allEventsWithFavoritesQuery,
    variables,
  })
