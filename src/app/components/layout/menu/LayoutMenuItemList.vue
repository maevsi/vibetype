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
    <AppIconSearch v-bind="attributes" />
  </LayoutMenuItem>
  <div class="px-4 py-1">
    <NuxtLink
      :aria-label="t('create')"
      class="flex items-center justify-center rounded-(--default-border-radius) bg-(--figma-primary-green-middle-dark) p-2 focus-visible:ring-2 focus-visible:ring-(--figma-primary-green-middle-dark) focus-visible:outline-none"
      :to="createTo"
    >
      <AppIconAdd class="size-6 text-(--figma-base-white)" />
    </NuxtLink>
  </div>
  <LayoutMenuItem
    v-slot="attributes"
    :title="t('events')"
    :to="
      store.signedInUsername
        ? localePath({
            name: 'event-view-username',
            params: {
              username: store.signedInUsername,
            },
          })
        : localePath('session-create')
    "
  >
    <AppIconToday v-bind="attributes" />
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
      class="size-6 rounded-full"
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

const createTo = computed(() =>
  store.signedInUsername
    ? localePath('event-create')
    : {
        path: localePath('session-create'),
        query: { to: localePath('event-create') },
      },
)
</script>

<i18n lang="yaml">
de:
  account: Account
  create: Erstellen
  discover: Entdecken
  events: Veranstaltungen
  home: Home
en:
  account: Account
  create: Create
  discover: Discover
  events: Events
  home: Home
</i18n>
