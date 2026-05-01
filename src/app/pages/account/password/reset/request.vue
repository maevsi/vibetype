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
        <FormAccountPasswordResetRequest
          v-model:error="error"
          @success="handleSuccess"
        />
      </LayoutPage>
    </AppStep>
    <FormAuthStepSuccess :is-active="step === 'success'">
      <h2 class="text-[28px] leading-8.5 font-bold tracking-[-0.4px]">
        {{ t('instructionsInboxHeading') }}
      </h2>
      <p
        class="mt-2 text-[15px] leading-5 font-semibold text-gray-500 dark:text-gray-400"
      >
        {{ t('sentResetLinkTo') }}
        <span class="font-semibold text-gray-900 dark:text-gray-100">{{
          submittedEmail
        }}</span>
      </p>
      <p
        class="mt-2 text-[15px] leading-5 font-semibold text-gray-500 dark:text-gray-400"
      >
        {{ t('instructionsInboxDescription') }}
      </p>
    </FormAuthStepSuccess>
    <FormAuthStepError :error="error" :is-active="step === 'error'">
      <ButtonColored
        :aria-label="t('backToRequest')"
        class="w-full max-w-md"
        variant="primary"
        @click="restart"
      >
        {{ t('backToRequest') }}
      </ButtonColored>
    </FormAuthStepError>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

// stepper
const { t } = useI18n()
const { error, restart, step, title } = useStepperPage<'success'>({
  steps: {
    default: {
      title: t('title'),
    },
    success: {
      title: t('instructionsInboxHeading'),
    },
  },
})

// page
useHeadDefault({ title })

// template
const templateIdTitle = useId()

// state
const submittedEmail = ref('')

// handlers
const handleSuccess = (emailAddress: string) => {
  submittedEmail.value = emailAddress
  step.value = 'success'
}

// navigation
const router = useRouter()
const navigateBack = () => {
  router.back()
}
</script>

<i18n lang="yaml">
de:
  backToRequest: Zurück zur Anfrage
  instructionsInboxDescription: Öffne den Link, um dein Passwort zurückzusetzen.
  instructionsInboxHeading: Überprüfe dein Postfach auf einen Link zum Zurücksetzen
  sentResetLinkTo: 'Wir haben gerade einen Link zum Zurücksetzen gesendet an '
  subtitle: Kein Problem! Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen.
  title: Passwort vergessen?
en:
  backToRequest: Back to Request
  instructionsInboxDescription: Open the link to reset your password.
  instructionsInboxHeading: Check your inbox for a reset link
  sentResetLinkTo: "We've just sent a reset link to "
  subtitle: "No worries! Enter your email and we'll send you a link to reset it."
  title: Forgot your password?
</i18n>
