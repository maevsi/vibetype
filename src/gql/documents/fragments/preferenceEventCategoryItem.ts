import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const PreferenceEventCategoryItem = graphql(`
  fragment PreferenceEventCategoryItem on AccountPreferenceEventCategory {
    nodeId
    accountId
    categoryId
    eventCategoryByCategoryId {
      ...EventCategoryItem
    }
  }
`)

export const getPreferenceEventCategoryItem = (
  fragment?: FragmentType<typeof PreferenceEventCategoryItem> | null,
) => useFragment(PreferenceEventCategoryItem, fragment)
