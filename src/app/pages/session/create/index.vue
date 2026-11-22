<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">{{ title }}</span>
    </LayoutTopBar>
    <AppAlert v-if="verified" class="rounded-none" variant="success">
      <span class="text-headline">
        {{ t('accountVerified') }}
      </span>
    </AppAlert>
    <AppAlert v-if="to" class="rounded-none">
      {{ t('accountRequired') }}
    </AppAlert>
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormAuthHeader>
          <template #title>
            {{ t('welcomeBack') }}<br />{{ t('goodToSeeYou') }}
          </template>
          <template #subtitle>{{ t('subtitle') }}</template>
        </FormAuthHeader>
        <FormSessionCreate v-model:error="error" @signed-in="onSignIn" />
      </LayoutPage>
    </AppStepPanel>
    <FormAuthStepError :error="error" :is-active="step === 'error'">
      <AppButton
        :aria-label="t('contactSupport')"
        class="w-full max-w-md"
        :to="
          localePath({
            name: 'support-contact',
          })
        "
        variant="secondary"
      >
        {{ t('contactSupport') }}
      </AppButton>
      <AppButton
        :aria-label="t('backToLogin')"
        class="w-full max-w-md"
        variant="primary"
        @click="restart"
      >
        {{ t('backToLogin') }}
      </AppButton>
    </FormAuthStepError>
  </section>
</template>

<script setup lang="ts">
import type { Language } from '~~/gql/generated/graphql'

// page
const { t } = useI18n()

// template
const templateIdTitle = useId()

// navigation
const router = useRouter()

// sign in
const localePath = useLocalePath()
const route = useRoute()

// stepper
const { error, restart, step, title } = useStepperPage<'default'>({
  steps: {
    default: {
      title: t('title'),
    },
    error: {
      title: t('errorTitle'),
    },
  },
})
useHeadDefault({ title })

// computations
const to = computed(() =>
  route.query.to && !Array.isArray(route.query.to) ? route.query.to : undefined,
)
const verified = computed(() => route.query.verified === null)
const nuxtApp = useNuxtApp()
const store = useStore()
const getRouteBaseName = useRouteBaseName()
// the session opens in the language of the account, which may differ from the one the sign-in page was opened in
const getSignInTarget = ({
  language,
  username,
}: {
  language?: Language
  username: string
}) => {
  // A link that allows users to delete their account is required by the Google Play Store (https://support.google.com/googleplay/android-developer/answer/13316080#account_deletion)
  if (to.value === 'account-deletion') {
    return localePath(
      {
        name: 'account-edit-username',
        params: { username: username },
      },
      language,
    )
  }

  if (to.value && getIsSitePath(to.value)) {
    const target = router.resolve(to.value)
    const name = getRouteBaseName(target)

    if (!name) return to.value

    return localePath(
      {
        hash: target.hash,
        name,
        params: target.params,
        query: target.query,
      },
      language,
    )
  }

  return localePath(`dashboard`, language)
}
const notificationStore = useNotificationStore()
const { isFeatureEnabled } = useFeatureFlags()
const { isOnboardingSeen } = useNotificationPrompt()
const onSignIn = async (username: string) => {
  const language = syncLocaleCookieToTokenLanguage({ nuxtApp, store })
  const target = getSignInTarget({ language, username })

  // The first sign-in after the email address was verified follows the registration, which is when notifications are worth asking for.
  const isOnboardingDue =
    verified.value &&
    isFeatureEnabled('notifications').value &&
    notificationStore.permissionState === 'prompt' &&
    !isOnboardingSeen()

  await navigateTo(
    isOnboardingDue
      ? localePath({ name: 'notification-enable', query: { to: target } })
      : target,
    { replace: true },
  )
}
</script>

<i18n lang="yaml">
de:
  accountRequired: Melde dich an, um fortzufahren.
  accountVerified: E-Mail-Adresse verifiziert.
  backToLogin: Zurück zur Anmeldung
  contactSupport: Support kontaktieren
  errorTitle: Anmeldefehler
  goodToSeeYou: Schön, dich zu sehen!
  subtitle: Melde dich einfach mit deinen Zugangsdaten an.
  title: Einloggen
  welcomeBack: Willkommen zurück!
en:
  accountRequired: Log in to continue.
  accountVerified: Email address verified.
  backToLogin: Back to Login
  contactSupport: Contact support
  errorTitle: Login Error
  goodToSeeYou: Good to see you!
  subtitle: "Let's pick up where the vibe left off. Just type in your credentials."
  title: Log in
  welcomeBack: Welcome back!
</i18n>
