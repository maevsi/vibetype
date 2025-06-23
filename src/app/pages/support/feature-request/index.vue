<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          {{ t('errorDescription2') }}
          <template #description>
            {{ t('errorDescription1') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('errorButton')"
            class="w-full max-w-md"
            variant="primary-critical"
            @click="error = undefined"
          >
            {{ t('errorButton') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormFeatureRequest
          ref="form"
          v-model:error="error"
          @success="step = 'success'"
        />
        <template #bottom>
          <ButtonColored
            :aria-label="t('formButton')"
            class="w-full max-w-md"
            @click="templateForm?.submit"
          >
            {{ t('formButton') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ t('successDescription2') }}
          </template>
          <template #title>
            {{ t('successDescription1') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('successButton')"
            class="w-full max-w-md"
            @click="store.navigateBack"
          >
            {{ t('successButton') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'default-no-header',
})

const { t } = useI18n()
const store = useStore()

// template
const templateForm = useTemplateRef('form')
const templateIdTitle = useId()

// page
const title = t('title')
useHeadDefault({ title })

// stepper
const { error, step } = useStepper<'success'>()
</script>
<i18n lang="yaml">
de:
  errorButton: Zurück zum Formular
  errorDescription1: Die Feature-Anfrage scheint nicht geklappt zu haben.
  errorDescription2: Bitte versuche es noch einmal oder wende dich über einen anderen Weg an den Support, wenn das Problem weiterhin besteht.
  formButton: Senden
  successButton: OK
  successDescription1: Deine Feature-Anfrage wurde erfolgreich abgesendet!
  successDescription2: Wir werden uns so schnell wie möglich bei dir melden.
  title: Feature-Anfrage
en:
  errorButton: Back to the form
  errorDescription1: The feature request does not seem to have worked.
  errorDescription2: Please try again or contact support in another way if the problem persists.
  formButton: Send
  successButton: OK
  successDescription1: Your feature request was submitted successully!
  successDescription2: We'll get back to you as soon as possible.
  title: Feature request
</i18n>
