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
import { useUpdateAccountBirthDateMutation } from '~~/gql/documents/mutations/account/accountBirthDateUpdate'

const emit = defineEmits<{
  submit: []
  success: []
}>()

// api data
const updateAccountBirthDateMutation = useUpdateAccountBirthDateMutation()
const api = getApiData([updateAccountBirthDateMutation])

// form
const { t, locale } = useI18n()
const templateForm = useTemplateRef('form')
const modelError = defineModel<Error>('error')
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
const onSubmit = handleSubmit(async (values) => {
  const result = await updateAccountBirthDateMutation.executeMutation({
    input: {
      birthDate: values.birthDate,
    },
  })

  if (result.error) return

  if (!result.data) {
    modelError.value = new Error(t('globalErrorNoData'))
    return
  }

  emit('success')
})
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(
          getCombinedErrorMessages(current, {
            postgresP0002: t('postgresP0002'),
            postgres23514: t('postgres23514'),
          })[0],
        )
      : undefined
  },
)

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
  postgresP0002: Das Geburtsdatum konnte nicht gespeichert werden, weil kein Konto zugeordnet werden konnte.
  postgres23514: Das Geburtsdatum kann nur ein Mal festgelegt werden. Kontaktiere den Support, wenn du Fragen hierzu hast.
en:
  explanation: Your date of birth is used to calculate your age.
  label: Date of birth
  placeholder: Pick a date
  postgresP0002: The date of birth could not be saved because no associated account could be found.
  postgres23514: The date of birth can only be set once. Contact support if you have any questions about this.
</i18n>
