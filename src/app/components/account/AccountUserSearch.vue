<template>
  <div class="flex flex-col gap-4">
    <FormInputSearch v-model="searchQuery" />
    <div v-if="users?.length" class="flex flex-col gap-2">
      <UserCard
        v-for="user in users.filter(Boolean)"
        :key="user.id"
        :account="user"
      />
    </div>
    <TypographyBodyMedium v-else-if="searchQuery && users !== undefined">
      {{ t('noUsersFound') }}
    </TypographyBodyMedium>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { refDebounced } from '@vueuse/core'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { graphql } from '~~/gql/generated'
import type { UserSearchQueryVariables } from '~~/gql/generated/graphql'

const queryUserSearch = graphql(`
  query UserSearch($username: String) {
    allAccounts(condition: { username: $username }) {
      nodes {
        ...AccountItem
      }
    }
  }
`)

const searchQuery = ref<string>()
const searchQueryDebounced = refDebounced(searchQuery, 300)
const { t } = useI18n()

const userSearchQuery = useQuery({
  query: queryUserSearch,
  variables: {
    username: searchQueryDebounced,
  } satisfies MaybeRefObj<UserSearchQueryVariables>,
  pause: computed(() => !searchQueryDebounced.value?.trim()),
})

const users = computed(() => {
  if (!searchQueryDebounced.value?.trim()) return undefined

  if (!userSearchQuery.data.value?.allAccounts) return undefined
  return (
    userSearchQuery.data.value.allAccounts.nodes
      ?.map((node) => getAccountItem(node))
      .filter((user): user is NonNullable<typeof user> => Boolean(user)) || []
  )
})
</script>

<i18n lang="yaml">
de:
  noUsersFound: Keine Benutzer gefunden
en:
  noUsersFound: No users found
</i18n>
