<template>
  <header>
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <ButtonIconBackRoute is-round />
        <AppButton
          :aria-label="t('home')"
          class="hidden 2xl:block"
          size="none"
          :to="localePath('index')"
          variant="ghost"
        >
          <IconLogoWithText class="h-10" />
        </AppButton>
      </div>
      <div class="flex items-center gap-2 whitespace-nowrap lg:gap-4">
        <ButtonEventNew />
        <div class="my-1 hidden w-px flex-none self-stretch bg-line 2xl:flex" />
        <AppButton
          v-if="store.signedInAccountId"
          :aria-label="t('dashboard')"
          class="hidden rounded-full 2xl:block"
          size="none"
          :title="t('dashboard')"
          :to="localePath(`dashboard`)"
          variant="ghost"
        >
          <AccountProfilePicture
            :account-id="store.signedInAccountId"
            class="size-10"
            height="40"
            width="40"
          />
        </AppButton>
        <AppButton
          v-else
          :aria-label="t('signIn')"
          class="hidden px-4 py-2 font-medium whitespace-nowrap 2xl:inline-block"
          size="none"
          :to="localePath('session-create')"
          variant="ghost"
        >
          {{ t('signIn') }}
        </AppButton>
        <AppButton
          :aria-label="t('settings')"
          size="icon"
          :to="
            localePath({
              name: 'session-edit',
            })
          "
          variant="secondary"
        >
          <AppIconBars3 />
        </AppButton>
      </div>
    </div>
  </header>
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
