<template>
  <form ref="formRef" @submit.prevent="form.handleSubmit">
    <form.Field v-slot="{ field }" name="reason">
      <Field>
        <FieldLabel class="justify-center">
          <TypographySubtitleSmall>
            {{ t('drawerDescription') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <AppRadioGroup
            :items="reasons"
            :model-value="field.state.value"
            @update:model-value="
              (value) => {
                field.handleChange(String(value ?? ''))
                field.handleBlur()
              }
            "
          />
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
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

import { useCreateReportMutation } from '~~/gql/documents/mutations/report/reportCreate'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { t } = useI18n()

const { accountId, event } = defineProps<{
  accountId: string
  event: Pick<EventItemFragment, 'rowId'>
}>()

const emit = defineEmits<{
  submitSuccess: []
}>()

const modelError = defineModel<Error>('error')

// template
const reasons = [
  { label: t('drawerRadioSexual'), value: 'sexual' },
  { label: t('drawerRadioNudity'), value: 'nudity' },
  { label: t('drawerRadioViolence'), value: 'violence' },
  { label: t('drawerRadioDrugs'), value: 'drugs' },
  { label: t('drawerRadioOther'), value: 'other' },
]
const formRef = useTemplateRef<HTMLFormElement>('formRef')

// form
const submit = () => formRef.value?.requestSubmit()
defineExpose({
  submit,
})

const formSchema = z.object({
  reason: z.string().min(1).max(2000),
})

// api data
const createReportMutation = useCreateReportMutation()

const form = useForm({
  defaultValues: {
    reason: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const result = await createReportMutation.executeMutation({
      input: {
        report: {
          targetEventId: event.rowId,
          reason: value.reason,
          createdBy: accountId,
        },
      },
    })

    if (result.error) {
      modelError.value = new Error(t('errorCreate'))
      return
    }

    if (!result.data) {
      modelError.value = new Error(t('globalErrorNoData'))
      return
    }

    emit('submitSuccess')
  },
})
</script>

<i18n lang="yaml">
de:
  drawerDescription: Warum möchtest du dieses Event melden?
  drawerRadioDrugs: Drogenmissbrauch
  drawerRadioNudity: Nacktheit
  drawerRadioOther: Anderes
  drawerRadioSexual: Sexueller Inhalt
  drawerRadioViolence: Gewalt
  errorCreate: Es gab ein Problem beim Speichern deiner Meldung
en:
  drawerDescription: Why are you reporting this event?
  drawerRadioDrugs: Drugs
  drawerRadioNudity: Nudity
  drawerRadioOther: Other
  drawerRadioSexual: Sexual actions
  drawerRadioViolence: Violence
  errorCreate: There was an issue saving your report
</i18n>
