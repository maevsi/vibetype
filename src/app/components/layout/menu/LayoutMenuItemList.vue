<template>
  <LayoutMenuItem
    v-slot="attributes"
    :title="t('home')"
    :to="store.signedInUsername ? localePath('dashboard') : localePath('index')"
  >
    <AppIconHome v-bind="attributes" />
  </LayoutMenuItem>
  <LayoutMenuItem
    v-slot="attributes"
    :title="t('discover')"
    :to="localePath('event')"
  >
    <AppIconMagnifyingGlass v-bind="attributes" />
  </LayoutMenuItem>
  <LayoutMenuItem
    :title="t('create')"
    :to="localePath('event-create')"
    variant="special"
  >
    <div
      class="max-lg:rounded-2xl max-lg:bg-(--primary-green-middle-dark) max-lg:p-2"
    >
      <AppIconPlus class="max-lg:text-white" />
    </div>
  </LayoutMenuItem>
  <LayoutMenuItem
    v-if="store.signedInUsername"
    v-slot="attributes"
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
    <AppIconCalendar v-bind="attributes" />
  </LayoutMenuItem>
  <LayoutMenuItem
    v-slot="attributes"
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
      v-bind="attributes"
      class="rounded-full"
      height="24"
      width="24"
    />
    <AppIconAccount v-else v-bind="attributes" />
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
  discover: Entdecken
  create: Erstellen
  events: Veranstaltungen
  home: Dashboard
en:
  account: Account
  discover: Discover
  create: Create
  events: Events
  home: Dashboard
</i18n>
