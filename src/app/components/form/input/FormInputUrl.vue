<template>
  <FormInput
    v-if="formInput"
    :is-optional
    :id-label="`input-${id}`"
    :placeholder="t('globalPlaceholderUrl')"
    :title="t('url')"
    type="url"
    :value="formInput"
    @input="emit('input', $event)"
  >
    <template #stateError>
      <FormInputStateError :form-input validation-property="lengthMax">
        {{ t('globalValidationLength') }}
      </FormInputStateError>
      <FormInputStateError :form-input validation-property="formatUrlHttps">
        {{ t('globalValidationFormatUrlHttps') }}
      </FormInputStateError>
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

const {
  formInput,
  id = 'phone-number',
  isOptional,
} = defineProps<{
  formInput: BaseValidation
  id?: string
  isOptional?: boolean
}>()

const emit = defineEmits<{
  input: [event: string]
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  url: Weblink
en:
  url: Weblink
</i18n>
