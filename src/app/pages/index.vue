<template>
  <div
    v-if="status === 'success'"
    class="flex flex-col gap-32 pt-8 pb-64 md:gap-64"
  >
    <LayoutPageResult type="success">
      <div class="flex justify-center gap-4">
        <ButtonColored
          :aria-label="t('unlockDeny')"
          variant="secondary"
          @click="navigateTo(localePath('dashboard'))"
        >
          {{ t('unlockDeny') }}
        </ButtonColored>
        <ButtonColored
          :aria-label="t('unlockConfirm')"
          variant="primary"
          @click="toProfile"
        >
          {{ t('unlockConfirm') }}
        </ButtonColored>
      </div>
      <template #description>
        {{ t('unlockText') }}
      </template>
      <template #title>
        {{ t('unlockTitle') }}
      </template>
    </LayoutPageResult>
    <canvas
      ref="canvas"
      class="pointer-events-none fixed inset-0 h-full w-full"
    />
  </div>
  <div v-else class="flex flex-1 flex-col">
    <CardStateInfo v-if="querySignOut" class="rounded-none">
      <TypographySubtitleMedium>
        {{ t('signedOut') }}
      </TypographySubtitleMedium>
    </CardStateInfo>
    <div class="flex flex-1 flex-col items-center justify-between px-6 py-8">
      <div
        class="flex w-full max-w-md flex-1 flex-col items-center justify-center"
      >
        <!-- Logo -->
        <div
          class="mb-6 flex size-20 items-center justify-center rounded-3xl bg-gray-100 dark:bg-gray-800"
        >
          <IconLogo v-if="dateToday.month !== 6" class="size-12" />
          <IconLogoPride v-else class="size-12" />
        </div>

        <!-- Welcome text -->
        <p
          class="mb-2 text-center text-[15px] leading-5 font-semibold tracking-[-0.4px] text-gray-500 dark:text-gray-400"
        >
          {{ t('welcome') }}
        </p>
        <IconLogoWithText class="mb-12 h-6.5" />

        <!-- Tagline -->
        <p
          class="mb-8 text-center text-[15px] leading-5 font-semibold tracking-[-0.4px] text-gray-500 dark:text-gray-400"
        >
          {{ t('taglinePre') }}
          <span class="text-green-600 line-through">{{
            t('taglineFomo')
          }}</span>
          {{ t('taglinePost') }}
        </p>

        <!-- Buttons -->
        <div class="w-full space-y-3">
          <ButtonColored
            :aria-label="t('register')"
            class="h-13! w-full rounded-2xl! text-[17px]!"
            :to="$localePath('account-create')"
          >
            {{ t('createAccount') }}
          </ButtonColored>

          <ButtonColored
            :aria-label="t('signIn')"
            class="h-13! w-full rounded-2xl! bg-gray-100! text-[17px]! font-semibold! text-black! no-underline! dark:bg-gray-800! dark:text-white!"
            :to="$localePath('session-create')"
            variant="tertiary"
          >
            {{ t('signIn') }}
          </ButtonColored>
        </div>

        <!-- Social login (behind feature flag) -->
        <AppFeature class="w-full" feature="social-login">
          <div class="my-6 flex w-full items-center">
            <div class="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
            <span class="px-4 text-sm text-gray-400">{{ t('or') }}</span>
            <div class="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
          </div>

          <div class="grid w-full grid-cols-2 gap-3">
            <button
              :aria-label="t('signInApple')"
              class="flex h-13 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800"
            >
              <IFa6BrandsApple class="size-6 text-black dark:text-white" />
            </button>
            <button
              :aria-label="t('signInGoogle')"
              class="flex h-13 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800"
            >
              <IFa6BrandsGoogle class="size-6" />
            </button>
          </div>
        </AppFeature>
      </div>

      <!-- Footer -->
      <div class="mt-6 flex flex-col gap-4">
        <ButtonColored
          v-if="!isApp"
          :aria-label="t('more')"
          to="https://vibetype.de"
          variant="tertiary"
        >
          {{ t('more') }}
        </ButtonColored>
        <p class="text-center text-xs text-gray-500">
          {{ t('legalPre') }}
          <NuxtLinkLocale
            class="font-semibold text-green-600"
            to="docs-legal-terms"
            >{{ t('terms') }}</NuxtLinkLocale
          >{{ t('legalComma') }}
          <NuxtLinkLocale
            class="font-semibold text-green-600"
            to="docs-legal-imprint"
            >{{ t('imprint') }}</NuxtLinkLocale
          >
          {{ t('legalAnd') }}
          <NuxtLinkLocale
            class="font-semibold text-green-600"
            to="docs-legal-privacy"
            >{{ t('privacy') }}</NuxtLinkLocale
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import { useMutation } from '@urql/vue'
import { stringifyQuery } from 'ufo'

import { graphql } from '~~/gql/generated'

definePageMeta({
  layout: 'plain',
})

// achievement
const route = useRoute()
const store = useStore()
const authentication = useAuthentication()
const { t } = useI18n()
const localePath = useLocalePath()
const achievementUnlockMutation = useMutation(
  graphql(`
    mutation AchievementUnlock($input: AchievementUnlockInput!) {
      achievementUnlock(input: $input) {
        clientMutationId
        result
      }
    }
  `),
)
const { /* data, */ error, status } = await useAsyncData(
  computed(() => `achievement:${stringifyQuery(route.query)}`),
  async () => {
    if (!Object.keys(route.query).length)
      throw new Error('Short circuit for no query parameters')

    if (!authentication.value.isSignedIn)
      throw new Error('Short circuit for unauthorized access') // there's no way to be certain that a user tried to unlock an achievement here, so no prompt to login is thrown

    const result = await achievementUnlockMutation.executeMutation({
      input: {
        code: 'c29d9fd1-e455-4f19-a62f-f89b5256a52b', // placeholder, not actually used
        alias: `?${stringifyQuery(route.query)}`,
      },
    })

    const data = getResultData(result)

    if (!data?.achievementUnlock?.result) {
      throw result.error ?? new Error(t('globalErrorNoData'))
    }

    return data.achievementUnlock.result
  },
)
if (error.value) {
  console.debug(error.value.message) // there's no way to be certain that a user tried to unlock an achievement here, so no error is thrown

  if (store.signedInAccountId) {
    await navigateTo(localePath('dashboard'))
  }
}

// confetti
const templateCanvas = useTemplateRef('canvas')
const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])
onMounted(async () => {
  loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1)

  if (status.value === 'success') {
    if (!templateCanvas.value) {
      showAppError({ message: 'Could not get canvas', status: 500 })
      return
    }

    const JSConfetti = (await import('js-confetti')).default
    const confetti = new JSConfetti({ canvas: templateCanvas.value })
    confetti.addConfetti()
  }
})

// template
const toProfile = () => {
  if (!store.jwtPayload) return // TODO: error

  return navigateTo(
    localePath({
      name: 'account-view-username',
      params: {
        username: store.jwtPayload.username,
      },
      // // TODO: highlight achievement
      // query: {
      //   achievementId: data.value,
      // },
    }),
  )
}
const { isApp } = usePlatform()
const dateToday = today(getLocalTimeZone())
const querySignOut = computed(() => route.query.signOut === null)

// page
const siteConfig = useSiteConfig()
useHeadDefault({ title: siteConfig.name })
</script>

<i18n lang="yaml">
de:
  createAccount: Konto erstellen
  imprint: Impressum
  legalAnd: und
  legalComma: ','
  legalPre: 'Mit der Nutzung von Vibetype stimmst du unseren'
  more: Webseite besuchen, um mehr zu erfahren
  or: ODER
  privacy: Datenschutzrichtlinie
  register: Konto erstellen
  signIn: Einloggen
  signInApple: Mit Apple anmelden
  signInGoogle: Mit Google anmelden
  signedOut: Erfolgreich abgemeldet
  taglineFomo: Angst, etwas zu verpassen
  taglinePost: von jetzt an
  taglinePre: 'Tritt bei und erlebe keine '
  terms: Nutzungsbedingungen
  unlockConfirm: Zum meinem Profil
  unlockDeny: Nicht jetzt
  unlockText: Sieh dir deine neue Errungenschaft auf deinem Profil an.
  unlockTitle: Auszeichnung freigeschaltet
  welcome: Willkommen bei
en:
  createAccount: Create account
  imprint: Imprint
  legalAnd: and
  legalComma: ','
  legalPre: 'By using Vibetype, you agree to our'
  more: Visit website to find out more
  or: OR
  privacy: Privacy Policy
  register: Create account
  signIn: Sign in
  signInApple: Sign in with Apple
  signInGoogle: Sign in with Google
  signedOut: Signed out successfully
  taglineFomo: fear of missing out
  taglinePost: from now on
  taglinePre: 'Join and experience no more '
  terms: Terms of Service
  unlockConfirm: Go to my profile
  unlockDeny: Not now
  unlockText: Check out your new achievement on your profile.
  unlockTitle: Achievement unlocked
  welcome: Welcome to
</i18n>
