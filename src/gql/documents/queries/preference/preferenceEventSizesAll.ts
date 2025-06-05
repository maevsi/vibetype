import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllPreferenceEventSizesQueryVariables } from '~~/gql/generated/graphql'

export const allPreferenceEventSizesQuery = graphql(`
  query AllPreferenceEventSizes {
    allPreferenceEventSizes {
      nodes {
        nodeId
        eventSize
      }
    }
  }
`)

export const useAllPreferenceEventSizesQuery = (
  variables?: AllPreferenceEventSizesQueryVariables,
) =>
  useQuery({
    query: allPreferenceEventSizesQuery,
    variables,
  })
