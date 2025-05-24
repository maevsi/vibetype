import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const allPreferenceEventSizesQuery = graphql(`
  query AllPreferenceEventSizes {
    allAccountPreferenceEventSizes {
      nodes {
        nodeId
        eventSize
      }
    }
  }
`)

export const useAllPreferenceEventSizesQuery = () =>
  useQuery({
    query: allPreferenceEventSizesQuery,
    variables: undefined,
  })
