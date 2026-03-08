<template>
  <form ref="form" @submit="onSubmit">
    <FormField v-slot="{ componentField }" type="radio" name="reason">
      <FormItem>
        <FormLabel class="justify-center">
          <TypographySubtitleSmall>
            {{ t('drawerDescription') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <FormControl>
          <AppRadioGroup v-bind="componentField" is-form :items="reasons" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
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

// template
const reasons = [
  { label: t('drawerRadioSexual'), value: 'sexual' },
  { label: t('drawerRadioNudity'), value: 'nudity' },
  { label: t('drawerRadioViolence'), value: 'violence' },
  { label: t('drawerRadioDrugs'), value: 'drugs' },
  { label: t('drawerRadioOther'), value: 'other' },
]
const templateForm = useTemplateRef('form')

// form
const submit = () =>
  templateForm.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
// TODO: try to dissolve `defineExpose`
defineExpose({
  submit,
})
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      reason: z.string().min(1).max(2000),
    }),
  ),
})
// api data // TODO: move when dissolving `defineExpose`
const createReportMutation = useCreateReportMutation()
// const api = await useApiData([createReportMutation]) // TODO: show loading state, error details
// api data end
const executeUrqlRequest = useExecuteUrqlRequest()
const onSubmit = handleSubmit(async (values) => {
  const result = await executeUrqlRequest({
    errorMessageI18n: t('errorCreate'),
    request: createReportMutation.executeMutation({
      reportInput: {
        targetEventId: event.rowId,
        reason: values.reason,
        createdBy: accountId,
      },
    }),
  })

  if (!result) return // TODO: show error page

  emit('submitSuccess')
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
