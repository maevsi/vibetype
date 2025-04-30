<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-col gap-2">
      <label
        class="inline-flex items-baseline gap-2"
        :class="{
          'text-(--semantic-critic-text)': value?.$error,
        }"
        :for="idLabelFull"
      >
        <TypographySubtitleMedium>{{ title }}</TypographySubtitleMedium>
        <span
          v-if="isRequired || isOptional"
          class="text-xs font-medium text-gray-500 dark:text-gray-400"
        >
          <span v-if="isRequired">
            {{ t('required') }}
          </span>
          <span v-if="isOptional">
            {{ t('optional') }}
          </span>
        </span>
      </label>
      <div class="relative">
        <slot v-if="$slots.default" />
        <!-- TODO: support textarea, checkboxes and radio buttons natively -->
        <div
          v-else
          class="flex items-center gap-2 rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-input-field-fill) has-aria-invalid:border-(--critic-weak)"
        >
          <input
            :id="idLabelFull"
            class="peer flex-1 border-none px-4 py-3 placeholder-(--semantic-base-text-secondary) outline-none"
            :aria-invalid="value?.$error"
            :data-empty="!value?.$model"
            :disabled="isDisabled"
            :placeholder
            :readonly="isReadonly"
            :type
            :value="valueFormatter(value?.$model as string)"
            @click="emit('click')"
            @focusout="value?.$touch()"
            @input="emit('input', ($event.target as HTMLInputElement)?.value)"
          />
          <slot name="clearButton">
            <ButtonIcon
              :aria-label="t('iconAltClose')"
              class="shrink-0 px-2 peer-data-[empty='true']:hidden peer-[&[aria-invalid=true]]:text-(--semantic-critic-text)"
              @click="handleClear"
            >
              <AppIconClose />
            </ButtonIcon>
          </slot>
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
                class="text-(--semantic-success-strong)"
                :title="t('valid')"
              />
            </FormInputIconWrapper>
            <FormInputIconWrapper
              v-else-if="
                !!validationProperty.$model && validationProperty.$invalid
              "
            >
              <IHeroiconsExclamationCircleSolid
                class="text-(--semantic-critic-text)"
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
  // success,
  title,
  type,
  validationProperty,
  value,
  valueFormatter = (x?: string) => x,
  // warning,
} = defineProps<{
  isDisabled?: boolean
  isOptional?: boolean
  isReadonly?: boolean
  isRequired?: boolean
  isValidatable?: boolean
  idLabel?: string
  placeholder?: string
  title: string
  type?: string
  validationProperty?: BaseValidation
  value?: BaseValidation
  valueFormatter?: (x?: string) => typeof x | undefined
}>()

const emit = defineEmits<{
  icon: []
  input: [input: string]
  click: []
  clear: []
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

const handleClear = () => {
  emit('clear')
  emit('input', '')
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
