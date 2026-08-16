<template>
  <div class="flex flex-col gap-4">
    <FormInputSearch v-model="searchQuery" />
    <div v-if="accounts?.length" class="flex flex-col gap-2">
      <AccountCard v-for="account in accounts" :key="account.rowId" :account />
    </div>
    <TypographyBodyMedium v-else-if="searchQueryDebouncedTrimmed">
      {{ t('errorNotFound') }}
      <br />
      {{ t('errorNotFoundHint') }}
    </TypographyBodyMedium>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { refDebounced } from '@vueuse/core'

import { graphql } from '~~/gql/generated'

// api data
const queryAccountSearch = graphql(`
  query AccountSearch($after: Cursor, $first: Int, $query: String) {
    accountSearch(after: $after, first: $first, query: $query) {
      nodes {
        id
        rowId
        username
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`)
const after = ref<string | null>()
const searchQuery = ref<string>()
const searchQueryDebounced = refDebounced(searchQuery, 300)
const searchQueryDebouncedTrimmed = computed(
  () => searchQueryDebounced.value?.trim() ?? '',
)
watch(searchQueryDebouncedTrimmed, () => {
  after.value = undefined
})
const accountSearchQuery = useQuery({
  query: queryAccountSearch,
  // An empty query matches every username (see `account_search`), so the
  // query is paused instead of running against the full directory before
  // anything has been typed.
  pause: computed(() => !searchQueryDebouncedTrimmed.value),
  variables: computed(() => ({
    after: after.value,
    first: ITEMS_PER_PAGE_LARGE,
    query: searchQueryDebouncedTrimmed.value,
  })),
})
const api = await useApiData([accountSearchQuery])
const accounts = computed(() => api.value.data.accountSearch?.nodes)

// template
const { t } = useI18n()
useInfiniteScroll({
  loadMore: () => {
    after.value = api.value.data.accountSearch?.pageInfo.endCursor
  },
  canLoadMore: computed(
    () => !!api.value.data.accountSearch?.pageInfo.hasNextPage,
  ),
})
</script>

<i18n lang="yaml">
de:
  errorNotFound: Niemand gefunden
  errorNotFoundHint: Versuche es mit einem anderen Suchbegriff.
en:
  errorNotFound: No one found
  errorNotFoundHint: Try a different search term.
</i18n>
