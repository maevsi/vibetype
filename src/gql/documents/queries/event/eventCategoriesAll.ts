import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllEventCategoriesQueryVariables } from '~~/gql/generated/graphql'

export const useAllEventCategoriesQuery = (
  variables?: AllEventCategoriesQueryVariables,
) =>
  useQuery({
    query: graphql(`
      query AllEventCategories {
        allEventCategories {
          nodes {
            ...EventCategoryItem
          }
        }
      }
    `),
    variables,
  })
