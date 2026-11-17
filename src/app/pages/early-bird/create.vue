<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
      <template v-if="previous" #back>
        <AppButton
          :aria-label="t('back')"
          size="none"
          variant="ghost"
          @click="step = previous"
        >
          <AppIconBack />
        </AppButton>
      </template>
      <template v-if="!error && ['default', 'form'].includes(step)" #close>
        <ButtonIconBackRoute :aria-label="t('iconAltClose')">
          <AppIconClose />
        </ButtonIconBackRoute>
      </template>
    </LayoutTopBar>
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <EarlyBirdWelcome v-bind="attributes" @next="step = 'form'" />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'form'">
      <EarlyBirdForm
        v-bind="attributes"
        v-model:error="error"
        @next="step = 'submission'"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'submission'">
      <EarlyBirdSubmission v-bind="attributes" />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult :message="error?.message" type="error">
          <template #description>
            {{ t('globalTryAgain') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <AppButton
            :aria-label="t('backToForm')"
            class="w-full max-w-md"
            variant="primary"
            @click="restart"
          >
            {{ t('backToForm') }}
          </AppButton>
        </template>
      </LayoutPage>
    </AppStepPanel>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'focused',
})

const { t } = useI18n()
const templateIdTitle = useId()

// validation
await useSignInRequired()

// stepper
const { error, previous, restart, step, title } = useStepperPage<
  'form' | 'submission'
>({
  steps: {
    default: {
      title: t('title'),
    },
    form: {
      previous: 'default',
    },
    submission: {},
  },
})

// page
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  back: zurück
  backToForm: Zurück zum Formular
  iconAltClose: Schließen
  title: Früher Vogel Programm
en:
  back: back
  backToForm: Back to Form
  iconAltClose: Close
  title: Early Bird Program
</i18n>
