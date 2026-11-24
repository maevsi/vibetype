import { graphql } from '~~/gql/generated'
import type { AllContactGroupsQueryVariables } from '~~/gql/generated/graphql'
import { getContactGroupItem } from '~~/shared/utils/contactGroup'

/** Loads every group of the signed-in account, as the filter chips and the group field show them all. */
export const useContactGroupsQuery = () => {
  const store = useStore()

  // data
  const after = ref<string | null>()

  // api data
  const query = useApiQuery({
    query: graphql(`
      query AllContactGroups($after: Cursor, $createdBy: UUID, $first: Int!) {
        allContactGroups(
          after: $after
          condition: { createdBy: $createdBy }
          first: $first
          orderBy: [PRIMARY_KEY_ASC]
        ) {
          nodes {
            ...ContactGroupItem
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `),
    variables: computed<AllContactGroupsQueryVariables>(() => ({
      after: after.value,
      createdBy: store.signedInAccountId,
      first: ITEMS_PER_PAGE_LARGE,
    })),
  })

  // computations
  const contactGroups = computed(
    () =>
      query.data.value?.allContactGroups?.nodes
        .map((node) => getContactGroupItem(node))
        .filter(isNeitherNullNorUndefined) ?? [],
  )

  // lifecycle
  watch(
    () => query.data.value?.allContactGroups?.pageInfo,
    (pageInfo) => {
      if (import.meta.client && pageInfo?.hasNextPage)
        after.value = pageInfo.endCursor
    },
    { immediate: true },
  )

  return { contactGroups, query }
}
