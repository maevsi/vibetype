<template>
  <FormInput
    v-if="formInput"
    :is-optional="isOptional"
    :id-label="`input-${id}`"
    :title="title || t('emailAddress')"
    type="email"
    :value="formInput"
    @input="emit('input', $event)"
  >
    <template #stateError>
      <FormInputStateError
        :form-input="formInput"
        validation-property="lengthMax"
      >
        {{ t('globalValidationLength') }}
      </FormInputStateError>
      <FormInputStateError
        :form-input="formInput"
        validation-property="required"
      >
        {{ t('globalValidationRequired') }}
      </FormInputStateError>
    </template>
    <template #stateWarning>
      <FormInputStateWarning
        v-if="
          formInput.$dirty &&
          !email.$validator(formInput.$model, undefined, undefined)
        "
      >
        {{ t('globalValidationCheck') }}
      </FormInputStateWarning>
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'
import { email } from '@vuelidate/validators'

const {
  formInput,
  id = 'email-address',
  isOptional,
  title,
} = defineProps<{
  formInput: BaseValidation
  id?: string
  isOptional?: boolean
  title?: string
}>()

const emit = defineEmits<{
  input: [event: string]
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  emailAddress: E-Mail-Adresse
en:
  emailAddress: Email address
</i18n>
