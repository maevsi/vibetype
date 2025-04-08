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
      id="terms"
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
      id="privacy"
      :class="{
        hidden: index !== 2,
      }"
      :label="t('agreePrivacy')"
      @agreement="templateForm?.submit(legalTermId || '')"
    >
      <Content class="px-6" path="privacy" />
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
      return t('titleTerms')
    case 2:
      return t('titlePrivacy')
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
  iconAltBack: Pfeil nach links
  titleForm: Erstelle ein Konto
  titlePrivacy: Datenschutzbestimmungen
  titleTerms: Geschäftsbedingungen
en:
  agreeTerms: I agree to the Terms and Conditions
  agreePrivacy: I agree to the Privacy Policy
  back: back
  iconAltBack: Arrow to the left
  titleForm: Create an account
  titlePrivacy: Privacy Policy
  titleTerms: General Terms and Conditions
</i18n>
