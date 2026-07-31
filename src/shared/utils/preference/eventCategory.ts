import { useQuery } from '@urql/vue'
import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

// Shared with `shared/utils/urql.ts`'s graphcache config, which needs the
// exact same query object to patch the cache after create/delete mutations.
export const PreferenceEventCategoryItem = graphql(`
  fragment PreferenceEventCategoryItem on PreferenceEventCategory {
    categoryId
    id
  }
`)

export const getPreferenceEventCategoryItem = (
  fragment?: FragmentType<typeof PreferenceEventCategoryItem> | null,
) => useFragment(PreferenceEventCategoryItem, fragment)

export const allPreferenceEventCategoriesQuery = graphql(`
  query AllPreferenceEventCategories {
    allPreferenceEventCategories {
      nodes {
        ...PreferenceEventCategoryItem
      }
    }
  }
`)

export const useAllPreferenceEventCategoriesQuery = () =>
  useQuery({ query: allPreferenceEventCategoriesQuery })
