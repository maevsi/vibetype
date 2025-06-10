import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllEventsQueryVariables } from '~~/gql/generated/graphql'

export const allEventsQuery = graphql(`
  query AllEvents($after: Cursor, $createdBy: UUID, $first: Int!) {
    allEvents(
      after: $after
      condition: { createdBy: $createdBy }
      first: $first
      orderBy: START_DESC
    ) {
      nodes {
        ...EventItem
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`)

export const useAllEventsQuery = (variables?: AllEventsQueryVariables) =>
  useQuery({
    query: allEventsQuery,
    variables,
  })
