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
  event: Pick<EventItemFragment, 'id'>
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
const onSubmit = handleSubmit(async (values) => {
  const result = await createReportMutation.executeMutation({
    reportInput: {
      targetEventId: event.id,
      reason: values.reason,
      createdBy: accountId,
    },
  })

  if (result.error) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: apiErrorMessages.value.join('\n'),
      title: t('globalError'),
    })
    return
  }

  if (!result.data) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: t('globalErrorNoData'),
      title: t('globalError'),
    })
    return
  }

  emit('submitSuccess')
})

// api data
const createReportMutation = useCreateReportMutation()
const api = await useApiData([createReportMutation])
const apiErrorMessages = computed(() =>
  getCombinedErrorMessages(api.value.errors),
)
</script>

<i18n lang="yaml">
de:
  drawerDescription: Warum möchtest du dieses Event melden?
  drawerRadioDrugs: Drogenmissbrauch
  drawerRadioNudity: Nacktheit
  drawerRadioOther: Anderes
  drawerRadioSexual: Sexueller Inhalt
  drawerRadioViolence: Gewalt
en:
  drawerDescription: Why are you reporting this event?
  drawerRadioDrugs: Drugs
  drawerRadioNudity: Nudity
  drawerRadioOther: Other
  drawerRadioSexual: Sexual actions
  drawerRadioViolence: Violence
</i18n>
