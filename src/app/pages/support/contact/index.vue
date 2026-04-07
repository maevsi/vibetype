<template>
  <LayoutSupportPage
    v-model:error="error"
    v-model:step="step"
    :error-button="t('errorButton')"
    :error-description="t('errorDescription1')"
    :form-button="t('formButton')"
    :success-button="t('successButton')"
    :success-description="t('successDescription2')"
    :success-title="t('successDescription1')"
    :title="title"
    @submit="templateForm?.submit"
  >
    <template #error>
      {{ t('errorDescription2') }}
    </template>
    <FormSupportContact
      ref="form"
      v-model:error="error"
      @success="step = 'success'"
    />
  </LayoutSupportPage>
</template>

<script setup lang="ts">
// compiler
definePageMeta({
  layout: 'default-no-header',
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// template
const { error, step } = useStepper<'success'>()
const templateForm = useTemplateRef('form')
</script>

<i18n lang="yaml">
de:
  errorButton: Zurück zum Formular
  errorDescription1: Die Kontaktaufnahme scheint nicht geklappt zu haben.
  errorDescription2: Bitte versuche es noch einmal oder wende dich über einen anderen Weg an den Support, wenn das Problem weiterhin besteht.
  formButton: Senden
  successButton: OK
  successDescription1: Deine Kontaktaufnahme wurde erfolgreich abgesendet!
  successDescription2: Wir werden uns so schnell wie möglich bei dir melden.
  title: Kontakt
en:
  errorButton: Back to the form
  errorDescription1: The contact request does not seem to have worked.
  errorDescription2: Please try again or contact support in another way if the problem persists.
  formButton: Send
  successButton: OK
  successDescription1: Your contact request was submitted successully!
  successDescription2: We'll get back to you as soon as possible.
  title: Contact
</i18n>
