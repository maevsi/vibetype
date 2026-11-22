<template>
  <AppCardButton
    v-if="friendCount !== undefined"
    :description="t('friendCount', friendCount)"
    :title="t('friends')"
    :to="
      localePath({
        name: 'account-view-username-friend',
        params: { username },
      })
    "
  >
    <AppIconUsers />
  </AppCardButton>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'

// compiler
const { accountId, username } = defineProps<{
  accountId: string
  username: string
}>()

// api data
// Friendships cannot be filtered by status, but an accepted one was updated by
// one of its accounts and created by the other, while a requested one was
// never updated. The pending requests an account created are visible to their
// two accounts only and must not count.
const friendshipCountQuery = useApiQuery({
  query: graphql(`
    query FriendshipCount($accountId: UUID!) {
      friendshipsAccepted: allFriendships(
        condition: { updatedBy: $accountId }
      ) {
        totalCount
      }
      friendshipsCreated: allFriendships(condition: { createdBy: $accountId }) {
        totalCount
      }
      friendshipsPending: allFriendships(
        condition: { createdBy: $accountId, updatedBy: null }
      ) {
        totalCount
      }
    }
  `),
  variables: computed(() => ({ accountId })),
})
await useApiData([friendshipCountQuery])
const friendCount = computed(() => {
  const data = friendshipCountQuery.data.value

  return data?.friendshipsAccepted && data.friendshipsCreated
    ? data.friendshipsAccepted.totalCount +
        data.friendshipsCreated.totalCount -
        (data.friendshipsPending?.totalCount ?? 0)
    : undefined
})

// template
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  friendCount: Keine Freunde | Ein Freund | {n} Freunde
  friends: Freunde
en:
  friendCount: No friends | One friend | {n} friends
  friends: Friends
</i18n>
