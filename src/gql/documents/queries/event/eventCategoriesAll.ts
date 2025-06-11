import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllEventCategoriesQueryVariables } from '~~/gql/generated/graphql'

export const allEventCategoriesQuery = graphql(`
  query AllEventCategories {
    allEventCategories {
      nodes {
        ...EventCategoryItem
      }
    }
  }
`)

export const useAllEventCategoriesQuery = (
  variables?: AllEventCategoriesQueryVariables,
) =>
  useQuery({
    query: allEventCategoriesQuery,
    variables,
  })
