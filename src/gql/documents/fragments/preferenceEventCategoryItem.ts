import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const PreferenceEventCategoryItem = graphql(`
  fragment PreferenceEventCategoryItem on PreferenceEventCategory {
    nodeId
    accountId
    categoryId
  }
`)

export const getPreferenceEventCategoryItem = (
  fragment?: FragmentType<typeof PreferenceEventCategoryItem> | null,
) => useFragment(PreferenceEventCategoryItem, fragment)
