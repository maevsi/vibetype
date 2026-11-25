<template>
  <LayoutSupportPage
    v-model:error="error"
    v-model:step="step"
    :error-button="t('errorButton')"
    :error-description="t('errorDescription1')"
    :form-button="t('formButton')"
    :is-submitting
    :success-button="t('successButton')"
    :success-description="t('successDescription2')"
    :success-title="t('successDescription1')"
    :title="title"
  >
    <template #error>
      <i18n-t keypath="errorDescription2" tag="span">
        <template #supportLink>
          <AppLink is-underlined :to="localePath('support-contact')">
            {{ t('supportLink') }}
          </AppLink>
        </template>
      </i18n-t>
    </template>
    <template #default="{ formId }">
      <FormSupportReport
        :id="formId"
        v-model:error="error"
        v-model:is-submitting="isSubmitting"
        @success="step = 'success'"
      />
    </template>
  </LayoutSupportPage>
</template>

<script setup lang="ts">
// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// template
const localePath = useLocalePath()
const { error, step } = useStepper<'success'>()
const isSubmitting = ref(false)
</script>

<i18n lang="yaml">
de:
  errorButton: Zurück zum Formular
  errorDescription1: Die Meldung von Inhalten scheint nicht geklappt zu haben.
  errorDescription2: Bitte versuche es noch einmal oder wende Dich {supportLink}, wenn das Problem weiterhin besteht.
  formButton: Senden
  successButton: OK
  successDescription1: Deine Meldung von Inhalten wurde erfolgreich abgesendet!
  successDescription2: Wir werden uns so schnell wie möglich bei Dir melden.
  supportLink: an den Support
  title: Meldung von Inhalten
en:
  errorButton: Back to the form
  errorDescription1: The content report does not seem to have worked.
  errorDescription2: Please try again or {supportLink} if the problem persists.
  formButton: Send
  successButton: OK
  successDescription1: Your content report was submitted successfully!
  successDescription2: We'll get back to you as soon as possible.
  supportLink: contact support
  title: Content Report
</i18n>
