<template>
  <form
    v-if="form"
    ref="form"
    :class="[
      { 'animate-shake rounded-lg border border-red-500': errors?.length },
      formClass,
    ]"
    novalidate
    @submit="emit('submit', $event)"
  >
    <div class="flex flex-col">
      <div class="flex min-h-0 flex-col gap-4">
        <slot />
        <div class="flex flex-col justify-between">
          <ButtonColored
            :aria-label="submitName || t('submit')"
            :class="{
              'animate-shake': $error,
            }"
            type="submit"
            @click="emit('click')"
          >
            {{ submitName || t('submit') }}
            <template #prefix>
              <slot name="submit-icon" />
            </template>
          </ButtonColored>
          <FormInputStateError v-if="$error" class="mt-2">
            {{ t('globalValidationFailed') }}
          </FormInputStateError>
        </div>
        <div v-if="errorMessages?.length" class="flex flex-col gap-4">
          <CardStateAlert>
            <SpanList :span="errorMessages" />
          </CardStateAlert>
          <div v-if="$slots.assistance" class="flex justify-center">
            <slot name="assistance" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

const { errors, errorsPgIds, form, formClass, submitName } = defineProps<{
  errors?: BackendError[]
  errorsPgIds?: Record<string, string>
  form: BaseValidation
  formClass?: string
  submitName?: string
}>()

const emit = defineEmits<{
  click: []
  submit: [event: Event]
}>()

const { t } = useI18n()
const templateForm = useTemplateRef('form')

// methods
const resetForm = () => {
  templateForm.value?.reset()
}

// computations
const $error = computed(
  // this is not equivalent to Vuelidate's `$error` as docs claim (https://github.com/vuelidate/vuelidate/pull/1188)
  () => form.$dirty && form.$invalid && !form.$pending,
)
const errorMessages = computed(() =>
  errors ? getCombinedErrorMessages(errors, errorsPgIds) : undefined,
)

defineExpose({
  resetForm,
})
</script>

<script lang="ts">
export default {
  name: 'AppForm',
}
</script>

<i18n lang="yaml">
de:
  submit: Absenden
en:
  submit: Submit
</i18n>
