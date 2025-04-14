<template>
  <div
    class="flex flex-col gap-1"
    :class="{
      'form-input-success': success,
      'form-input-warning': warning,
      'form-input-error': value?.$error,
    }"
  >
    <div class="flex flex-col gap-2">
      <div>
        <label
          class="inline-flex items-baseline gap-2 font-semibold"
          :class="{
            'form-input-success': success,
            'form-input-warning': warning,
            'form-input-error': value?.$error,
            'text-(--semantic-critic-text)': value?.$error,
          }"
          :for="idLabelFull"
        >
          <TypographySubtitleMedium>{{ title }}</TypographySubtitleMedium>
          <span
            v-if="isRequired || isOptional"
            class="text-xs font-medium text-gray-500 md:text-right dark:text-gray-400"
          >
            <span v-if="isRequired">
              {{ t('required') }}
            </span>
            <span v-if="isOptional">
              {{ t('optional') }}
            </span>
          </span>
        </label>
      </div>
      <div class="relative">
        <slot v-if="$slots.default" />
        <!-- TODO: support textarea, checkboxes and radio buttons natively -->
        <div
          v-else
          class="flex items-center gap-2 rounded-lg border bg-(--semantic-base-input-field-fill) aria-[invalid=true]:border-(--critic-weak)"
          :aria-invalid="value?.$error ? 'true' : 'false'"
        >
          <input
            :id="idLabelFull"
            class="flex-grow border-none px-4 py-3 placeholder-(--semantic-base-text-secondary) outline-0 focus:outline-none"
            :aria-invalid="value?.$error ? 'true' : 'false'"
            :disabled="isDisabled"
            :placeholder="placeholder"
            :readonly="isReadonly"
            :type
            :value="valueFormatter(value?.$model as string)"
            @click="emit('click')"
            @focusout="value?.$touch()"
            @input="emit('input', ($event.target as HTMLInputElement)?.value)"
          />
          <div v-if="validationProperty && isValidatable">
            <FormInputIconWrapper v-if="validationProperty.$pending">
              <ISolarHourglassBold
                class="text-blue-600"
                :title="t('globalLoading')"
              />
            </FormInputIconWrapper>
            <FormInputIconWrapper
              v-else-if="
                !!validationProperty.$model && !validationProperty.$invalid
              "
            >
              <IHeroiconsCheckCircleSolid
                class="text-green-600"
                :title="t('valid')"
              />
            </FormInputIconWrapper>
            <FormInputIconWrapper
              v-else-if="
                !!validationProperty.$model && validationProperty.$invalid
              "
            >
              <IVibetypeClose
                :aria-label="t('iconAltClose')"
                class="h-6 w-6 text-(--semantic-critic-text)"
                :title="t('validNot')"
              />
            </FormInputIconWrapper>
          </div>
          <div v-if="$slots.icon" class="flex pr-4">
            <button type="button" @click="emit('icon')">
              <slot name="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <slot name="inputSuffix" />
    <slot name="stateSuccess" />
    <slot name="stateInfo" />
    <FormInputStateInfo v-if="value?.$pending">
      {{ t('globalLoading') }}
    </FormInputStateInfo>
    <slot name="stateWarning" />
    <slot name="stateError" />
    <slot name="assistance" />
  </div>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'
import { consola } from 'consola'

const {
  isDisabled,
  isOptional,
  isReadonly,
  isRequired,
  isValidatable,
  idLabel,
  placeholder,
  success,
  title,
  type,
  validationProperty,
  value,
  valueFormatter = (x?: string) => x,
  warning,
} = defineProps<{
  isDisabled?: boolean
  isOptional?: boolean
  isReadonly?: boolean
  isRequired?: boolean
  isValidatable?: boolean
  idLabel?: string
  placeholder?: string
  success?: boolean
  title: string
  type?: string
  validationProperty?: BaseValidation
  value?: BaseValidation
  valueFormatter?: (x?: string) => typeof x | undefined
  warning?: boolean
}>()

const emit = defineEmits<{
  icon: []
  input: [input: string]
  click: []
}>()

const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()

// data
const idLabelFull = idLabel
  ? `${SITE_NAME}-${runtimeConfig.public.vio.isInProduction ? 'prod' : 'dev'}-${
      idLabel
    }`
  : undefined

// initialization
if (!value && type && !['checkbox', 'select'].includes(type)) {
  consola.warn(`value is missing for ${idLabel}!`)
}

// if (
//   !placeholder &&
//   type &&
//   ![
//     'checkbox',
//     'datetime-local',
//     'number',
//     'select',
//     'textarea',
//     'tiptap',
//     'radio',
//   ].includes(type)
// ) {
//   consola.warn(`placeholder is missing for ${idLabel}!`)
// }
</script>

<i18n lang="yaml">
de:
  iconAltClose: X-Icon
  optional: optional
  required: Pflichtfeld
  valid: Gültig
  validNot: Ungültig
en:
  iconAltClose: X icon
  optional: optional
  required: required
  valid: valid
  validNot: invalid
</i18n>
