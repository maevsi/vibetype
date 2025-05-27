import { useQuery, type UseQueryArgs } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { EventSearchQueryVariables } from '~~/gql/generated/graphql'

export const eventSearchQuery = graphql(`
  query EventSearch(
    $after: Cursor
    $first: Int!
    $language: Language
    $query: String
  ) {
    eventSearch(
      after: $after
      first: $first
      language: $language
      query: $query
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

export const useEventSearchQuery = (
  variables?: MaybeRefObj<EventSearchQueryVariables>,
  args?: Partial<UseQueryArgs>,
) =>
  useQuery({
    query: eventSearchQuery,
    variables,
    ...args,
  })
