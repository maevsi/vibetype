<template>
  <LayoutMenuItem
    :title="store.signedInUsername ? t('dashboard') : t('home')"
    :to="menuTargets.home"
  >
    <AppIconHome />
  </LayoutMenuItem>
  <LayoutMenuItem :title="t('discover')" :to="menuTargets.discover">
    <AppIconSearch />
  </LayoutMenuItem>
  <AppLink
    :aria-label="t('create')"
    class="flex shrink-0 items-center justify-center rounded-medium bg-action-primary text-on-action-primary hover:bg-action-primary-hover max-lg:mx-2 max-lg:size-10 lg:order-last lg:mt-2 lg:gap-2 lg:px-4 lg:py-3"
    :is-colored="false"
    :to="localePath('event-create')"
  >
    <AppIconPlus />
    <span class="text-body max-lg:hidden">{{ t('createShort') }}</span>
  </AppLink>
  <LayoutMenuItem
    v-if="menuTargets.events"
    :title="t('events')"
    :to="menuTargets.events"
  >
    <AppIconToday />
  </LayoutMenuItem>
  <LayoutMenuItem
    v-if="menuTargets.settings"
    :title="t('settings')"
    :to="menuTargets.settings"
  >
    <AppIconSettings />
  </LayoutMenuItem>
  <LayoutMenuItem
    :title="store.signedInUsername ? t('account') : t('signIn')"
    :to="menuTargets.account ?? localePath('session-create')"
  >
    <AccountProfilePicture
      v-if="store.signedInAccountId"
      :account-id="store.signedInAccountId"
      class="size-6 rounded-full"
      height="24"
      width="24"
    />
    <AppIconAccount v-else />
  </LayoutMenuItem>
</template>

<script setup lang="ts">
const store = useStore()
const { t } = useI18n()
const localePath = useLocalePath()
const menuTargets = useMenuTargets()
</script>

<i18n lang="yaml">
de:
  account: Account
  create: Veranstaltung erstellen
  createShort: Erstellen
  dashboard: Dashboard
  discover: Entdecken
  events: Veranstaltungen
  home: Start
  settings: Einstellungen
  signIn: Einloggen
en:
  account: Account
  create: Create event
  createShort: Create
  dashboard: Dashboard
  discover: Discover
  events: Events
  home: Home
  settings: Settings
  signIn: Log in
</i18n>
