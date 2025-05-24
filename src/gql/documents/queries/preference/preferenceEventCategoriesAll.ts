import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const allPreferenceEventCategoriesQuery = graphql(`
  query AllPreferenceEventCategories {
    allAccountPreferenceEventCategories {
      nodes {
        ...PreferenceEventCategoryItem
      }
    }
  }
`)

export const useAllPreferenceEventCategoriesQuery = () =>
  useQuery({
    query: allPreferenceEventCategoriesQuery,
    variables: undefined,
  })
