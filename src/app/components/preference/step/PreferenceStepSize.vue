<template>
  <LayoutPage>
    <div class="flex flex-col gap-4">
      <AppStepProgress class="justify-start" :count="4" :index="1" />
      <span class="text-heading-large text-balance">
        {{ t('title') }}
      </span>
      <span class="text-body text-fg-2">
        {{ t('description') }}
      </span>
      <AppLoaderPing v-if="api.isFetching" :id="templateIdForm" />
      <form
        v-else-if="!apiError"
        :id="templateIdForm"
        class="flex flex-col gap-4"
        @submit.prevent="form.handleSubmit"
      >
        <form.Field v-slot="{ field }" name="items">
          <Field
            :aria-label="t('title')"
            class="flex flex-col gap-3"
            role="group"
          >
            <label
              v-for="item in items"
              :key="item.rowId"
              class="group flex min-h-14 cursor-pointer items-center gap-4 rounded-medium bg-surface-raised px-3.5 py-2.5 has-checked:bg-action-primary has-checked:text-on-action-primary has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-action-primary"
            >
              <input
                :checked="field.state.value.includes(item.rowId)"
                class="sr-only"
                type="checkbox"
                @change="
                  (event) => {
                    const current = field.state.value
                    if ((event.target as HTMLInputElement).checked) {
                      field.handleChange([...current, item.rowId])
                    } else {
                      field.handleChange(
                        current.filter((v) => v !== item.rowId),
                      )
                    }
                  }
                "
              />
              <span
                aria-hidden="true"
                class="flex size-8 shrink-0 items-center justify-center rounded-small bg-line text-action-primary group-has-checked:bg-surface"
              >
                <Check class="size-5 opacity-0 group-has-checked:opacity-100" />
              </span>
              <span class="flex flex-col items-start">
                <span class="text-headline">
                  {{ item.labelName }}
                </span>
                <span
                  class="text-body-small text-fg-2 group-has-checked:text-on-action-primary/80"
                >
                  {{ item.labelDescription }}
                </span>
              </span>
            </label>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </Field>
        </form.Field>
      </form>
    </div>
    <template #bottom>
      <AppButton
        :aria-label="t('button')"
        class="w-full max-w-md"
        :form="templateIdForm"
        type="submit"
      >
        {{ t('button') }}
      </AppButton>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
import { Check } from '@lucide/vue'
import { useMutation } from '@urql/vue'
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

import type { AllPreferenceEventSizesQueryVariables } from '~~/gql/generated/graphql'
import { graphql } from '~~/gql/generated'
import { EventSize } from '~~/gql/generated/graphcache'

// compiler
const emit = defineEmits<{
  next: []
}>()

// template
const modelError = defineModel<Error>('error')
const templateIdForm = useId()
const { t } = useI18n()

// api data
const allPreferenceEventSizesQuery = useApiQuery({
  query: graphql(`
    query AllPreferenceEventSizes {
      allPreferenceEventSizes {
        nodes {
          eventSize
          id
          rowId
        }
      }
    }
  `),
  variables: {} satisfies AllPreferenceEventSizesQueryVariables,
})
const createPreferenceEventSizeMutation = useMutation(
  graphql(`
    mutation CreatePreferenceEventSize(
      $input: CreatePreferenceEventSizeInput!
    ) {
      createPreferenceEventSize(input: $input) {
        clientMutationId
      }
    }
  `),
)
const deletePreferenceEventSizeByAccountIdAndEventSizeMutation = useMutation(
  graphql(`
    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(
      $input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput!
    ) {
      deletePreferenceEventSizeByAccountIdAndEventSize(input: $input) {
        clientMutationId
      }
    }
  `),
)
const api = await useApiData([
  allPreferenceEventSizesQuery,
  createPreferenceEventSizeMutation,
  deletePreferenceEventSizeByAccountIdAndEventSizeMutation,
])

// form
const items = [
  {
    labelName: t('size1'),
    labelDescription: t('size1Numbers'),
    rowId: EventSize.Small,
  },
  {
    labelName: t('size2'),
    labelDescription: t('size2Numbers'),
    rowId: EventSize.Medium,
  },
  {
    labelName: t('size3'),
    labelDescription: t('size3Numbers'),
    rowId: EventSize.Large,
  },
  {
    labelName: t('size4'),
    labelDescription: t('size4Numbers'),
    rowId: EventSize.Huge,
  },
]
const initialSelectedItems =
  (
    await allPreferenceEventSizesQuery
  ).data.value?.allPreferenceEventSizes?.nodes.map(
    (preference) => preference.eventSize,
  ) ?? []

const formSchema = z.object({
  items: z.array(z.enum(EventSize)),
})

const store = useStore()
const form = useForm({
  defaultValues: {
    items: initialSelectedItems,
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    if (!store.signedInAccountId) return

    const itemsToCreate = value.items.filter(
      (eventSize) => !initialSelectedItems.includes(eventSize),
    )
    const itemsToDelete = initialSelectedItems.filter(
      (eventSize) => !value.items.includes(eventSize),
    )

    for (const item of itemsToCreate) {
      const result = await createPreferenceEventSizeMutation.executeMutation({
        input: {
          preferenceEventSize: {
            accountId: store.signedInAccountId,
            eventSize: item,
          },
        },
      })

      if (!getResultData(result)) return
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

      if (!getResultData(result)) return
    }

    initialSelectedItems.splice(0, initialSelectedItems.length, ...value.items)

    emit('next')
  },
})

const apiError = computed(() =>
  api.value.errors.length
    ? new Error(getCombinedErrorMessages(api.value.errors)[0])
    : undefined,
)
useApiErrorModel({
  errorModel: modelError,
  errors: () => api.value.errors,
})
</script>

<i18n lang="yaml">
de:
  button: Weiter
  description: Die richtige Event-Größe sorgt für ein gelungenes Erlebnis. Sie erleichtert die Planung, hält Gäste wohl und gibt die Stimmung vor.
  size1: Gemütlich
  size1Numbers: 1-9 Gäste
  size2: Lebhaft
  size2Numbers: 10-49 Gäste
  size3: Energetisch
  size3Numbers: 50-999 Gäste
  size4: Episch
  size4Numbers: '>999 Gäste'
  title: Wie groß dürfen Events sein?
en:
  button: Next
  description: Choosing the right event size is key to a great experience. It makes planning easier, keeps guests comfortable, and sets the mood.
  size1: Cozy
  size1Numbers: 1-9 guests
  size2: Lively
  size2Numbers: 10-49 guests
  size3: Energetic
  size3Numbers: 50-999 guests
  size4: Epic
  size4Numbers: '>999 guests'
  title: How big can events be?
</i18n>
