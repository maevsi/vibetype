<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
      <!-- the result steps live on the form's route, so leaving the route would skip the form -->
      <template v-if="step !== 'default'" #back>
        <AppButton
          :aria-label="t('back')"
          size="none"
          variant="ghost"
          @click="toForm"
        >
          <AppIconBack />
        </AppButton>
      </template>
    </LayoutTopBar>
    <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult :message="error?.message" type="error">
          <slot name="error" />
          <template #description>
            {{ errorDescription }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <AppButton
            :aria-label="errorButton"
            class="w-full max-w-md"
            variant="primary-critical"
            @click="error = undefined"
          >
            {{ errorButton }}
          </AppButton>
        </template>
      </LayoutPage>
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <slot :form-id="templateIdForm" />
        <template #bottom>
          <AppButton
            :aria-label="formButton"
            class="w-full max-w-md"
            :form="templateIdForm"
            :loading="isSubmitting"
            type="submit"
          >
            {{ formButton }}
          </AppButton>
        </template>
      </LayoutPage>
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'success'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ successDescription }}
          </template>
          <template #title>
            {{ successTitle }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <AppButton
            :aria-label="successButton"
            class="w-full max-w-md"
            @click="store.navigateBack()"
          >
            {{ successButton }}
          </AppButton>
        </template>
      </LayoutPage>
    </AppStepPanel>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  errorButton: string
  errorDescription: string
  formButton: string
  isSubmitting?: boolean
  successButton: string
  successDescription: string
  successTitle: string
  title: string
}>()

const error = defineModel<Error>('error')
const step = defineModel<string>('step', { required: true })

const store = useStore()
const { t } = useI18n()
const toForm = () => {
  error.value = undefined
  step.value = 'default'
}
const templateIdForm = useId()
const templateIdTitle = useId()
</script>

<i18n lang="yaml">
de:
  back: Zurück
en:
  back: Back
</i18n>
