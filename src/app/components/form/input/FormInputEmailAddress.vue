<template>
  <FormInput
    v-if="formInput"
    :is-optional
    :id-label="`input-${id}`"
    :title="title || t('emailAddress')"
    type="email"
    :value="formInput"
    @input="emit('input', $event)"
  >
    <template #stateError>
      <FormInputStateError :form-input validation-property="lengthMax">
        {{ t('globalValidationLength') }}
      </FormInputStateError>
      <FormInputStateError :form-input validation-property="required">
        {{ t('globalValidationRequired') }}
      </FormInputStateError>
    </template>
    <template #stateWarning>
      <!-- this is intentionally a warning rather than an error, as we aim to be "liberal in what we accept from others" (https://www.dominicsayers.com/isemail/) -->
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
  title = undefined,
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
