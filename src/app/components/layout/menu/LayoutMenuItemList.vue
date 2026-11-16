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
  <!-- signed in, the bottom bar leaves settings to the profile so that the create button stays centered -->
  <LayoutMenuItem
    :class="store.signedInUsername && 'max-lg:hidden'"
    :title="t('settings')"
    :to="localePath('session-edit')"
  >
    <AppIconSettings />
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
</script>

<i18n lang="yaml">
de:
  account: Account
  create: Veranstaltung erstellen
  createShort: Erstellen
  discover: Entdecken
  events: Veranstaltungen
  home: Dashboard
  settings: Einstellungen
en:
  account: Account
  create: Create event
  createShort: Create
  discover: Discover
  events: Events
  home: Dashboard
  settings: Settings
</i18n>
