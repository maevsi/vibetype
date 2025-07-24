<template>
  <FormInput
    v-if="formInput"
    :is-optional="isOptional"
    :id-label="`input-${id}`"
    :title="t('usernameOrEmail')"
    :type="inputType"
    :value="formInput"
    @input="handleInput"
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
      <FormInputStateError :form-input="formInput" validation-property="format">
        {{ t('globalValidationFormat') }}
      </FormInputStateError>
    </template>
    <template #stateWarning>
      <FormInputStateWarning
        v-if="
          formInput.$dirty &&
          formInput.$model &&
          ((formInput.$model.includes('@') &&
            !isValidEmail(formInput.$model)) ||
            (!formInput.$model.includes('@') &&
              !isValidUsername(formInput.$model)))
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
import { VALIDATION_FORMAT_SLUG } from '~/utils/validation'

const {
  formInput,
  id = 'username-or-email',
  isOptional,
} = defineProps<{
  formInput: BaseValidation<string | undefined>
  id?: string
  isOptional?: boolean
}>()

const emit = defineEmits<{
  input: [event: string]
}>()

const { t } = useI18n()

const isEmailLike = computed(() => {
  if (!formInput.$model) return false
  return String(formInput.$model).includes('@')
})

const inputType = computed(() => {
  return isEmailLike.value ? 'email' : 'text'
})

const isValidEmail = (value: string) => {
  return email.$validator(value, undefined, undefined)
}

const isValidUsername = (value: string) => {
  return VALIDATION_FORMAT_SLUG(value)
}

const handleInput = (value: string) => {
  emit('input', value)
  formInput.$touch()
}
</script>

<i18n lang="yaml">
de:
  usernameOrEmail: Benutzername oder E-Mail-Adresse
en:
  usernameOrEmail: Username or Email address
</i18n>
