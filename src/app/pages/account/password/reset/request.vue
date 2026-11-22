<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">{{ t('titleShort') }}</span>
    </LayoutTopBar>
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormAuthHeader>
          <template #title>{{ t('title') }}</template>
          <template #subtitle>{{ t('subtitle') }}</template>
        </FormAuthHeader>
        <FormAccountPasswordResetRequest
          v-model:error="error"
          @success="handleSuccess"
        />
      </LayoutPage>
    </AppStepPanel>
    <FormAuthStepSuccess :is-active="step === 'success'">
      <h2 class="text-heading-large">
        {{ t('instructionsInboxHeading') }}
      </h2>
      <p class="mt-2 text-body text-fg-2">
        {{ t('sentResetLinkTo') }}
        <span class="font-semibold text-fg-1">{{ submittedEmail }}</span>
      </p>
      <p class="mt-2 text-body text-fg-2">
        {{ t('instructionsInboxDescription') }}
      </p>
    </FormAuthStepSuccess>
    <FormAuthStepError :error="error" :is-active="step === 'error'">
      <AppButton
        :aria-label="t('backToRequest')"
        class="w-full max-w-md"
        variant="primary"
        @click="restart"
      >
        {{ t('backToRequest') }}
      </AppButton>
    </FormAuthStepError>
  </section>
</template>

<script setup lang="ts">
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
</script>

<i18n lang="yaml">
de:
  backToRequest: Zurück zur Anfrage
  instructionsInboxDescription: Öffne den Link, um dein Passwort zurückzusetzen.
  instructionsInboxHeading: Überprüfe dein Postfach auf einen Link zum Zurücksetzen
  sentResetLinkTo: 'Wir haben gerade einen Link zum Zurücksetzen gesendet an '
  subtitle: Kein Problem! Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen.
  title: Passwort vergessen?
  titleShort: Passwort zurücksetzen
en:
  backToRequest: Back to Request
  instructionsInboxDescription: Open the link to reset your password.
  instructionsInboxHeading: Check your inbox for a reset link
  sentResetLinkTo: "We've just sent a reset link to "
  subtitle: "No worries! Enter your email and we'll send you a link to reset it."
  title: Forgot your password?
  titleShort: Reset password
</i18n>
