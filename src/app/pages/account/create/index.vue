<template>
  <div class="isolate flex grow flex-col gap-10">
    <LayoutTopBar>
      {{ title }}
      <template #back>
        <ButtonIcon v-if="index" :aria-label="t('back')" @click="index--">
          <!-- TODO: extract icon wrapper component -->
          <IVibetypeBack
            :aria-label="t('iconAltBack')"
            class="size-6"
            role="graphics-symbol img"
          />
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
        />
      </div>
      <ContentLegalFooter />
    </div>
    <AccountLegalConsent
      id="general-terms-and-conditions"
      :class="{
        hidden: index !== 1,
      }"
      :disabled="!legalTermId"
      :label="t('agreeGeneralTermsAndConditions')"
      @agreement="index++"
    >
      <ContentLegalGeneralTermsAndConditions @id="legalTermId = $event" />
    </AccountLegalConsent>
    <AccountLegalConsent
      id="privacy-policy"
      :class="{
        hidden: index !== 2,
      }"
      :label="t('agreePrivacyPolicy')"
      @agreement="templateForm?.submit(legalTermId || '')"
    >
      <Content class="px-6" path="privacy-policy" />
    </AccountLegalConsent>
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
      return t('titleGeneralTermsAndConditions')
    case 2:
      return t('titlePrivacyPolicy')
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
  agreeGeneralTermsAndConditions: Ich stimme den Allgemeinen Geschäftsbedingungen zu
  agreePrivacyPolicy: Ich stimme der Datenschutzerklärung zu
  back: zurück
  iconAltBack: Pfeil nach links
  titleForm: Erstelle ein Konto
  titlePrivacyPolicy: Datenschutzbestimmungen
  titleGeneralTermsAndConditions: Geschäftsbedingungen
en:
  agreeGeneralTermsAndConditions: I agree to the Terms and Conditions
  agreePrivacyPolicy: I agree to the Privacy Policy
  back: back
  iconAltBack: Arrow to the left
  titleForm: Create an account
  titlePrivacyPolicy: Privacy Policy
  titleGeneralTermsAndConditions: General Terms and Conditions
</i18n>
