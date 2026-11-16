<template>
  <Loader :api>
    <div class="flex flex-col gap-6">
      <section
        v-if="friendshipRequests?.length"
        :aria-label="t('requests')"
        class="flex flex-col gap-3"
      >
        <span class="text-heading-medium text-balance">
          {{ t('requests') }}
        </span>
        <ul class="flex flex-col gap-3">
          <li
            v-for="account in friendshipRequests"
            :key="account.rowId"
            class="flex flex-col gap-2"
          >
            <AccountCard :account />
            <div class="flex gap-2">
              <AppButton
                :aria-label="t('requestAccept', { username: account.username })"
                class="flex-1"
                :disabled="isPending"
                size="small"
                @click="accept(account)"
              >
                {{ t('accept') }}
              </AppButton>
              <AppButton
                :aria-label="
                  t('requestDecline', { username: account.username })
                "
                class="flex-1"
                :disabled="isPending"
                size="small"
                variant="secondary"
                @click="decline(account)"
              >
                {{ t('decline') }}
              </AppButton>
            </div>
          </li>
        </ul>
      </section>
      <section :aria-label="t('friends')" class="flex flex-col gap-3">
        <span
          v-if="friendshipRequests?.length"
          class="text-heading-medium text-balance"
        >
          {{ t('friends') }}
        </span>
        <ul v-if="friends.length" class="flex flex-col gap-3">
          <li
            v-for="account in friends"
            :key="account.rowId"
            class="flex items-center gap-2"
          >
            <AccountCard :account class="min-w-0 flex-1" />
            <AppButton
              v-if="isOwnList"
              :aria-label="t('closeFriend', { username: account.username })"
              :aria-pressed="closeFriendRowIds.has(account.friendshipId)"
              :disabled="isPending || closeFriendsQuery.fetching.value"
              size="small"
              :variant="
                closeFriendRowIds.has(account.friendshipId)
                  ? 'primary'
                  : 'secondary'
              "
              @click="toggleCloseFriend(account)"
            >
              <AppIconHeartSolid
                v-if="closeFriendRowIds.has(account.friendshipId)"
              />
              <AppIconHeart v-else />
            </AppButton>
            <AppButton
              v-if="isOwnList"
              :aria-label="t('friendRemove', { username: account.username })"
              :disabled="isPending"
              size="small"
              variant="secondary-critical"
              @click="openRemoveDrawer(account)"
            >
              {{ t('remove') }}
            </AppButton>
          </li>
        </ul>
        <span v-else-if="!canLoadMore" class="text-body">
          {{ isOwnList ? t('friendsNoneOwn') : t('friendsNone', { username }) }}
        </span>
        <AppButton
          v-if="isOwnList"
          :aria-label="t('friendsFind')"
          :to="localePath({ name: 'account' })"
          variant="secondary"
        >
          <AppIconSearch />
          {{ t('friendsFind') }}
        </AppButton>
      </section>
    </div>
    <AccountFriendshipRemoveDrawer
      v-if="friendRemoveAccount"
      v-model:open="isRemoveDrawerOpen"
      :account-id="friendRemoveAccount.rowId"
      :username="friendRemoveAccount.username"
      @error="refetch"
    />
  </Loader>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import { FriendshipStatus } from '~~/gql/generated/graphcache'

type FriendAccount = { rowId: string; username: string }
type Friend = FriendAccount & { friendshipId: string }

// compiler
const { accountId, signedInAccountId, username } = defineProps<{
  accountId: string
  signedInAccountId: string
  username: string
}>()
const isOwnList = computed(() => accountId === signedInAccountId)

// api data
// Friendships cannot be filtered by status, but an accepted one was updated by
// one of its accounts and created by the other, while a requested one was
// never updated. So the friendships an account accepted are all friends, and
// the ones it created are friends unless they are still requested.
const afterAccepted = ref<string | null>()
const afterCreated = ref<string | null>()
const friendshipsQuery = useApiQuery({
  query: graphql(`
    query AccountFriendships(
      $accountId: UUID!
      $afterAccepted: Cursor
      $afterCreated: Cursor
      $first: Int!
    ) {
      friendshipsAccepted: allFriendships(
        after: $afterAccepted
        condition: { updatedBy: $accountId }
        first: $first
      ) {
        nodes {
          accountByCreatedBy {
            id
            rowId
            username
          }
          id
          rowId
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      friendshipsCreated: allFriendships(
        after: $afterCreated
        condition: { createdBy: $accountId }
        first: $first
      ) {
        nodes {
          accountByUpdatedBy {
            id
            rowId
            username
          }
          id
          rowId
          status
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `),
  variables: computed(() => ({
    accountId,
    afterAccepted: afterAccepted.value,
    afterCreated: afterCreated.value,
    first: ITEMS_PER_PAGE_LARGE,
  })),
})
// Only the two accounts of a requested friendship see it, so every one of
// them involves the signed in account. The ones it created itself are left
// out, as sent requests are shown on the requested account's profile only.
// Those take up page slots, so all pages are loaded one after another.
const afterRequests = ref<string | null>()
const friendshipRequestsQuery = useApiQuery({
  pause: computed(() => !isOwnList.value),
  query: graphql(`
    query FriendshipRequests($after: Cursor, $first: Int!) {
      friendshipRequests: allFriendships(
        after: $after
        condition: { updatedBy: null }
        first: $first
      ) {
        nodes {
          accountByCreatedBy {
            id
            rowId
            username
          }
          createdBy
          id
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `),
  variables: computed(() => ({
    after: afterRequests.value,
    first: ITEMS_PER_PAGE_LARGE,
  })),
})
watch(
  () => friendshipRequestsQuery.data.value?.friendshipRequests?.pageInfo,
  (pageInfo) => {
    if (pageInfo?.hasNextPage) afterRequests.value = pageInfo.endCursor
  },
)
// The markings are only visible to the account that made them, so there is
// nothing to query on another account's list. As with the requests, all pages
// are loaded one after another to know every marked friend.
// A refetch from the current cursor drops the earlier pages, so more than one
// page (100) of markings is the ceiling; upgrade by appending the created
// marking to the cache from the mutation's payload instead of refetching.
const afterCloseFriends = ref<string | null>()
const closeFriendsQuery = useApiQuery({
  pause: computed(() => !isOwnList.value),
  query: graphql(`
    query CloseFriends($after: Cursor, $first: Int!) {
      allCloseFriends(after: $after, first: $first) {
        nodes {
          friendshipId
          id
          rowId
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `),
  variables: computed(() => ({
    after: afterCloseFriends.value,
    first: ITEMS_PER_PAGE_LARGE,
  })),
})
watch(
  () => closeFriendsQuery.data.value?.allCloseFriends?.pageInfo,
  (pageInfo) => {
    if (pageInfo?.hasNextPage) afterCloseFriends.value = pageInfo.endCursor
  },
)
const api = await useApiData([
  friendshipsQuery,
  ...(isOwnList.value ? [friendshipRequestsQuery, closeFriendsQuery] : []),
])
const friendshipsAccepted = computed(
  () => friendshipsQuery.data.value?.friendshipsAccepted,
)
const friendshipsCreated = computed(
  () => friendshipsQuery.data.value?.friendshipsCreated,
)
// The created friendships follow once all accepted ones are loaded, so that
// loading more only ever appends to the list.
const friends = computed(() =>
  [
    ...(friendshipsAccepted.value?.nodes.map((friendship) => ({
      account: friendship.accountByCreatedBy,
      friendshipId: friendship.rowId,
    })) ?? []),
    ...((!friendshipsAccepted.value?.pageInfo.hasNextPage &&
      friendshipsCreated.value?.nodes
        .filter((friendship) => friendship.status === FriendshipStatus.Accepted)
        .map((friendship) => ({
          account: friendship.accountByUpdatedBy,
          friendshipId: friendship.rowId,
        }))) ||
      []),
  ].flatMap<Friend>(({ account, friendshipId }) =>
    account ? [{ ...account, friendshipId }] : [],
  ),
)
const closeFriendRowIds = computed(
  () =>
    new Map(
      closeFriendsQuery.data.value?.allCloseFriends?.nodes.map(
        (closeFriend) => [closeFriend.friendshipId, closeFriend.rowId],
      ),
    ),
)
const friendshipRequests = computed(() =>
  isOwnList.value
    ? friendshipRequestsQuery.data.value?.friendshipRequests?.nodes
        .filter((friendship) => friendship.createdBy !== signedInAccountId)
        .map((friendship) => friendship.accountByCreatedBy)
        .filter(isNeitherNullNorUndefined)
    : undefined,
)
const canLoadMore = computed(
  () =>
    !!friendshipsAccepted.value?.pageInfo.hasNextPage ||
    !!friendshipsCreated.value?.pageInfo.hasNextPage,
)
const loadMore = () => {
  if (friendshipsAccepted.value?.pageInfo.hasNextPage) {
    afterAccepted.value = friendshipsAccepted.value.pageInfo.endCursor
    return
  }

  afterCreated.value = friendshipsCreated.value?.pageInfo.endCursor
}
useInfiniteScroll({ canLoadMore, loadMore })
// Pending friendships are filtered out above, so a page can hold no friend and
// not scroll, which would never trigger loading more.
watchEffect(() => {
  if (
    !friends.value.length &&
    canLoadMore.value &&
    !friendshipsQuery.fetching.value
  )
    loadMore()
})

// mutations
const {
  acceptFriendship,
  deleteFriendship,
  isPending: isFriendshipPending,
} = useFriendshipMutations()
const createCloseFriendMutation = useMutation(
  graphql(`
    mutation CreateCloseFriend($input: CreateCloseFriendInput!) {
      createCloseFriend(input: $input) {
        clientMutationId
      }
    }
  `),
)
const deleteCloseFriendMutation = useMutation(
  graphql(`
    mutation DeleteCloseFriendByRowId($input: DeleteCloseFriendByRowIdInput!) {
      deleteCloseFriendByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const isPending = computed(
  () =>
    isFriendshipPending.value ||
    createCloseFriendMutation.fetching.value ||
    deleteCloseFriendMutation.fetching.value,
)
const { t } = useI18n()
const executeUrqlRequest = useExecuteUrqlRequest()
const { polite } = useAnnouncer()
// The friendship may be gone already, e.g. withdrawn by the other account, so
// the shown state is fetched again after a failure.
const refetch = () =>
  Promise.all([
    friendshipsQuery.executeQuery({ requestPolicy: 'network-only' }),
    ...(isOwnList.value
      ? [
          friendshipRequestsQuery.executeQuery({
            requestPolicy: 'network-only',
          }),
          closeFriendsQuery.executeQuery({ requestPolicy: 'network-only' }),
        ]
      : []),
  ])
const accept = async (account: FriendAccount) => {
  const result = await executeUrqlRequest({
    errorMessageI18n: t('errorAccept'),
    request: acceptFriendship(account.rowId),
  })

  if (!result) {
    await refetch()
    return
  }

  polite(t('accepted', { username: account.username }))
}
const decline = async (account: FriendAccount) => {
  const result = await executeUrqlRequest({
    errorMessageI18n: t('errorDecline'),
    request: deleteFriendship(account.rowId),
  })

  if (!result) {
    await refetch()
    return
  }

  polite(t('declined', { username: account.username }))
}

const toggleCloseFriend = async (friend: Friend) => {
  const closeFriendRowId = closeFriendRowIds.value.get(friend.friendshipId)
  const errorMessageI18n = t('errorCloseFriend')
  const result = closeFriendRowId
    ? await executeUrqlRequest({
        errorMessageI18n,
        request: deleteCloseFriendMutation.executeMutation({
          input: { rowId: closeFriendRowId },
        }),
      })
    : await executeUrqlRequest({
        errorMessageI18n,
        request: createCloseFriendMutation.executeMutation({
          input: {
            closeFriend: {
              createdBy: signedInAccountId,
              friendshipId: friend.friendshipId,
            },
          },
        }),
      })

  if (!result) {
    await refetch()
    return
  }

  polite(
    closeFriendRowId
      ? t('closeFriendRemoved', { username: friend.username })
      : t('closeFriendAdded', { username: friend.username }),
  )
}

// drawer
const isRemoveDrawerOpen = ref<boolean>()
const friendRemoveAccount = ref<FriendAccount>()
const openRemoveDrawer = (account: FriendAccount) => {
  friendRemoveAccount.value = account
  isRemoveDrawerOpen.value = true
}

// template
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  accept: Annehmen
  accepted: Du bist jetzt mit {username} befreundet.
  closeFriend: '{username} als engen Freund markieren'
  closeFriendAdded: '{username} wird benachrichtigt, wenn du zu einer öffentlichen Veranstaltung zusagst.'
  closeFriendRemoved: '{username} ist kein enger Freund mehr.'
  decline: Ablehnen
  declined: Die Freundschaftsanfrage von {username} wurde abgelehnt.
  errorAccept: Die Freundschaftsanfrage konnte nicht angenommen werden!
  errorCloseFriend: Die Markierung als enger Freund konnte nicht geändert werden!
  errorDecline: Die Freundschaftsanfrage konnte nicht abgelehnt werden!
  friendRemove: '{username} als Freund entfernen'
  friends: Freunde
  friendsFind: Freunde finden
  friendsNone: '{username} hat noch keine Freunde.'
  friendsNoneOwn: Du hast noch keine Freunde hinzugefügt.
  remove: Entfernen
  requestAccept: Anfrage von {username} annehmen
  requestDecline: Anfrage von {username} ablehnen
  requests: Freundschaftsanfragen
en:
  accept: Accept
  accepted: You are now friends with {username}.
  closeFriend: Mark {username} as a close friend
  closeFriendAdded: '{username} will be notified when you attend a public event.'
  closeFriendRemoved: '{username} is no longer a close friend.'
  decline: Decline
  declined: The friend request from {username} was declined.
  errorAccept: The friend request could not be accepted!
  errorCloseFriend: The close friend marking could not be changed!
  errorDecline: The friend request could not be declined!
  friendRemove: Remove {username} from your friends
  friends: Friends
  friendsFind: Find friends
  friendsNone: '{username} has no friends yet.'
  friendsNoneOwn: You have not added any friends yet.
  remove: Remove
  requestAccept: Accept {username}'s request
  requestDecline: Decline {username}'s request
  requests: Friend requests
</i18n>
