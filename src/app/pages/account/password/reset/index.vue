<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <h1 :id="templateIdTitle" class="sr-only">
      {{ title }}
    </h1>
    <FormAuthPageHeader v-if="step === 'default'" @back="navigateBack">
      <template #title>{{ t('title') }}</template>
      <template #subtitle>{{ t('subtitle') }}</template>
    </FormAuthPageHeader>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormAccountPasswordReset
          v-if="route.query.code && !Array.isArray(route.query.code)"
          v-model:error="error"
          :code="route.query.code"
          @success="step = 'success'"
        />
      </LayoutPage>
    </AppStep>
    <FormAuthStepSuccess :is-active="step === 'success'">
      <h2 class="text-heading-large">
        {{ t('instructionsSuccessHeading') }}
      </h2>
      <p class="mt-2 text-body text-fg-2">
        {{ t('instructionsSuccessDescription') }}
      </p>
      <ButtonColored
        :aria-label="t('signIn')"
        class="mt-6 w-full"
        @click="navigateTo(localePath('session-create'))"
      >
        {{ t('signIn') }}
      </ButtonColored>
    </FormAuthStepSuccess>
    <FormAuthStepError :error="error" :is-active="step === 'error'">
      <ButtonColored
        :aria-label="t('tryAgain')"
        class="w-full max-w-md"
        variant="primary"
        @click="restart"
      >
        {{ t('tryAgain') }}
      </ButtonColored>
    </FormAuthStepError>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

defineRouteRules({
  robots: false,
})

const localePath = useLocalePath()

// validation
const route = useRoute()
const { createA11yError } = useA11yError()
if (
  !route.query.code ||
  Array.isArray(route.query.code) ||
  !REGEX_UUID.test(route.query.code)
) {
  throw createA11yError({
    status: 400,
  })
}

// stepper
const { t } = useI18n()
const { error, restart, step, title } = useStepperPage<'success'>({
  steps: {
    default: {
      title: t('title'),
    },
    success: {
      title: t('instructionsSuccessHeading'),
    },
  },
})

// page
useHeadDefault({ title })

// template
const templateIdTitle = useId()

// navigation
const store = useStore()
const navigateBack = () => {
  store.navigateBack()
}
</script>

<i18n lang="yaml">
de:
  instructionsSuccessDescription: Du kannst dich jetzt mit deinem neuen Passwort anmelden.
  instructionsSuccessHeading: Passwort erfolgreich zurückgesetzt
  signIn: Einloggen
  subtitle: Mindestens 8 Zeichen, die nicht leicht zu erraten sind.
  title: Neues Passwort festlegen
  tryAgain: Erneut versuchen
en:
  instructionsSuccessDescription: You can now log in using your new password.
  instructionsSuccessHeading: Password reset successful
  signIn: Log in
  subtitle: At least 8 characters that aren't easy to guess.
  title: Set your new password
  tryAgain: Try again
</i18n>
