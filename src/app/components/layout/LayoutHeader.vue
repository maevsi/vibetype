<template>
  <!-- <Loader :api="api" indicator="ping"> -->
  <header>
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <ButtonIconBackRoute />
        <AppButton
          :aria-label="t('home')"
          class="hidden 2xl:block"
          :to="localePath('index')"
        >
          <IconLogoWithText class="h-10" />
        </AppButton>
      </div>
      <div class="flex items-center gap-2 whitespace-nowrap lg:gap-4">
        <ButtonEventNew />
        <div
          class="my-1 hidden w-px flex-none self-stretch bg-gray-300 2xl:flex dark:bg-gray-600"
        />
        <ButtonIcon
          v-if="store.signedInAccountId"
          :aria-label="t('dashboard')"
          class="hidden rounded-full 2xl:block"
          :title="t('dashboard')"
          :to="localePath(`dashboard`)"
        >
          <AccountProfilePicture
            :account-id="store.signedInAccountId"
            class="size-10"
            height="40"
            width="40"
          />
        </ButtonIcon>
        <ButtonText
          v-else
          :aria-label="t('signIn')"
          class="hidden 2xl:inline-block"
          :to="localePath('session-create')"
        >
          {{ t('signIn') }}
        </ButtonText>
        <ButtonIcon
          :aria-label="t('settings')"
          :to="
            localePath({
              name: 'session-edit',
            })
          "
        >
          <IHeroiconsBars3 height="2em" width="2em" />
        </ButtonIcon>
      </div>
    </div>
  </header>
  <!-- </Loader> -->
</template>

<script setup lang="ts">
const store = useStore()
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  dashboard: Dashboard
  home: Nach Hause
  settings: Einstellungen
  signIn: Anmelden
en:
  dashboard: Dashboard
  home: Head home
  settings: Settings
  signIn: Sign in
</i18n>
