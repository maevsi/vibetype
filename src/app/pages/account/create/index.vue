<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
      <template v-if="[1, 2].includes(index)" #back>
        <ButtonIcon :aria-label="t('back')" @click="index--">
          <AppIconBack />
        </ButtonIcon>
      </template>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="index === 0">
      <LayoutPage v-bind="attributes">
        <FormAccountRegistration
          ref="form"
          @submit="index++"
          @success="index++"
          @error="handleError"
        />
        <ContentLegalFooter />
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="index === 1">
      <AccountLegalConsent
        v-bind="attributes"
        :disabled="!legalTermId"
        :label="t('agreeTerms')"
        @agreement="index++"
      >
        <ContentLegalTerms @id="legalTermId = $event" />
      </AccountLegalConsent>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="index === 2">
      <AccountLegalConsent
        v-bind="attributes"
        :label="t('agreePrivacy')"
        @agreement="templateForm?.submit(legalTermId || '')"
      >
        <Content path="privacy-consent" />
      </AccountLegalConsent>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="index === 3">
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
    <AppStep v-slot="attributes" :is-active="index === -1">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          <template #description>
            {{ errorDescription ?? t('tryAgain') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('backToRegistration')"
            class="w-full max-w-sm"
            variant="primary-critical"
            @click="index = 0"
          >
            {{ t('backToRegistration') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
  </section>
</template>

<script setup lang="ts">
import { consola } from 'consola'

definePageMeta({
  layout: 'plain',
})

const { t } = useI18n()

// template
const templateIdTitle = useId()
const templateForm = useTemplateRef('form')
const errorDescription = ref('')

// stepper
const index = ref(0)
const title = computed(() => {
  switch (index.value) {
    case 0:
      return t('titleForm')
    case 1:
      return t('titleTerms')
    case 2:
      return t('titlePrivacy')
    case 3:
      return t('titleVerification')
    case -1:
      return t('error')
    default:
      consola.error('Unexpected account flow state')
      return ''
  }
})

const handleError = (_: boolean, errorString: string) => {
  index.value = -1
  errorDescription.value = errorString
}

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
  error: Fehler
  titleForm: Erstelle ein Konto
  titlePrivacy: Datenschutzbestimmungen
  titleTerms: Geschäftsbedingungen
  titleVerification: E-Mail-Bestätigung erforderlich
  tryAgain: Bitte versuchen Sie es erneut
  verificationButton: Warte auf dich…
  verificationInstructions: Überprüfe deine E-Mails auf einen Bestätigungslink.
en:
  agreeTerms: I agree to the Terms and Conditions
  agreePrivacy: I agree to the Privacy Policy
  back: back
  backToRegistration: Back to Registration
  error: Error
  titleForm: Create an account
  titlePrivacy: Privacy Policy
  titleTerms: General Terms and Conditions
  titleVerification: Email Verification Required
  tryAgain: Please try again
  verificationButton: Waiting for you…
  verificationInstructions: Check your emails for a verification link.
</i18n>
