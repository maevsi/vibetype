<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <FormAuthPageHeader :title-id="templateIdTitle" @back="navigateBack">
      <template #title>
        {{ t('welcomeBack') }}<br />{{ t('goodToSeeYou') }}
      </template>
      <template #subtitle>{{ t('subtitle') }}</template>
    </FormAuthPageHeader>
    <CardStateSuccess v-if="verified" class="mt-4 rounded-none">
      <TypographySubtitleMedium>
        {{ t('accountVerified') }}
      </TypographySubtitleMedium>
    </CardStateSuccess>
    <CardStateInfo v-if="to" class="mt-4 rounded-none">
      {{ t('accountRequired') }}
    </CardStateInfo>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormSessionCreate v-model:error="error" @signed-in="onSignIn" />
      </LayoutPage>
    </AppStep>
    <FormAuthStepError :error="error" :is-active="step === 'error'">
      <ButtonColored
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
      </ButtonColored>
      <ButtonColored
        :aria-label="t('backToLogin')"
        class="w-full max-w-md"
        variant="primary"
        @click="restart"
      >
        {{ t('backToLogin') }}
      </ButtonColored>
    </FormAuthStepError>
  </section>
</template>

<script setup lang="ts">
import type { Language } from '~~/gql/generated/graphql'

definePageMeta({
  layout: 'plain',
})

// page
const { t } = useI18n()

// template
const templateIdTitle = useId()

// navigation
const router = useRouter()
const navigateBack = () => {
  router.back()
}

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
const onSignIn = async (username: string) => {
  // the welcome page redirects signed-in accounts to the dashboard (see `pages/index.vue`), so going back there would only loop
  store.routeHistory = store.routeHistory.filter((path) => {
    const routeResolved = router.resolve(path)

    return !(
      getRouteBaseName(routeResolved) === 'index' &&
      Object.keys(routeResolved.query).every((key) => key === 'source')
    )
  })

  const language = await getOwnContactLanguage({ nuxtApp, store })

  await store.navigateWithoutHistory(getSignInTarget({ language, username }), {
    replace: true,
  })
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
