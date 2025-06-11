import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllPreferenceEventCategoriesQueryVariables } from '~~/gql/generated/graphql'

export const allPreferenceEventCategoriesQuery = graphql(`
  query AllPreferenceEventCategories {
    allPreferenceEventCategories {
      nodes {
        ...PreferenceEventCategoryItem
      }
    }
  }
`)

export const useAllPreferenceEventCategoriesQuery = (
  variables?: AllPreferenceEventCategoriesQueryVariables,
) =>
  useQuery({
    query: allPreferenceEventCategoriesQuery,
    variables,
  })
