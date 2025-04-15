<template>
  <div class="isolate flex grow flex-col gap-10">
    <LayoutTopBar>
      {{ title }}
      <template #back>
        <ButtonIcon
          v-if="[1, 2].includes(index)"
          :aria-label="t('back')"
          @click="index--"
        >
          <AppIconBack />
        </ButtonIcon>
      </template>
    </LayoutTopBar>
    <div
      class="flex flex-col gap-10 pb-5"
      :class="{
        hidden: index !== 0,
      }"
    >
      <div class="flex justify-center px-6">
        <FormAccountRegistration
          ref="form"
          class="max-w-sm grow"
          @submit="index++"
          @success="index++"
        />
      </div>
      <ContentLegalFooter />
    </div>
    <AccountLegalConsent
      :class="{
        hidden: index !== 1,
      }"
      :disabled="!legalTermId"
      :label="t('agreeTerms')"
      @agreement="index++"
    >
      <ContentLegalTerms @id="legalTermId = $event" />
    </AccountLegalConsent>
    <AccountLegalConsent
      :class="{
        hidden: index !== 2,
      }"
      :label="t('agreePrivacy')"
      @agreement="templateForm?.submit(legalTermId || '')"
    >
      <Content path="privacy-consent" />
    </AccountLegalConsent>
    <div
      class="flex grow flex-col items-center justify-center gap-8 p-8"
      :class="{
        hidden: index !== 3,
      }"
    >
      <TypographySubtitleLarge class="font-bold">
        {{ t('verificationInstructions') }}
      </TypographySubtitleLarge>
      <ButtonColored
        :aria-label="t('verificationButton')"
        class="w-full"
        disabled
        variant="secondary"
      >
        {{ t('verificationButton') }}
      </ButtonColored>
    </div>
  </div>
</template>

<script setup lang="ts">
import { consola } from 'consola'

definePageMeta({
  layout: 'plain',
})

const { t } = useI18n()

// legal term
const legalTermId = ref<string>()

// form
const templateForm = useTemplateRef('form')

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
    default:
      consola.error('Unexpected account flow state')
      return ''
  }
})

// page
useHeadDefault({ title: t('titleForm') })
</script>

<i18n lang="yaml">
de:
  agreeTerms: Ich stimme den Allgemeinen Geschäftsbedingungen zu
  agreePrivacy: Ich stimme der Datenschutzerklärung zu
  back: zurück
  titleForm: Erstelle ein Konto
  titlePrivacy: Datenschutzbestimmungen
  titleTerms: Geschäftsbedingungen
  titleVerification: E-Mail-Bestätigung erforderlich
  verificationButton: Warte auf dich…
  verificationInstructions: Überprüfe deine E-Mails auf einen Bestätigungslink.
en:
  agreeTerms: I agree to the Terms and Conditions
  agreePrivacy: I agree to the Privacy Policy
  back: back
  titleForm: Create an account
  titlePrivacy: Privacy Policy
  titleTerms: General Terms and Conditions
  titleVerification: Email Verification Required
  verificationButton: Waiting for you…
  verificationInstructions: Check your emails for a verification link.
</i18n>
