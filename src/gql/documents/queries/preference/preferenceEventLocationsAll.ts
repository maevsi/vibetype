import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const allPreferenceEventLocationsQuery = graphql(`
  query AllPreferenceEventLocations {
    allAccountPreferenceEventLocations {
      nodes {
        ...PreferenceEventLocationItem
      }
    }
  }
`)

export const useAllPreferenceEventLocationsQuery = () =>
  useQuery({
    query: allPreferenceEventLocationsQuery,
    variables: undefined,
  })
