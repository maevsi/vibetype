import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllEventFormatsQueryVariables } from '~~/gql/generated/graphql'

export const useAllEventFormatsQuery = (
  variables?: AllEventFormatsQueryVariables,
) =>
  useQuery({
    query: graphql(`
      query AllEventFormats {
        allEventFormats {
          nodes {
            ...EventFormatItem
          }
        }
      }
    `),
    variables,
  })
