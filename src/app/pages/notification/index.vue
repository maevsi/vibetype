<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>
      {{ title }}
      <template #actions>
        <AppButton
          :aria-label="t('settings')"
          size="icon"
          :to="localePath('notification-settings')"
          variant="secondary"
        >
          <AppIconSettings />
        </AppButton>
      </template>
    </LayoutTopBar>
    <LayoutPage>
      <AppAlert
        v-if="error && !items.length"
        class="flex flex-col items-center gap-2"
        variant="error"
      >
        {{ t('loadError') }}
        <AppButton
          :aria-label="t('retry')"
          size="small"
          variant="secondary"
          @click="load"
        >
          {{ t('retry') }}
        </AppButton>
      </AppAlert>
      <AppLoaderPlaceholder v-else-if="!hasLoaded" />
      <div
        v-else-if="!items.length"
        class="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center"
      >
        <div
          class="flex size-16 items-center justify-center rounded-full bg-surface-raised text-fg-1"
        >
          <AppIconBellAlert class="size-8" />
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-heading-medium text-balance">{{
            t('emptyTitle')
          }}</span>
          <p class="text-body-small font-normal text-fg-2">
            {{ t('emptyDescription') }}
          </p>
        </div>
        <AppButton
          :aria-label="t('settings')"
          :to="localePath('notification-settings')"
          variant="secondary"
        >
          {{ t('settings') }}
          <template #prefix>
            <AppIconSettings />
          </template>
        </AppButton>
      </div>
      <div v-else class="flex flex-col gap-4">
        <AppAlert
          v-if="error"
          class="flex flex-col items-center gap-2"
          variant="error"
        >
          {{ t('refreshError') }}
        </AppAlert>
        <ul class="flex flex-col gap-1">
          <NotificationListItem
            v-for="notification in items"
            :key="notification.rowId"
            :is-unread="unreadRowIds.has(notification.rowId)"
            :notification
            @open="markRead(notification.rowId)"
          />
        </ul>
        <div v-if="hasNextPage" class="flex justify-center">
          <AppButton
            :aria-label="t('loadMore')"
            :loading="isLoadingMore"
            variant="secondary"
            @click="loadMore"
          >
            {{ t('loadMore') }}
          </AppButton>
        </div>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
useFeatureRequired('notifications')

// validation
await useSignInRequired()

const { t } = useI18n()
const localePath = useLocalePath()

// api data
const {
  error,
  hasLoaded,
  hasNextPage,
  isLoadingMore,
  items,
  load,
  loadMore,
  markRead,
  unreadRowIds,
} = useNotificationInbox()

// page
const title = t('title')
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  emptyDescription: Einladungen, Antworten und Freundschaftsanfragen erscheinen hier.
  emptyTitle: Alles gelesen
  loadError: Die Benachrichtigungen konnten nicht geladen werden.
  loadMore: Ältere anzeigen
  refreshError: Die Liste konnte nicht aktualisiert werden.
  retry: Erneut versuchen
  settings: Benachrichtigungseinstellungen
  title: Benachrichtigungen
en:
  emptyDescription: Invitations, replies and friend requests show up here.
  emptyTitle: You're all caught up
  loadError: The notifications could not be loaded.
  loadMore: Show older
  refreshError: The list could not be refreshed.
  retry: Try again
  settings: Notification settings
  title: Notifications
</i18n>
