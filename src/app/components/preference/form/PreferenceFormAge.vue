<template>
  <form ref="form" class="flex flex-col gap-4" @submit="onSubmit">
    <FormField name="birthDate">
      <FormItem class="flex flex-col">
        <FormLabel>{{ t('label') }}</FormLabel>
        <Popover>
          <PopoverTrigger as-child>
            <FormControl>
              <Button
                variant="outline"
                :class="
                  cn('ps-3 text-start', !value && 'text-muted-foreground')
                "
              >
                <span>
                  {{
                    value
                      ? dateFormatter.format(toDate(value))
                      : t('placeholder')
                  }}
                </span>
              </Button>
              <input hidden />
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <AppCalendar
              v-model:placeholder="placeholder"
              v-model="value"
              :calendar-label="t('label')"
              initial-focus
              :min-value="new CalendarDate(1900, 1, 1)"
              :max-value="today(getLocalTimeZone())"
              @update:model-value="
                (v) => {
                  if (v) {
                    setFieldValue('birthDate', v.toString())
                  } else {
                    setFieldValue('birthDate', undefined)
                  }
                }
              "
            />
          </PopoverContent>
        </Popover>
        <FormDescription>
          {{ t('explanation') }}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
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
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

import { cn } from '@/utils/shadcn'

const emit = defineEmits<{
  submit: []
  success: []
}>()

// form
const { t, locale } = useI18n()
const templateForm = useTemplateRef('form')
const submit = () => {
  templateForm.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
}
const { handleSubmit, setFieldValue, values } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      birthDate: z.string(),
    }),
  ),
})
const value = computed({
  get: () => (values.birthDate ? parseDate(values.birthDate) : undefined),
  set: (val) => val,
})
const onSubmit = handleSubmit(async (_values) => {
  // TODO
  emit('success')
})

// calendar
const dateFormatter = new DateFormatter(locale.value, {
  dateStyle: 'long',
})
const placeholder = ref()

defineExpose({
  submit,
})
</script>

<i18n lang="yaml">
de:
  explanation: Dein Geburtsdatum wird zur Berechnung deines Alters verwendet.
  label: Geburtsdatum
  placeholder: Wähle ein Datum
en:
  explanation: Your date of birth is used to calculate your age.
  label: Date of birth
  placeholder: Pick a date
</i18n>
