import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const PreferenceEventCategoryItem = graphql(`
  fragment PreferenceEventCategoryItem on PreferenceEventCategory {
    accountId
    categoryId
    id
    rowId
  }
`)

export const getPreferenceEventCategoryItem = (
  fragment?: FragmentType<typeof PreferenceEventCategoryItem> | null,
) => useFragment(PreferenceEventCategoryItem, fragment)
