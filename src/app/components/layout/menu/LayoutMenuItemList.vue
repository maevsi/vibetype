<template>
  <LayoutMenuItem
    :title="t('home')"
    :to="store.signedInUsername ? localePath('dashboard') : localePath('index')"
  >
    <AppIconHome />
  </LayoutMenuItem>
  <LayoutMenuItem :title="t('discover')" :to="localePath('event')">
    <AppIconSearch />
  </LayoutMenuItem>
  <LayoutMenuItem
    v-if="store.signedInUsername"
    :title="t('events')"
    :to="
      localePath({
        name: 'event-view-username',
        params: {
          username: store.signedInUsername,
        },
      })
    "
  >
    <AppIconToday />
  </LayoutMenuItem>
  <LayoutMenuItem
    :title="t('account')"
    :to="
      store.signedInUsername
        ? localePath({
            name: 'account-view-username',
            params: {
              username: store.signedInUsername,
            },
          })
        : localePath('session-create')
    "
  >
    <AppIconAccount />
  </LayoutMenuItem>
  <AppUnderConstruction>
    <LayoutMenuItem
      :title="t('notifications')"
      :to="localePath('notification')"
    >
      <div class="relative">
        <IHeroiconsBell :aria-label="t('iconNotifications')" />
        <div class="absolute top-0 right-0">
          <NotificationIndicator />
        </div>
      </div>
    </LayoutMenuItem>
  </AppUnderConstruction>
</template>

<script setup lang="ts">
const store = useStore()
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  account: Account
  discover: Entdecken
  events: Veranstaltungen
  home: Dashboard
  iconNotifications: Icon einer Glocke
  notifications: Benachrichtigungen
en:
  account: Account
  discover: Discover
  events: Events
  home: Home
  iconNotifications: Bell icon
  notifications: Notifications
</i18n>
