<template>
  <div class="relative">
    <ButtonIcon
      :aria-label="count ? t('labelUnread', { count }, count) : t('label')"
      is-round
      :to="localePath('notification')"
    >
      <AppIconBell />
    </ButtonIcon>
    <span
      v-if="count"
      aria-hidden="true"
      class="pointer-events-none absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-action-danger px-1 text-caption text-white ring-2 ring-surface"
    >
      {{ getNotificationBadgeText(count) }}
    </span>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const { count } = useNotificationUnreadCount()
</script>

<i18n lang="yaml">
de:
  label: Benachrichtigungen
  labelUnread: Benachrichtigungen, eine ungelesen | Benachrichtigungen, {count} ungelesen
en:
  label: Notifications
  labelUnread: Notifications, one unread | Notifications, {count} unread
</i18n>
