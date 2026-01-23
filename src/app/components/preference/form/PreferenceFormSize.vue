<template>
  <LoaderIndicatorPing v-if="api.isFetching" />
  <AppError
    v-else-if="error"
    :error="{ message: error.message, status: 500 }"
  />
  <AppError
    v-else-if="!api.data.allPreferenceEventSizes?.nodes.length"
    :error="{ message: 'Data is missing', status: 404 }"
  />
  <form v-else ref="form" class="flex flex-col gap-4" @submit="onSubmit">
    <FormField name="size">
      <FormItem class="flex flex-col gap-2">
        <FormField
          v-for="item in items"
          v-slot="{ value, handleChange }"
          :key="item.id"
          name="items"
          :value="item.id"
          type="checkbox"
          :unchecked-value="false"
        >
          <FormItem class="flex gap-3 p-1">
            <FormControl class="mt-1">
              <AppCheckbox
                :model-value="value.includes(item.id)"
                @update:model-value="handleChange"
              />
            </FormControl>
            <FormLabel class="flex flex-col items-start gap-1">
              <TypographySubtitleMedium>
                {{ item.labelName }}
              </TypographySubtitleMedium>
              <TypographyCaption>
                {{ item.labelDescription }}
              </TypographyCaption>
            </FormLabel>
          </FormItem>
        </FormField>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
  </form>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

import {
  EventSize,
  type AllPreferenceEventSizesQueryVariables,
} from '~~/gql/generated/graphql'
import { useCreatePreferenceEventSizeMutation } from '~~/gql/documents/mutations/preference/preferenceEventSizeCreate'
import { useDeletePreferenceEventSizeByAccountIdAndEventSizeMutation } from '~~/gql/documents/mutations/preference/preferenceEventSizeDeleteByAccountIdAndEventSize'
import { graphql } from '~~/gql/generated'

const emit = defineEmits<{
  submit: []
  success: []
}>()

const templateForm = useTemplateRef('form')
const submit = () =>
  templateForm.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
// TODO: try to dissolve `defineExpose`
defineExpose({ submit })

// api data
const allPreferenceEventSizesQuery = useQuery({
  query: graphql(`
    query AllPreferenceEventSizes {
      allPreferenceEventSizes {
        nodes {
          nodeId
          eventSize
        }
      }
    }
  `),
  variables: {} satisfies AllPreferenceEventSizesQueryVariables,
})
const createPreferenceEventSizeMutation = useCreatePreferenceEventSizeMutation()
const deletePreferenceEventSizeByAccountIdAndEventSizeMutation =
  useDeletePreferenceEventSizeByAccountIdAndEventSizeMutation()
const api = await useApiData([
  allPreferenceEventSizesQuery,
  createPreferenceEventSizeMutation,
  deletePreferenceEventSizeByAccountIdAndEventSizeMutation,
])

// form
const { t } = useI18n()
const items = [
  {
    id: EventSize.Small,
    labelName: t('size1'),
    labelDescription: t('size1Numbers'),
  },
  {
    id: EventSize.Medium,
    labelName: t('size2'),
    labelDescription: t('size2Numbers'),
  },
  {
    id: EventSize.Large,
    labelName: t('size3'),
    labelDescription: t('size3Numbers'),
  },
  {
    id: EventSize.Huge,
    labelName: t('size4'),
    labelDescription: t('size4Numbers'),
  },
]
const modelError = defineModel<Error>('error')
const initialSelectedItems =
  (
    await allPreferenceEventSizesQuery
  ).data.value?.allPreferenceEventSizes?.nodes.map(
    (preference) => preference.eventSize,
  ) ?? []
const { handleSubmit } = useForm({
  initialValues: { items: initialSelectedItems },
  validationSchema: toTypedSchema(
    z.object({
      items: z.array(z.nativeEnum(EventSize)),
    }),
  ),
})
const store = useStore()
const onSubmit = handleSubmit(async (values) => {
  if (!store.signedInAccountId) return

  const itemsToCreate = values.items.filter(
    (eventSize) => !initialSelectedItems.includes(eventSize),
  )
  const itemsToDelete = initialSelectedItems.filter(
    (eventSize) => !values.items.includes(eventSize),
  )

  for (const item of itemsToCreate) {
    const result = await createPreferenceEventSizeMutation.executeMutation({
      input: {
        accountId: store.signedInAccountId,
        eventSize: item,
      },
    })

    if (result.error) return

    if (!result.data) {
      modelError.value = new Error(t('globalErrorNoData'))
      return
    }
  }

  for (const item of itemsToDelete) {
    const result =
      await deletePreferenceEventSizeByAccountIdAndEventSizeMutation.executeMutation(
        {
          input: {
            accountId: store.signedInAccountId,
            eventSize: item,
          },
        },
      )

    if (result.error) return

    if (!result.data) {
      modelError.value = new Error(t('globalErrorNoData'))
      return
    }
  }

  initialSelectedItems.splice(0, initialSelectedItems.length, ...values.items)

  emit('success')
})
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(getCombinedErrorMessages(current)[0])
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  size1: Gemütlich
  size1Numbers: 1-9 Gäste
  size2: Lebhaft
  size2Numbers: 10-49 Gäste
  size3: Energetisch
  size3Numbers: 50-999 Gäste
  size4: Episch
  size4Numbers: '>999 Gäste'
en:
  size1: Cozy
  size1Numbers: 1-9 guests
  size2: Lively
  size2Numbers: 10-49 guests
  size3: Energetic
  size3Numbers: 50-999 guests
  size4: Epic
  size4Numbers: '>999 guests'
</i18n>
