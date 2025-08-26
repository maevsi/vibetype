<template>
  <div class="flex flex-col gap-4">
    <FormInputSearch v-model="searchQuery" />
    <div v-if="accounts?.length" class="flex flex-col gap-2">
      <AccountCard v-for="account in accounts" :key="account.id" :account />
    </div>
    <TypographyBodyMedium v-else>
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
  query AccountSearch($after: Cursor, $first: Int, $username: String) {
    allAccounts(
      after: $after
      condition: { username: $username }
      first: $first
      orderBy: USERNAME_ASC
    ) {
      nodes {
        id
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
  () => searchQueryDebounced.value?.trim() || undefined,
)
watch(searchQueryDebouncedTrimmed, () => {
  after.value = undefined
})
const accountSearchQuery = useQuery({
  query: queryAccountSearch,
  variables: computed(() => ({
    after: after.value,
    first: ITEMS_PER_PAGE_LARGE,
    username: searchQueryDebouncedTrimmed.value,
  })),
})
const api = await useApiData([accountSearchQuery])
const accounts = computed(() => api.value.data.allAccounts?.nodes)

// template
const { t } = useI18n()
useInfiniteScroll({
  loadMore: () => {
    after.value = api.value.data.allAccounts?.pageInfo.endCursor
  },
  canLoadMore: computed(
    () => !!api.value.data.allAccounts?.pageInfo.hasNextPage,
  ),
})
</script>

<i18n lang="yaml">
de:
  errorNotFound: Niemand gefunden
  errorNotFoundHint: ℹ️ Der Nutzername muss exakt angegeben werden, Buchstabe für Buchstabe. Aber bald wird es möglich sein, ohne diese Beschränkung zu suchen ✨
en:
  errorNotFound: Noone found
  errorNotFoundHint: ℹ️ The username must match exactly, character by character. A more relaxed search will be available shortly ✨
</i18n>
