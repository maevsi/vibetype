<template>
  <FormInput
    v-if="formInput"
    :id-label="`input-${id}`"
    :title="title || t('password')"
    :type="isVisible ? 'text' : 'password'"
    :value="formInput"
    @input="emit('input', $event)"
    @icon="isVisible = !isVisible"
  >
    <template v-if="isStrengthShown" #inputSuffix>
      <Progress :model-value="strength" class="my-2" />
    </template>
    <template #icon>
      <IHeroiconsEye v-if="!isVisible" />
      <IHeroiconsEyeSlash v-else />
    </template>
    <template #stateError>
      <FormInputStateError
        :form-input="formInput"
        validation-property="lengthMin"
      >
        {{ t('globalValidationShortness') }}
      </FormInputStateError>
      <FormInputStateError
        :form-input="formInput"
        validation-property="required"
      >
        {{ t('globalValidationRequired') }}
      </FormInputStateError>
      <FormInputStateError :form-input="formInput" validation-property="sameAs">
        {{ t('validationSameAs') }}
      </FormInputStateError>
    </template>
    <template #stateInfo>
      <FormInputStateInfo
        :form-input="formInput"
        validation-property="lengthMin"
      >
        {{
          t('validationFormat', { length: VALIDATION_PASSWORD_LENGTH_MINIMUM })
        }}
      </FormInputStateInfo>
      <slot name="stateInfo" />
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

const {
  id = 'password',
  formInput,
  isStrengthShown,
  title,
} = defineProps<{
  id?: string
  formInput: BaseValidation
  isStrengthShown?: boolean
  title?: string
}>()

const emit = defineEmits<{
  input: [event: string]
}>()

const { t } = useI18n()

// data
const isVisible = ref(false)

const strength = computed(() =>
  calculatePasswordStrength(formInput.$model as string),
)
</script>

<i18n lang="yaml">
de:
  password: Passwort
  validationFormat: Muss {length} Zeichen lang sein
  validationSameAs: Die Passwörter stimmen nicht überein
en:
  password: Password
  validationFormat: Must be {length} characters long
  validationSameAs: The passwords do not match
</i18n>
