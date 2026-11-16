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
    class="mx-2 flex size-10 shrink-0 items-center justify-center rounded-medium bg-action-primary text-on-action-primary lg:hidden"
    :is-colored="false"
    :to="localePath('event-create')"
  >
    <AppIconPlus />
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
  <!-- signed out, the account item takes the width of two so that the create button stays centered -->
  <LayoutMenuItem
    :class="!store.signedInUsername && 'max-lg:max-w-40 max-lg:flex-2'"
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
  discover: Entdecken
  events: Veranstaltungen
  home: Dashboard
en:
  account: Account
  create: Create event
  discover: Discover
  events: Events
  home: Dashboard
</i18n>
