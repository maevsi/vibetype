import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllPreferenceEventFormatsQueryVariables } from '~~/gql/generated/graphql'

export const allPreferenceEventFormatsQuery = graphql(`
  query AllPreferenceEventFormats {
    allAccountPreferenceEventFormats {
      nodes {
        ...PreferenceEventFormatItem
      }
    }
  }
`)

export const useAllPreferenceEventFormatsQuery = (
  variables?: AllPreferenceEventFormatsQueryVariables,
) =>
  useQuery({
    query: allPreferenceEventFormatsQuery,
    variables,
  })
