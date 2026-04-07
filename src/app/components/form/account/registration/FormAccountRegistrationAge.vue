<template>
  <form ref="formRef" class="flex flex-col gap-4" @submit="onSubmit">
    <form.Field v-slot="{ field }" name="birthDate">
      <Field class="flex flex-col">
        <FieldLabel>{{ t('label') }}</FieldLabel>
        <FieldContent>
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                :class="
                  cn(
                    'ps-3 text-start',
                    !field.state.value && 'text-muted-foreground',
                  )
                "
              >
                <span>
                  {{
                    field.state.value
                      ? dateFormatter.format(
                          toDate(parseDate(field.state.value)),
                        )
                      : t('placeholder')
                  }}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <AppCalendar
                v-model:placeholder="placeholder"
                :model-value="
                  field.state.value ? parseDate(field.state.value) : undefined
                "
                :calendar-label="t('label')"
                initial-focus
                :min-value="new CalendarDate(1900, 1, 1)"
                :max-value="today(getLocalTimeZone())"
                @update:model-value="
                  (v) => {
                    field.handleChange(v ? v.toString() : '')
                  }
                "
              />
            </PopoverContent>
          </Popover>
        </FieldContent>
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
      </Field>
    </form.Field>
  </form>
</template>

<script setup lang="ts">
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  parseDate,
  today,
} from '@internationalized/date'
import { toDate } from 'reka-ui/date'
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

import { cn } from '@/utils/shadcn'

const emit = defineEmits<{
  success: [string]
}>()

// form
const { t, locale } = useI18n()
const formRef = useTemplateRef<HTMLFormElement>('formRef')

const formSchema = z.object({
  birthDate: z
    .string()
    .min(1)
    .refine(
      (value) => {
        const birthDate = parseDate(value)
        const todayDate = today(getLocalTimeZone())
        const targetDate = todayDate.subtract({ years: 18 })

        return birthDate.compare(targetDate) <= 0
      },
      { message: t('globalFormErrorAge18') },
    ),
})

const form = useForm({
  defaultValues: {
    birthDate: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    emit('success', value.birthDate)
  },
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}

const submit = () => formRef.value?.requestSubmit()
defineExpose({
  submit,
})

// calendar
const dateFormatter = new DateFormatter(locale.value, {
  dateStyle: 'long',
})
const placeholder = ref()
</script>

<i18n lang="yaml">
de:
  label: Geburtsdatum
  placeholder: Wähle ein Datum
en:
  label: Date of birth
  placeholder: Pick a date
</i18n>
