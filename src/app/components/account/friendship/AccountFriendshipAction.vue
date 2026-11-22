<template>
  <div v-if="friendshipState" class="flex flex-col gap-3">
    <AppButton
      v-if="friendshipState === 'none'"
      :aria-label="t('friendAdd')"
      :disabled="isBusy"
      :loading="isPending"
      @click="create"
    >
      {{ t('friendAdd') }}
    </AppButton>
    <div
      v-else
      class="flex flex-wrap items-center justify-between gap-3 rounded-large bg-surface-raised p-3"
    >
      <span class="text-headline">
        {{ friendshipStateDescription }}
      </span>
      <div class="flex gap-2">
        <template v-if="friendshipState === 'requestReceived'">
          <AppButton
            :aria-label="t('requestAccept')"
            :disabled="isBusy"
            :loading="isPending"
            size="small"
            @click="accept"
          >
            {{ t('requestAccept') }}
          </AppButton>
          <AppButton
            :aria-label="t('requestDecline')"
            :disabled="isBusy"
            size="small"
            variant="secondary"
            @click="remove(t('requestDeclined'))"
          >
            {{ t('requestDecline') }}
          </AppButton>
        </template>
        <AppButton
          v-else-if="friendshipState === 'requestSent'"
          :aria-label="t('requestWithdraw')"
          :disabled="isBusy"
          :loading="isPending"
          size="small"
          variant="secondary"
          @click="remove(t('requestWithdrawn'))"
        >
          {{ t('requestWithdraw') }}
        </AppButton>
        <AppButton
          v-else
          :aria-label="t('friendRemove')"
          :disabled="isBusy"
          size="small"
          variant="secondary-critical"
          @click="isRemoveDrawerOpen = true"
        >
          {{ t('friendRemove') }}
        </AppButton>
      </div>
    </div>
    <AccountFriendshipRemoveDrawer
      v-model:open="isRemoveDrawerOpen"
      :account-id
      :username
      @error="refetch"
    />
  </div>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'

// compiler
const { accountId, signedInAccountId, username } = defineProps<{
  accountId: string
  signedInAccountId: string
  username: string
}>()

// api data
const friendshipQuery = useApiQuery({
  query: graphql(`
    query Friendship($accountAId: UUID!, $accountBId: UUID!) {
      friendshipByAccountAIdAndAccountBId(
        accountAId: $accountAId
        accountBId: $accountBId
      ) {
        createdBy
        id
        status
      }
    }
  `),
  variables: computed(() =>
    getFriendshipAccountIds(signedInAccountId, accountId),
  ),
})
await useApiData([friendshipQuery])
const friendshipState = computed(() =>
  friendshipQuery.data.value
    ? getFriendshipState({
        accountId: signedInAccountId,
        friendship:
          friendshipQuery.data.value.friendshipByAccountAIdAndAccountBId,
      })
    : undefined,
)

// mutations
const { acceptFriendship, createFriendship, deleteFriendship, isPending } =
  useFriendshipMutations()
const isBusy = computed(() => isPending.value || friendshipQuery.fetching.value)
const { t } = useI18n()
const friendshipStateDescription = computed(() => {
  if (friendshipState.value === 'accepted') return t('accepted', { username })
  if (friendshipState.value === 'requestReceived')
    return t('requestReceived', { username })
  if (friendshipState.value === 'requestSent') return t('requestSent')

  return undefined
})
const executeUrqlRequest = useExecuteUrqlRequest()
const alertError = useAlertError()
const { polite } = useAnnouncer()

// The friendship may be gone already, e.g. withdrawn by the other account, so
// the shown state is fetched again after a failure.
const refetch = () =>
  friendshipQuery.executeQuery({ requestPolicy: 'network-only' })
const accept = async () => {
  const result = await executeUrqlRequest({
    errorMessageI18n: t('errorAccept'),
    request: acceptFriendship(accountId),
  })

  if (!result) {
    await refetch()
    return
  }

  polite(t('requestAccepted', { username }))
}
const create = async () => {
  const result = await createFriendship(accountId)

  if (getResultData(result)) {
    polite(t('requestSent'))
    return
  }

  // The request fails when a friendship between the two accounts already
  // exists, e.g. as the other account's request that arrived meanwhile. The
  // api does not tell that case apart from other errors, so the current state
  // is fetched and shown in place of an error if there is one.
  const friendshipResult = await refetch()

  if (friendshipResult.data.value?.friendshipByAccountAIdAndAccountBId) return

  alertError({
    ...(result.error ? { error: result.error } : {}),
    messageI18n: t('errorCreate'),
  })
}
const remove = async (announcement: string) => {
  const result = await executeUrqlRequest({
    errorMessageI18n: t('errorRemove'),
    request: deleteFriendship(accountId),
  })

  if (!result) {
    await refetch()
    return
  }

  polite(announcement)
}

// drawer
const isRemoveDrawerOpen = ref<boolean>()
</script>

<i18n lang="yaml">
de:
  accepted: Du bist mit {username} befreundet
  errorAccept: Die Freundschaftsanfrage konnte nicht angenommen werden!
  errorCreate: Die Freundschaftsanfrage konnte nicht gesendet werden!
  errorRemove: Die Freundschaftsanfrage konnte nicht entfernt werden!
  friendAdd: Als Freund hinzufügen
  friendRemove: Freund entfernen
  requestAccept: Annehmen
  requestAccepted: Du bist jetzt mit {username} befreundet.
  requestDecline: Ablehnen
  requestDeclined: Freundschaftsanfrage abgelehnt
  requestReceived: '{username} möchte mit dir befreundet sein'
  requestSent: Freundschaftsanfrage gesendet
  requestWithdraw: Anfrage zurückziehen
  requestWithdrawn: Freundschaftsanfrage zurückgezogen
en:
  accepted: You are friends with {username}
  errorAccept: The friend request could not be accepted!
  errorCreate: The friend request could not be sent!
  errorRemove: The friend request could not be removed!
  friendAdd: Add friend
  friendRemove: Remove friend
  requestAccept: Accept
  requestAccepted: You are now friends with {username}.
  requestDecline: Decline
  requestDeclined: Friend request declined
  requestReceived: '{username} wants to be friends with you'
  requestSent: Friend request sent
  requestWithdraw: Withdraw request
  requestWithdrawn: Friend request withdrawn
</i18n>
