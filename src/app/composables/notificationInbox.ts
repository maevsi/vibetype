import { useEventListener } from '@vueuse/core'

import { graphql } from '~~/gql/generated'
import type { AllAccountNotificationsQuery } from '~~/gql/generated/graphql'

const NOTIFICATIONS_PER_PAGE = 20

const allAccountNotificationsQuery = graphql(`
  query AllAccountNotifications($after: Cursor, $first: Int!) {
    allAccountNotifications(
      after: $after
      first: $first
      orderBy: CREATED_AT_DESC
    ) {
      nodes {
        actorAccountId
        createdAt
        eventId
        friendshipId
        guestId
        id
        payload
        readAt
        rowId
        type
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`)

const accountNotificationUnreadCountQuery = graphql(`
  query AccountNotificationUnreadCount {
    accountNotificationUnreadCount
  }
`)

const updateAccountNotificationReadAtMutation = graphql(`
  mutation UpdateAccountNotificationReadAt(
    $input: UpdateAccountNotificationByRowIdInput!
  ) {
    updateAccountNotificationByRowId(input: $input) {
      accountNotification {
        id
        readAt
        rowId
      }
    }
  }
`)

const accountNotificationReadAllMutation = graphql(`
  mutation AccountNotificationReadAll(
    $input: AccountNotificationReadAllInput!
  ) {
    accountNotificationReadAll(input: $input) {
      result
    }
  }
`)

export type AccountNotificationItem = NonNullable<
  AllAccountNotificationsQuery['allAccountNotifications']
>['nodes'][number]

// Loads the inbox newest first and marks what it shows as read. The dots stay for what was unread on arrival, so the page still tells new from old after the read state changed.
export const useNotificationInbox = () => {
  const { $urql } = useNuxtApp()
  const notificationStore = useNotificationStore()
  const store = useStore()

  const endCursor = ref<string | null>(null)
  const error = ref<Error>()
  const hasLoaded = ref(false)
  const hasNextPage = ref(false)
  const isLoading = ref(false)
  const isLoadingMore = ref(false)
  const items = ref<AccountNotificationItem[]>([])
  const unreadRowIds = ref(new Set<string>())
  const markedRowIds = new Set<string>()

  const markRead = async (rowIds: string[]) => {
    const pendingRowIds = rowIds.filter((rowId) => !markedRowIds.has(rowId))

    if (!pendingRowIds.length) return

    pendingRowIds.forEach((rowId) => markedRowIds.add(rowId))

    const readAt = new Date().toISOString()
    const results = await Promise.allSettled(
      pendingRowIds.map((rowId) =>
        $urql.value
          .mutation(updateAccountNotificationReadAtMutation, {
            input: { accountNotificationPatch: { readAt }, rowId },
          })
          .toPromise(),
      ),
    )

    // A failed update is retried the next time the notification is opened.
    results.forEach((result, index) => {
      const rowId = pendingRowIds[index]

      if (rowId && (result.status !== 'fulfilled' || result.value.error))
        markedRowIds.delete(rowId)
    })
    notificationStore.readRefresh()
  }

  // One call marks everything read, including the pages that are not loaded yet.
  const markAllRead = async () => {
    const result = await $urql.value
      .mutation(accountNotificationReadAllMutation, { input: {} })
      .toPromise()

    if (!result.error) notificationStore.readRefresh()
  }

  const fetchPage = async (after: string | null) => {
    const result = await $urql.value
      .query(
        allAccountNotificationsQuery,
        { after, first: NOTIFICATIONS_PER_PAGE },
        { requestPolicy: 'network-only' },
      )
      .toPromise()
    const connection = result.data?.allAccountNotifications

    if (result.error || !connection) {
      error.value = result.error ?? new Error('Response without data')
      return []
    }

    error.value = undefined
    endCursor.value = connection.pageInfo.endCursor ?? null
    hasNextPage.value = connection.pageInfo.hasNextPage

    connection.nodes
      .filter((node) => !node.readAt)
      .forEach((node) => unreadRowIds.value.add(node.rowId))

    return connection.nodes
  }

  const load = async () => {
    if (!store.signedInAccountId || isLoading.value) return

    isLoading.value = true

    try {
      const nodes = await fetchPage(null)

      if (!error.value) items.value = nodes

      hasLoaded.value = true

      if (nodes.some((node) => !node.readAt)) await markAllRead()
    } finally {
      isLoading.value = false
    }
  }

  const loadMore = async () => {
    if (!hasNextPage.value || isLoading.value || isLoadingMore.value) return

    isLoadingMore.value = true

    try {
      const nodes = await fetchPage(endCursor.value)

      items.value = [...items.value, ...nodes]
    } finally {
      isLoadingMore.value = false
    }
  }

  if (import.meta.client) {
    onMounted(load)
    // A notification that arrives while the page is open shows up without a reload.
    watch(() => notificationStore.inboxRevision, load)
    watch(() => store.signedInAccountId, load)
  }

  return {
    error,
    hasLoaded,
    hasNextPage,
    isLoading,
    isLoadingMore,
    items,
    load,
    loadMore,
    markRead: (rowId: string) => markRead([rowId]),
    unreadRowIds,
  }
}

export const useNotificationUnreadCount = () => {
  const { $urql } = useNuxtApp()
  const notificationStore = useNotificationStore()
  const store = useStore()

  const count = ref(0)

  const refresh = async () => {
    if (!store.signedInAccountId) {
      count.value = 0
      return
    }

    const result = await $urql.value
      .query(
        accountNotificationUnreadCountQuery,
        {},
        { requestPolicy: 'network-only' },
      )
      .toPromise()

    // A failed refresh keeps the last known count instead of hiding unread notifications.
    if (typeof result.data?.accountNotificationUnreadCount === 'number')
      count.value = result.data.accountNotificationUnreadCount
  }

  if (import.meta.client) {
    watch(
      () =>
        [
          store.signedInAccountId,
          notificationStore.inboxRevision,
          notificationStore.readRevision,
        ] as const,
      refresh,
      { immediate: true },
    )
    // Pushes only reach a window that is in the background through the service worker, so the count is refreshed once the window is back.
    useEventListener(document, 'visibilitychange', () => {
      if (document.visibilityState === 'visible') refresh()
    })
  }

  return { count }
}
