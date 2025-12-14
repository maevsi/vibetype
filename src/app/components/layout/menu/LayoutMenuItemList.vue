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
  discover: Entdecken
  events: Veranstaltungen
  home: Dashboard
en:
  account: Account
  discover: Discover
  events: Events
  home: Dashboard
</i18n>
