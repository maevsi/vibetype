<template>
  <div
    class="sticky top-0 z-10 mb-8 flex h-15 items-center justify-between border-b border-(--semantic-base-line) bg-(--semantic-base-background) px-3 py-1.5 shadow-xs"
  >
    <div class="relative flex w-full items-center justify-between">
      <div class="z-10 w-24 flex-shrink-0">
        <slot name="left">
          <ButtonIcon
            v-if="
              showBackButton &&
              (store.routeHistory.length ||
                !isEqual(route.path, localePath('index').toString()))
            "
            :aria-label="t('back')"
            @click="store.navigateBack()"
          >
            <IHeroiconsChevronLeft />
          </ButtonIcon>
          <Button
            :aria-label="t('home')"
            class="hidden 2xl:block"
            :to="localePath('index')"
          >
            <IconLogoWithText class="h-10" />
          </Button>
        </slot>
      </div>
      <div class="pointer-events-none absolute inset-x-0 flex justify-center">
        <slot>
          <h2
            v-if="headerTitle.title"
            class="pointer-events-auto px-2 text-center text-xl font-bold whitespace-nowrap text-(--semantic-base-primary)"
          >
            {{ headerTitle.title }}
          </h2>
        </slot>
      </div>
      <div
        class="z-10 flex w-24 flex-shrink-0 items-center justify-end gap-2 whitespace-nowrap lg:gap-4"
      >
        <slot name="right">
          <template v-if="!showButtons">
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
                classes="h-10 w-10"
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
                  name: 'session-edit-id',
                  params: { id: store.jwtDecoded?.id || 'anonymous' },
                })
              "
            >
              <IHeroiconsBars3 height="2em" width="2em" />
            </ButtonIcon>
          </template>
          <div v-else class="size-6"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isEqual } from 'ufo'
import { useHeaderTitle } from '~/composables/useHeaderTitle'

const headerTitle = useHeaderTitle()
const store = useStore()
const localePath = useLocalePath()
const { t } = useI18n()
const route = useRoute()

const showButtons = computed(() => {
  const isLoginPage =
    String(route.path).includes('account') ||
    String(route.path).includes('session')
  return isLoginPage
})

const showBackButton = computed(() => {
  const isSettings = String(route.path).includes('session/edit')
  const isEvents = String(route.path).includes('event')
  return isSettings || isEvents
})
</script>

<i18n lang="yaml">
de:
  back: zurück
  dashboard: Dashboard
  home: Nach Hause
  settings: Einstellungen
  signIn: Anmelden
en:
  back: back
  dashboard: Dashboard
  home: Head home
  settings: Settings
  signIn: Sign in
</i18n>
