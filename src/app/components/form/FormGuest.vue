<template>
  <form
    v-if="event"
    class="flex min-h-0 flex-col"
    novalidate
    @submit.prevent="onSubmit"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-center gap-4">
        <span>
          {{ t('formHint') }}
        </span>
        <ButtonColored
          :aria-label="t('contactsAdd')"
          :to="localePath('contact')"
        >
          {{ t('contactsAdd') }}
          <template #suffix>
            <AppIconArrowRight />
          </template>
        </ButtonColored>
      </div>
      <form.Field v-slot="{ field }" name="searchString">
        <Field>
          <FieldLabel for="input-contact-id">{{ t('contact') }}</FieldLabel>
          <FieldContent>
            <div class="relative">
              <AppIconMagnifyingGlass
                class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
              />
              <Input
                id="input-contact-id"
                class="pl-9"
                :placeholder="t('placeholderContact')"
                type="text"
                :model-value="field.state.value"
                @blur="field.handleBlur"
                @input="
                  field.handleChange(($event.target as HTMLInputElement).value)
                "
              />
            </div>
          </FieldContent>
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="contactIds">
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
        <AppScrollContainer
          v-if="contacts"
          class="flex flex-col gap-2"
          :has-next-page="!!apiData.data.allContacts?.pageInfo.hasNextPage"
          @load-more="after = apiData.data.allContacts?.pageInfo.endCursor"
        >
          <AppButton
            v-for="contact in contactsFiltered"
            :key="contact.rowId"
            :aria-label="t('buttonContact')"
            class="flex w-full items-center gap-4 rounded-sm border-2 border-neutral-300 px-4 py-2 dark:border-neutral-600"
            :disabled="guestContactIdsExisting?.includes(contact.rowId)"
            type="button"
            @click="selectToggle(contact.rowId, field)"
          >
            <ContactPreview :contact :is-username-linked="false" />
            <FormCheckbox
              :is-disabled="guestContactIdsExisting?.includes(contact.rowId)"
              :value="
                guestContactIdsExisting?.includes(contact.rowId) ||
                field.state.value.includes(contact.rowId)
              "
            />
          </AppButton>
        </AppScrollContainer>
      </form.Field>
      <div class="flex flex-col items-center">
        <ButtonColored :aria-label="t('select')" class="w-full" type="submit">
          {{ t('select') }}
        </ButtonColored>
      </div>
      <CardStateAlert v-if="errorMessages?.length">
        <AppSpanList :span="errorMessages" />
      </CardStateAlert>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

import { useCreateGuestsMutation } from '~~/gql/documents/mutations/guest/guestCreate'
import { useAllContactsQuery } from '~~/gql/documents/queries/contact/contactsAll'
import type { EventItemFragment } from '~~/gql/generated/graphql'
import { getContactItem } from '~~/gql/documents/fragments/contactItem'

const { event, guestContactIdsExisting = undefined } = defineProps<{
  event: Pick<EventItemFragment, 'rowId'>
  guestContactIdsExisting?: string[]
}>()

const emit = defineEmits<{
  submitSuccess: []
}>()

const store = useStore()
const localePath = useLocalePath()
const { t } = useI18n()

// data
const after = ref<string | null>()

// api data
const allContactsQuery = useAllContactsQuery(
  computed(() => ({
    after: after.value,
    createdBy: store.signedInAccountId,
    first: ITEMS_PER_PAGE_LARGE,
  })),
)
const createGuestMutation = useCreateGuestsMutation()
const apiData = await useApiData([allContactsQuery, createGuestMutation])
const contacts = computed(
  () =>
    apiData.value.data.allContacts?.nodes
      .map((x) => getContactItem(x))
      .filter(isNeitherNullNorUndefined) || [],
)

// form
const formSchema = z.object({
  contactIds: z.array(z.string()).min(1),
  searchString: z.string(),
})

const form = useForm({
  defaultValues: {
    contactIds: [] as string[],
    searchString: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const successIds: string[] = []

    try {
      const result = await createGuestMutation.executeMutation({
        createGuestsInput: {
          contactIds: value.contactIds,
          eventId: event.rowId,
        },
      })

      if (!result.data) {
        throw new Error('No data!')
      }

      if (!result.error) {
        successIds.push(...value.contactIds)
      }
    } catch (error) {
      console.error(error)
      return
    } finally {
      if (successIds.length) {
        const currentIds = form.getFieldValue('contactIds')
        form.setFieldValue(
          'contactIds',
          currentIds.filter((id) => !successIds.includes(id)),
        )
      }
    }

    emit('submitSuccess')
  },
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}

// methods
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectToggle = (contactId: string, field: any) => {
  const currentIds = field.state.value as string[]
  const index = currentIds.indexOf(contactId)

  if (index === -1) {
    field.handleChange([...currentIds, contactId])
  } else {
    field.handleChange(currentIds.filter((_: string, i: number) => i !== index))
  }
}

// computations
const searchString = computed(() => form.getFieldValue('searchString'))
const contactsFiltered = computed(() => {
  if (!contacts.value) {
    return undefined
  }

  if (!searchString.value || searchString.value === '') {
    return contacts.value
  }

  const searchStringParts = searchString.value.split(' ')
  const allContactsFiltered = contacts.value.filter((contact) => {
    const contactProperties = [
      ...(contact.firstName ? [contact.firstName.toLowerCase()] : []),
      ...(contact.lastName ? [contact.lastName.toLowerCase()] : []),
    ]

    for (const contactProperty of contactProperties) {
      for (const searchStringPart of searchStringParts) {
        if (contactProperty.includes(searchStringPart.toLowerCase())) {
          return true
        }
      }
    }

    return false
  })

  return allContactsFiltered
})

const errorMessages = computed(() =>
  apiData.value.errors
    ? getCombinedErrorMessages(apiData.value.errors)
    : undefined,
)
</script>

<i18n lang="yaml">
de:
  buttonContact: Ein Kontakt
  contact: Kontakt
  contactsAdd: Zu meinem Kontaktbuch
  formHint: Wähle aus Kontakten deines Kontaktbuchs.
  placeholderContact: Max Mustermann
  select: Zur Gästeliste hinzufügen
en:
  buttonContact: A contact
  contact: Contact
  contactsAdd: To my contact book
  formHint: Choose from contacts in your contact book.
  placeholderContact: John Doe
  select: Add to guestlist
</i18n>
