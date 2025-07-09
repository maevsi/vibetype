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
          <i18n-t keypath="errorDescription2" tag="span">
            <template #supportLink>
              <AppLink :to="localePath('support-contact')" is-underlined>
                {{ t('supportLink') }}
              </AppLink>
            </template>
          </i18n-t>
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
        <FormSupportIdea
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
const store = useStore()
const templateForm = useTemplateRef('form')
const templateIdTitle = useId()
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
  errorDescription2: Please try again or {supportLink} in another way if the problem persists.
  formButton: Send
  successButton: OK
  successDescription1: Your feature request was submitted successully!
  successDescription2: We'll get back to you as soon as possible.
  supportLink: contact support
  title: Feature Request
</i18n>
