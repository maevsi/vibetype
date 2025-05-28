import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllPreferenceEventLocationsQueryVariables } from '~~/gql/generated/graphql'

export const allPreferenceEventLocationsQuery = graphql(`
  query AllPreferenceEventLocations {
    allAccountPreferenceEventLocations {
      nodes {
        ...PreferenceEventLocationItem
      }
    }
  }
`)

export const useAllPreferenceEventLocationsQuery = (
  variables?: AllPreferenceEventLocationsQueryVariables,
) =>
  useQuery({
    query: allPreferenceEventLocationsQuery,
    variables,
  })
