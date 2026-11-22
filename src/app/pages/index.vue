<template>
  <div v-if="status === 'success'" class="flex flex-1 flex-col">
    <LayoutTopBar>{{ t('unlockTitle') }}</LayoutTopBar>
    <LayoutPage>
      <LayoutPageResult type="success">
        <div class="flex justify-center gap-4">
          <AppButton
            :aria-label="t('unlockDeny')"
            variant="secondary"
            @click="navigateTo(localePath('dashboard'))"
          >
            {{ t('unlockDeny') }}
          </AppButton>
          <AppButton
            :aria-label="t('unlockConfirm')"
            variant="primary"
            @click="toProfile"
          >
            {{ t('unlockConfirm') }}
          </AppButton>
        </div>
        <template #description>
          {{ t('unlockText') }}
        </template>
      </LayoutPageResult>
    </LayoutPage>
    <canvas
      ref="canvas"
      class="pointer-events-none fixed inset-0 h-full w-full"
    />
  </div>
  <div v-else class="flex flex-1 flex-col">
    <AppAlert v-if="querySignOut" class="rounded-none">
      <span class="text-headline">
        {{ t('signedOut') }}
      </span>
    </AppAlert>
    <LayoutPage>
      <div class="flex flex-1 flex-col items-center justify-between">
        <div class="flex w-full flex-1 flex-col items-center justify-center">
          <!-- Logo -->
          <div
            class="mb-6 flex size-20 items-center justify-center rounded-large bg-surface-raised"
          >
            <AppIconLogo v-if="dateToday.month !== 6" class="size-12" />
            <AppIconLogoPride v-else class="size-12" />
          </div>

          <!-- Welcome text -->
          <h1 class="sr-only">
            {{ t('welcomeWithSiteName') }}
          </h1>
          <p aria-hidden="true" class="mb-2 text-center text-body text-fg-2">
            {{ t('welcome') }}
          </p>
          <AppIconLogoText aria-hidden="true" class="mb-12 h-6.5" />

          <!-- Tagline -->
          <p class="mb-8 text-center text-body text-fg-2">
            {{ t('taglinePre') }}
            <span class="text-link line-through">{{ t('taglineFomo') }}</span>
            {{ t('taglinePost') }}
          </p>

          <!-- Buttons -->
          <div class="flex w-full flex-col gap-2">
            <AppButton
              :aria-label="t('register')"
              class="w-full"
              :to="$localePath('account-create')"
            >
              {{ t('createAccount') }}
            </AppButton>

            <AppButton
              :aria-label="t('signIn')"
              class="w-full"
              :to="$localePath('session-create')"
              variant="secondary"
            >
              {{ t('signIn') }}
            </AppButton>
          </div>

          <!-- Social login (behind feature flag) -->
          <AppFeature class="w-full" feature="social-login">
            <div class="my-6 flex w-full items-center">
              <div class="h-0.5 flex-1 rounded-medium bg-line" />
              <span class="px-4 text-body-small text-fg-2">{{ t('or') }}</span>
              <div class="h-0.5 flex-1 rounded-medium bg-line" />
            </div>

            <div class="grid w-full grid-cols-2 gap-3">
              <button
                :aria-label="t('signInApple')"
                class="flex h-13 items-center justify-center rounded-medium bg-surface-raised"
                type="button"
              >
                <IFa6BrandsApple class="size-6 text-fg-1" />
              </button>
              <button
                :aria-label="t('signInGoogle')"
                class="flex h-13 items-center justify-center rounded-medium bg-surface-raised"
                type="button"
              >
                <IFa6BrandsGoogle class="size-6" />
              </button>
            </div>
          </AppFeature>
        </div>

        <!-- Footer -->
        <div class="mt-6 flex flex-col gap-4">
          <AppButton
            v-if="!isApp"
            :aria-label="t('more')"
            to="https://vibetype.de"
            variant="tertiary"
          >
            {{ t('more') }}
          </AppButton>
          <nav
            :aria-label="t('legal')"
            class="flex flex-wrap justify-center gap-x-4 text-caption"
          >
            <NuxtLinkLocale class="text-link underline" to="docs-legal-terms">
              {{ t('terms') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale class="text-link underline" to="docs-legal-imprint">
              {{ t('imprint') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale class="text-link underline" to="docs-legal-privacy">
              {{ t('privacy') }}
            </NuxtLinkLocale>
          </nav>
          <AppButton
            :aria-label="t('privacySettings')"
            :to="localePath('session-edit-privacy')"
            variant="tertiary"
          >
            {{ t('privacySettings') }}
          </AppButton>
        </div>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import { useMutation } from '@urql/vue'
import { stringifyQuery } from 'ufo'

import { graphql } from '~~/gql/generated'

// achievement
const route = useRoute()
const store = useStore()
const authentication = useAuthentication()
const { t } = useI18n()
const localePath = useLocalePath()

// awaited before rendering so signed-in accounts never see the welcome page flash; other query parameters than the pwa manifest's `source` are achievement codes that this page still has to unlock
if (
  store.signedInAccountId &&
  Object.keys(route.query).every((key) => key === 'source')
) {
  await navigateTo(localePath('dashboard'), { replace: true })
}

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
const { /* data, */ error, status } = useAsyncData(
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
    await navigateTo(localePath('dashboard'), {
      replace: true,
    })
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
  if (!store.jwtPayload) return

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
  legal: Rechtliches
  more: Webseite besuchen, um mehr zu erfahren
  or: ODER
  privacy: Datenschutzerklärung
  privacySettings: Datenschutz-Einstellungen
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
  welcomeWithSiteName: Willkommen bei @.upper:{'globalSiteName'}
en:
  createAccount: Create account
  imprint: Imprint
  legal: Legal
  more: Visit website to find out more
  or: OR
  privacy: Privacy Policy
  privacySettings: Privacy settings
  register: Create account
  signIn: Sign in
  signInApple: Sign in with Apple
  signInGoogle: Sign in with Google
  signedOut: Signed out successfully
  taglineFomo: fear of missing out
  taglinePost: from now on
  taglinePre: 'Join and experience no more '
  terms: Terms of Use
  unlockConfirm: Go to my profile
  unlockDeny: Not now
  unlockText: Check out your new achievement on your profile.
  unlockTitle: Achievement unlocked
  welcome: Welcome to
  welcomeWithSiteName: Welcome to @.upper:{'globalSiteName'}
</i18n>
