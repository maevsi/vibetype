<template>
  <FormInput
    v-if="formInput"
    :is-disabled="isDisabled"
    :is-optional="isOptional"
    :is-validatable="isValidatable"
    :id-label="`input-birthdate`"
    :title="t('label')"
    type="text"
    :validation-property="formInput"
    :value="formInput"
    @input="emit('input', $event)"
  >
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="
            cn(
              'w-full justify-start ps-3 text-start',
              !value && 'text-muted-foreground',
            )
          "
        >
          <span>
            {{ value ? dateFormatter.format(toDate(value)) : t('placeholder') }}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <AppCalendar
          v-model:placeholder="placeholder"
          :model-value="value"
          :calendar-label="t('label')"
          initial-focus
          :min-value="new CalendarDate(1900, 1, 1)"
          :max-value="today(getLocalTimeZone())"
          @update:model-value="handleDateChange"
        />
      </PopoverContent>
    </Popover>
    <template #stateError>
      <FormInputStateError :form-input="formInput" validation-property="date">
        {{ t('validationMinimumAge') }}
      </FormInputStateError>

      <FormInputStateError
        :form-input="formInput"
        validation-property="required"
      >
        {{ t('globalValidationRequired') }}
      </FormInputStateError>
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  parseDate,
  today,
  type DateValue,
} from '@internationalized/date'
import type { BaseValidation } from '@vuelidate/core'
import { toDate } from 'reka-ui/date'

import { cn } from '@/utils/shadcn'

const {
  formInput = undefined,
  isDisabled,
  isOptional,
  isValidatable,
} = defineProps<{
  formInput?: BaseValidation
  isDisabled?: boolean
  isOptional?: boolean
  isValidatable?: boolean
}>()

const emit = defineEmits<{
  input: [event: string]
}>()

const { t, locale } = useI18n()

// Calendar setup
const dateFormatter = new DateFormatter(locale.value, {
  dateStyle: 'long',
})
const placeholder = ref()

// Convert string to CalendarDate for display
const value = computed({
  get: () =>
    formInput?.$model && typeof formInput.$model === 'string'
      ? parseDate(formInput.$model)
      : undefined,
  set: (val) => val,
})

const handleDateChange = (v: DateValue | undefined) => {
  formInput?.$touch()
  if (v) {
    emit('input', v.toString())
  } else {
    emit('input', '')
  }
}
</script>

<i18n lang="yaml">
de:
  label: Geburtsdatum
  placeholder: Wähle ein Datum
  validationMinimumAge: Du musst mindestens 18 Jahre alt sein
en:
  label: Date of birth
  placeholder: Pick a date
  validationMinimumAge: You must be at least 18 years old
</i18n>
