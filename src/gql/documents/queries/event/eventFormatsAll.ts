import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllEventFormatsQueryVariables } from '~~/gql/generated/graphql'

export const allEventFormatsQuery = graphql(`
  query AllEventFormats {
    allEventFormats {
      nodes {
        ...EventFormatItem
      }
    }
  }
`)

export const useAllEventFormatsQuery = (
  variables?: AllEventFormatsQueryVariables,
) =>
  useQuery({
    query: allEventFormatsQuery,
    variables,
  })
