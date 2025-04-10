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
      <IVibetypeClose
        v-if="
          (formInput.sameAs && formInput.sameAs.$invalid && formInput.$dirty) ||
          (formInput.lengthMin &&
            formInput.lengthMin.$invalid &&
            formInput.$dirty)
        "
        :aria-label="t('iconAltClose')"
        class="h-6 w-6 text-(--semantic-critic-text)"
        :title="t('validNot')"
      />
      <template v-else>
        <IHeroiconsEye v-if="!isVisible" />
        <IHeroiconsEyeSlash v-else />
      </template>
    </template>
    <template #stateError>
      <template v-if="formInput.required && formInput.required.$invalid">
        <FormInputStateError
          :form-input="formInput"
          validation-property="required"
        >
          {{ t('globalValidationRequired') }}
        </FormInputStateError>
      </template>
      <template v-else-if="formInput.lengthMin && formInput.lengthMin.$invalid">
        <FormInputStateError
          :form-input="formInput"
          validation-property="lengthMin"
        >
          {{ t('globalValidationShortness') }}
        </FormInputStateError>
      </template>
      <template v-else-if="formInput.sameAs && formInput.sameAs.$invalid">
        <FormInputStateError
          :form-input="formInput"
          validation-property="sameAs"
        >
          {{ t('globalValidationSameAs') }}
        </FormInputStateError>
      </template>
    </template>
    <template #stateInfo>
      <FormInputStateInfo
        :form-input="formInput"
        validation-property="lengthMin"
      >
        {{
          t('validationFormat', {
            length: VALIDATION_PASSWORD_LENGTH_MINIMUM,
          })
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
  iconAltClose: X-Icon
  password: Passwort
  validationFormat: Muss {length} Zeichen lang sein
  validNot: Ungültig
en:
  iconAltClose: X icon
  password: Password
  validationFormat: Must be {length} characters long
  validNot: invalid
</i18n>
