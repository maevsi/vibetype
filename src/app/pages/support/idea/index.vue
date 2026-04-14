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
      <i18n-t keypath="errorDescription2" tag="span">
        <template #supportLink>
          <AppLink :to="localePath('support-contact')" is-underlined>
            {{ t('supportLink') }}
          </AppLink>
        </template>
      </i18n-t>
    </template>
    <FormSupportIdea
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
const localePath = useLocalePath()
const { error, step } = useStepper<'success'>()
const templateForm = useTemplateRef('form')
</script>

<i18n lang="yaml">
de:
  errorButton: Zurück zum Formular
  errorDescription1: Die Feature-Anfrage scheint nicht geklappt zu haben.
  errorDescription2: Bitte versuche es noch einmal oder wende dich {supportLink}, wenn das Problem weiterhin besteht.
  formButton: Senden
  successButton: OK
  successDescription1: Deine Feature-Anfrage wurde erfolgreich abgesendet!
  successDescription2: Wir werden uns so schnell wie möglich bei dir melden.
  supportLink: an den Support
  title: Feature-Anfrage
en:
  errorButton: Back to the form
  errorDescription1: The feature request does not seem to have worked.
  errorDescription2: Please try again or {supportLink} if the problem persists.
  formButton: Send
  successButton: OK
  successDescription1: Your feature request was submitted successfully!
  successDescription2: We'll get back to you as soon as possible.
  supportLink: contact support
  title: Feature Request
</i18n>
