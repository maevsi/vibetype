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
          class="flex items-center gap-2 rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-input-field-fill) pr-4 has-aria-invalid:border-(--critic-weak)"
        >
          <input
            :id="idLabelFull"
            class="peer flex-1 border-none py-3 pl-4 placeholder-(--semantic-base-text-secondary) outline-none"
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
          <template v-if="validationProperty && isValidatable">
            <AppIcon v-slot="attributes">
              <AppIconHourglassBold
                v-if="validationProperty.$pending"
                v-bind="attributes"
                class="text-blue-600"
                :title="t('globalLoading')"
              />
              <AppIconCheckCircleSolid
                v-else-if="
                  !!validationProperty.$model && !validationProperty.$invalid
                "
                v-bind="attributes"
                class="text-(--semantic-success-strong)"
                :title="t('valid')"
              />
              <AppIconExclamationCircleSolid
                v-else-if="
                  !!validationProperty.$model && validationProperty.$invalid
                "
                v-bind="attributes"
                class="text-(--semantic-critic-text)"
                :title="t('validNot')"
              />
            </AppIcon>
          </template>
          <ButtonIcon
            :aria-label="t('iconAltClose')"
            class="shrink-0 peer-aria-invalid:text-(--semantic-critic-text) peer-data-[empty='true']:hidden"
            @click="emit('input', '')"
          >
            <AppIconClose />
          </ButtonIcon>
          <slot v-if="$slots.icon" name="icon" />
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

const {
  isDisabled,
  isOptional,
  isReadonly,
  isRequired,
  isValidatable,
  idLabel = undefined,
  placeholder = undefined,
  title,
  type = undefined,
  validationProperty = undefined,
  value = undefined,
  valueFormatter = (x?: string) => x,
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
  click: []
  input: [input: string]
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
  console.warn(`value is missing for ${idLabel}!`)
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
//   console.warn(`placeholder is missing for ${idLabel}!`)
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
