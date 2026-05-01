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
      <h2 class="text-[28px] leading-8.5 font-bold tracking-[-0.4px]">
        {{ t('instructionsSuccessHeading') }}
      </h2>
      <p
        class="mt-2 text-[15px] leading-5 font-semibold text-gray-500 dark:text-gray-400"
      >
        {{ t('instructionsSuccessDescription') }}
      </p>
      <FormAuthButton
        :aria-label="t('signIn')"
        class="mt-6"
        @click="navigateTo(localePath('session-create'))"
      >
        {{ t('signIn') }}
      </FormAuthButton>
    </FormAuthStepSuccess>
    <FormAuthStepError :error="error" :is-active="step === 'error'">
      <div
        class="mb-6 flex size-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30"
      >
        <IHeroiconsExclamationCircle
          class="size-8 text-red-600 dark:text-red-400"
        />
      </div>
      <h2
        class="mb-2 text-[28px] leading-8.5 font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ t('errorHeading') }}
      </h2>
      <p
        class="mb-6 text-[15px] leading-5 font-semibold tracking-tight text-gray-500 dark:text-gray-400"
      >
        {{ t('errorDescription') }}
      </p>
      <div
        v-if="error?.message"
        class="mb-6 rounded-2xl bg-gray-100 p-4 dark:bg-gray-800"
      >
        <p class="mb-2 text-[15px] font-semibold text-gray-900 dark:text-white">
          {{ t('errorMessageLabel') }}
        </p>
        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
          {{ error.message }}
        </p>
        <button
          class="text-sm font-medium text-gray-900 underline dark:text-white"
          type="button"
          @click="copyErrorToClipboard"
        >
          {{ t('copyToClipboard') }}
        </button>
      </div>
      <FormAuthButton
        :aria-label="t('tryAgain')"
        class="mb-3"
        variant="primary"
        @click="restart"
      >
        {{ t('tryAgain') }}
      </FormAuthButton>
      <FormAuthButton
        :aria-label="t('returnBack')"
        variant="secondary"
        @click="navigateBack"
      >
        {{ t('returnBack') }}
      </FormAuthButton>
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
const router = useRouter()
const navigateBack = () => {
  router.back()
}

// error
const copyErrorToClipboard = async () => {
  if (!error.value?.message) return

  try {
    await navigator.clipboard.writeText(error.value.message)
    toast.success(t('copiedToClipboard'))
  } catch {
    toast.error(t('copyFailed'))
  }
}
</script>

<i18n lang="yaml">
de:
  copiedToClipboard: In Zwischenablage kopiert
  copyFailed: Kopieren fehlgeschlagen
  copyToClipboard: In Zwischenablage kopieren
  errorDescription: Etwas ist schiefgelaufen. Bitte versuche es später erneut.
  errorHeading: Ein Fehler ist aufgetreten
  errorMessageLabel: 'Fehlermeldung:'
  instructionsSuccessDescription: Du kannst dich jetzt mit deinem neuen Passwort anmelden.
  instructionsSuccessHeading: Passwort erfolgreich zurückgesetzt
  returnBack: Zurück
  signIn: Einloggen
  subtitle: Mindestens 12 Zeichen mit mindestens 1 Großbuchstaben und 1 Sonderzeichen.
  title: Neues Passwort festlegen
  tryAgain: Erneut versuchen
en:
  copiedToClipboard: Copied to clipboard
  copyFailed: Failed to copy
  copyToClipboard: Copy to clipboard
  errorDescription: Oops! Something went wrong. Please try again later.
  errorHeading: Something went wrong
  errorMessageLabel: 'Error message:'
  instructionsSuccessDescription: You can now log in using your new password.
  instructionsSuccessHeading: Password reset successful
  returnBack: Return back
  signIn: Log in
  subtitle: Minimum 12 characters with at least 1 uppercase letter and 1 special character.
  title: Set your new password
  tryAgain: Try again
</i18n>
