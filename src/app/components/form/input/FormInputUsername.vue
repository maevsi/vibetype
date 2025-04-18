<template>
  <FormInput
    v-if="formInput"
    :is-disabled="isDisabled"
    :is-optional="isOptional"
    :is-validatable="isValidatable"
    :id-label="`input-username`"
    :success="!!formInput.$model && isValidatable && !formInput.$invalid"
    :title="t('username')"
    type="text"
    :validation-property="formInput"
    :value="formInput"
    @input="emit('input', $event)"
  >
    <template #clearButton>
      <ButtonIcon
        :aria-label="t('iconAltClose')"
        class="hidden flex-shrink-0 px-2 text-(--semantic-critic-text) peer-[:not([data-empty='true'])]:block"
        @click="emit('input', '')"
      >
        <IVibetypeClose
          :aria-label="t('iconAltClose')"
          class="size-6 text-(--semantic-critic-text)"
        />
      </ButtonIcon>
    </template>
    <template #icon>
      <div class="flex flex-row gap-1">
        <slot v-if="$slots.icon" name="icon" />
      </div>
    </template>
    <template #stateError>
      <FormInputStateError
        :form-input="formInput"
        :is-validation-live="!isValidationInverted"
        validation-property="existence"
      >
        {{ t('globalValidationExistenceNone') }}
      </FormInputStateError>
      <FormInputStateError
        :form-input="formInput"
        :is-validation-live="isValidationInverted"
        validation-property="existenceNone"
      >
        {{ t('globalValidationAvailabilityNone') }}
      </FormInputStateError>
      <FormInputStateError
        :form-input="formInput"
        validation-property="formatSlug"
      >
        {{ t('validationFormat') }}
      </FormInputStateError>
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
    <template #stateInfo>
      <FormInputStateInfo
        :form-input="formInput"
        :is-validation-live="!isValidationInverted"
        validation-property="existence"
      >
        {{ t('validationExistenceHint') }}
      </FormInputStateInfo>
      <slot name="stateInfo" />
    </template>
    <template v-if="!!formInput.$model && isValidatable" #stateSuccess>
      <FormInputStateSuccess
        :form-input="formInput"
        validation-property="existence"
      >
        {{
          isValidationInverted
            ? t('globalValidationAvailability')
            : t('globalValidationExistence')
        }}
      </FormInputStateSuccess>
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

const {
  formInput,
  isDisabled,
  isOptional,
  isValidatable,
  isValidationInverted,
} = defineProps<{
  formInput?: BaseValidation
  isDisabled?: boolean
  isOptional?: boolean
  isValidatable?: boolean
  isValidationInverted?: boolean
}>()

const emit = defineEmits<{
  input: [event: string]
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  iconAltClose: X-Icon
  username: Nutzername
  validationExistenceHint: Hast du Groß- und Kleinbuchstaben richtig verwendet?
  validationFormat: Darf nur Buchstaben, Ziffern und Bindestriche enthalten.
en:
  iconAltClose: X icon
  username: Username
  validationExistenceHint: Have you used upper and lower case letters correctly?
  validationFormat: May only contain letter, digits and dashes.
</i18n>
