<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
    </LayoutTopBar>
    <CardStateSuccess v-if="verified" class="rounded-none">
      <TypographySubtitleMedium>
        {{ t('accountVerified') }}
      </TypographySubtitleMedium>
    </CardStateSuccess>
    <CardStateInfo v-if="to" class="rounded-none">
      {{ t('accountRequired') }}
    </CardStateInfo>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormAccountSignIn v-model:error="error" @signed-in="onSignIn" />
        <ContentLegalFooter />
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          <template v-if="error">
            {{ error.message }}
          </template>
          <template #description>
            {{ t('errorDescription') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('contactSupport')"
            class="w-full max-w-md"
            :to="
              localePath({
                name: 'support-contact',
              })
            "
            variant="secondary-critical"
          >
            {{ t('contactSupport') }}
          </ButtonColored>
          <ButtonColored
            :aria-label="t('backToLogin')"
            class="w-full max-w-md"
            variant="primary-critical"
            @click="restart"
          >
            {{ t('backToLogin') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

// page
const { t } = useI18n()

// template
const templateIdTitle = useId()

// sign in
const localePath = useLocalePath()
const route = useRoute()
const store = useStore()

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
const onSignIn = async () => {
  // A link that allows users to delete their account is required by the Google Play Store (https://support.google.com/googleplay/android-developer/answer/13316080#account_deletion)
  // TODO: generalize, potentially whitelist valid redirection targets
  if (to.value === 'account-deletion') {
    return await navigateTo(
      localePath({
        name: 'account-edit-username',
        params: { username: store.jwtDecoded?.account_username },
      }),
    )
  }

  if (to.value) return await navigateTo(to.value)

  return await navigateTo(localePath(`dashboard`))
}
</script>

<i18n lang="yaml">
de:
  accountRequired: Melde dich an, um fortzufahren.
  accountVerified: E-Mail-Adresse verifiziert.
  backToLogin: Zurück zur Anmeldung
  contactSupport: Support kontaktieren
  title: Einloggen
  errorTitle: Anmeldefehler
  errorDescription: Bitte versuche es erneut
en:
  accountRequired: Log in to continue.
  accountVerified: Email address verified.
  backToLogin: Back to Login
  contactSupport: Contact support
  title: Log in
  errorTitle: Login Error
  errorDescription: Please try again
</i18n>
