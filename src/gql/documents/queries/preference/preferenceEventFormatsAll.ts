import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const allPreferenceEventFormatsQuery = graphql(`
  query AllPreferenceEventFormats {
    allAccountPreferenceEventFormats {
      nodes {
        ...PreferenceEventFormatItem
      }
    }
  }
`)

export const useAllPreferenceEventFormatsQuery = () =>
  useQuery({
    query: allPreferenceEventFormatsQuery,
    variables: undefined,
  })
