<template>
  <LayoutMenuItem
    :title="t('home')"
    :to="store.signedInUsername ? localePath('dashboard') : localePath('index')"
  >
    <IVibetypeHome :aria-label="t('iconHome')" class="size-6" />
  </LayoutMenuItem>
  <LayoutMenuItem :title="t('discover')" :to="localePath('event')">
    <IVibetypeSearch :aria-label="t('iconDiscover')" class="size-6" />
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
    <IVibetypeToday :aria-label="t('iconEvents')" class="size-6" />
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
    <IVibetypeAccount :aria-label="t('iconAccounts')" class="size-6" />
  </LayoutMenuItem>
  <UnderConstruction>
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
  </UnderConstruction>
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
  iconAccounts: Icon einer Person in einem Kreis
  iconDiscover: Icon einer Lupe
  iconEvents: Icon eines Kalenders, auf dem ein Tag markiert ist
  iconHome: Icon eines Hauses
  iconNotifications: Icon einer Glocke
  notifications: Benachrichtigungen
en:
  account: Account
  discover: Discover
  events: Events
  home: Home
  iconAccounts: Icon of a person in a circle
  iconDiscover: Icon of a magnifying glass
  iconEvents: Icon of a calender on which a date is marked
  iconHome: Icon of a house
  iconNotifications: Bell icon
  notifications: Notifications
</i18n>
