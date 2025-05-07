<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
      <template v-if="!error && previous" #back>
        <ButtonIcon :aria-label="t('back')" @click="step = previous">
          <AppIconBack />
        </ButtonIcon>
      </template>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormAccountRegistration
          ref="form"
          v-model:error="error"
          @submit="step = 'terms'"
          @success="step = 'success'"
        />
        <ContentLegalFooter />
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'terms'">
      <AccountLegalConsent
        v-bind="attributes"
        :disabled="!legalTermId"
        :label="t('agreeTerms')"
        @agreement="step = 'privacy'"
      >
        <ContentLegalTerms @id="legalTermId = $event" />
      </AccountLegalConsent>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'privacy'">
      <AccountLegalConsent
        v-bind="attributes"
        :label="t('agreePrivacy')"
        @agreement="templateForm?.submit(legalTermId || '')"
      >
        <Content path="privacy-consent" />
      </AccountLegalConsent>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ t('verificationInstructions') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('verificationButton')"
            class="w-full max-w-md"
            disabled
            variant="secondary"
          >
            {{ t('verificationButton') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
    <AppStep v-if="error" v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          {{ error }}
          <template #description>
            {{ t('tryAgain') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('backToRegistration')"
            class="w-full max-w-sm"
            variant="primary-critical"
            @click="restart"
          >
            {{ t('backToRegistration') }}
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

const { t } = useI18n()

// template
const templateIdTitle = useId()
const templateForm = useTemplateRef('form')

// stepper
const { error, previous, restart, step, title } = useStepperPage<
  'default' | 'terms' | 'privacy' | 'success'
>({
  steps: {
    default: {
      title: t('titleForm'),
    },
    privacy: {
      title: t('titlePrivacy'),
      previous: 'terms',
    },
    success: {
      title: t('titleVerification'),
    },
    terms: {
      title: t('titleTerms'),
      previous: 'default',
    },
  },
})

// page
useHeadDefault({ title: title.value })

// legal term
const legalTermId = ref<string>()
</script>

<i18n lang="yaml">
de:
  agreeTerms: Ich stimme den Allgemeinen Geschäftsbedingungen zu
  agreePrivacy: Ich stimme der Datenschutzerklärung zu
  back: zurück
  backToRegistration: Zurück zur Registrierung
  titleForm: Erstelle ein Konto
  titlePrivacy: Datenschutzbestimmungen
  titleTerms: Geschäftsbedingungen
  titleVerification: E-Mail-Bestätigung erforderlich
  tryAgain: Bitte versuche es erneut
  verificationButton: Warte auf dich…
  verificationInstructions: Überprüfe deine E-Mails auf einen Bestätigungslink.
en:
  agreeTerms: I agree to the Terms and Conditions
  agreePrivacy: I agree to the Privacy Policy
  back: back
  backToRegistration: Back to Registration
  titleForm: Create an account
  titlePrivacy: Privacy Policy
  titleTerms: General Terms and Conditions
  titleVerification: Email Verification Required
  tryAgain: Please try again
  verificationButton: Waiting for you…
  verificationInstructions: Check your emails for a verification link.
</i18n>
