<template>
  <div v-if="event" class="flex min-h-0 flex-1 flex-col">
    <form
      class="flex min-h-0 flex-1 flex-col gap-4"
      novalidate
      @submit.prevent="form.handleSubmit"
    >
      <Field>
        <FieldLabel for="input-contact-id">
          {{ t('contactBookSearch') }}
        </FieldLabel>
        <FieldContent>
          <div class="relative">
            <AppIconMagnifyingGlass
              class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              id="input-contact-id"
              class="pl-9"
              :model-value="searchString"
              :placeholder="t('placeholderContact')"
              type="text"
              @input="searchString = ($event.target as HTMLInputElement).value"
            />
          </div>
        </FieldContent>
        <FieldDescription>
          {{ t('contactBookSearchDescription') }}
        </FieldDescription>
      </Field>
      <form.Field v-slot="{ field }" name="contactIds">
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
        <div
          v-if="contacts"
          class="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto"
        >
          <div
            v-if="allContactsQuery.fetching.value"
            class="flex justify-center"
          >
            <LoaderIndicatorSpinner />
          </div>
          <AppButton
            v-if="contactCreationCandidate"
            :aria-label="t('contactCreate')"
            class="flex w-full shrink-0 items-center gap-4 rounded-sm border-2 border-dashed border-neutral-300 px-4 py-2 dark:border-neutral-600"
            :loading="createContactMutation.fetching.value"
            type="button"
            @click="contactCreate()"
          >
            <AccountProfilePicture
              v-if="contactCreationCandidate.accountId"
              :account-id="contactCreationCandidate.accountId"
              class="size-12 rounded-full"
              height="48"
              width="48"
            />
            <ContactAvatar
              v-else
              classes="rounded-full size-12"
              :email-address="contactCreationCandidate.emailAddress"
              size="48"
            />
            <div class="flex min-w-0 flex-col items-start">
              <span class="truncate font-medium">
                {{
                  contactCreationCandidate.emailAddress ||
                  `@${contactCreationCandidate.username}`
                }}
              </span>
              <span class="text-gray-500 dark:text-gray-400">
                {{ t('contactCreate') }}
              </span>
            </div>
            <AppIconPlus class="ml-auto shrink-0" />
          </AppButton>
          <AppButton
            v-for="contact in contactsFiltered"
            :key="contact.rowId"
            :aria-label="t('buttonContact')"
            class="flex w-full shrink-0 items-center gap-4 rounded-sm border-2 border-neutral-300 px-4 py-2 dark:border-neutral-600"
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
          <div
            v-if="apiData.data.allContacts?.pageInfo.hasNextPage"
            class="flex justify-center"
          >
            <ButtonColored
              :aria-label="t('globalShowMore')"
              @click="after = apiData.data.allContacts?.pageInfo.endCursor"
            >
              {{ t('globalShowMore') }}
            </ButtonColored>
          </div>
        </div>
      </form.Field>
      <div class="flex flex-col items-center">
        <ButtonText :aria-label="t('contactsAdd')" :to="localePath('contact')">
          {{ t('contactsAdd') }}
          <template #suffix>
            <AppIconArrowRight />
          </template>
        </ButtonText>
      </div>
      <div class="flex flex-col items-center">
        <ButtonColored
          :aria-label="t('select')"
          class="w-full"
          :loading="createGuestsMutation.fetching.value"
          type="submit"
        >
          {{ t('select') }}
        </ButtonColored>
      </div>
      <CardStateAlert v-if="errorMessages?.length">
        <AppSpanList :span="errorMessages" />
      </CardStateAlert>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import type { AnyFieldApi } from '@tanstack/vue-form'
import { useMutation, useQuery } from '@urql/vue'
import { refDebounced } from '@vueuse/core'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'
import type {
  AllContactsQueryVariables,
  EventItemFragment,
} from '~~/gql/generated/graphql'
import {
  getContactCreationCandidate,
  getContactItem,
} from '~~/shared/utils/contact'

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
const searchString = ref('')
const searchStringDebounced = refDebounced(searchString, 300)
const searchStringTrimmed = computed(() => searchStringDebounced.value.trim())
const emailAddressSearched = computed(() =>
  SCHEMA_EMAIL_ADDRESS_REQUIRED.safeParse(searchStringTrimmed.value).success
    ? searchStringTrimmed.value
    : undefined,
)
const usernameSearched = computed(() =>
  SCHEMA_USERNAME_REQUIRED.safeParse(searchStringTrimmed.value).success
    ? searchStringTrimmed.value
    : undefined,
)

// api data
const allContactsQuery = useQuery({
  query: graphql(`
    query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {
      allContacts(
        after: $after
        condition: { createdBy: $createdBy }
        first: $first
        orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]
      ) {
        nodes {
          ...ContactItem
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
      }
    }
  `),
  variables: computed<AllContactsQueryVariables>(() => ({
    after: after.value,
    createdBy: store.signedInAccountId,
    first: ITEMS_PER_PAGE_LARGE,
  })),
})
const accountByUsernameSearchQuery = useQuery({
  query: accountByUsernameQuery,
  pause: computed(() => !usernameSearched.value),
  variables: computed(() => ({ username: usernameSearched.value || '' })),
})
const createContactMutation = useMutation(
  graphql(`
    mutation CreateGuestContact($input: CreateContactInput!) {
      createContact(input: $input) {
        contact {
          ...ContactItem
        }
      }
    }
  `),
)
const createGuestsMutation = useMutation(
  graphql(`
    mutation CreateGuests($createGuestsInput: CreateGuestsInput!) {
      createGuests(input: $createGuestsInput) {
        result {
          id
          rowId
        }
      }
    }
  `),
)
const apiData = await useApiData([
  allContactsQuery,
  createContactMutation,
  createGuestsMutation,
])
const contacts = computed(
  () =>
    apiData.value.data.allContacts?.nodes
      .map((x) => getContactItem(x))
      .filter(isNeitherNullNorUndefined) || [],
)

// form
const formSchema = z.object({
  contactIds: z.array(z.string()).min(1),
})

const form = useForm({
  defaultValues: {
    contactIds: [] as string[],
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const successIds: string[] = []

    try {
      const result = await createGuestsMutation.executeMutation({
        createGuestsInput: {
          contactIds: value.contactIds,
          eventId: event.rowId,
        },
      })

      if (!getResultData(result)) {
        throw new Error('No data!')
      }

      successIds.push(...value.contactIds)
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

// methods
const contactCreate = async () => {
  const candidate = contactCreationCandidate.value

  if (!candidate || !store.signedInAccountId) return

  const result = await createContactMutation.executeMutation({
    input: {
      contact: {
        accountId: candidate.accountId || null,
        createdBy: store.signedInAccountId,
        emailAddress: candidate.emailAddress || null,
      },
    },
  })
  const contactCreated = getContactItem(
    getResultData(result)?.createContact?.contact,
  )

  if (!contactCreated) return

  form.setFieldValue('contactIds', [
    ...form.getFieldValue('contactIds'),
    contactCreated.rowId,
  ])

  // The cache invalidation of `createContact` leaves this list unchanged, so the contacts are fetched again to let the new one take the offer's place.
  // The search string stays as it is, which keeps that contact in view since the list matches usernames and email addresses too.
  after.value = undefined
  allContactsQuery.executeQuery({ requestPolicy: 'network-only' })
}
const selectToggle = (contactId: string, field: AnyFieldApi) => {
  const currentIds = field.state.value as string[]
  const index = currentIds.indexOf(contactId)

  if (index === -1) {
    field.handleChange([...currentIds, contactId])
  } else {
    field.handleChange(currentIds.filter((_: string, i: number) => i !== index))
  }
}

// computations
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
      ...(contact.accountByAccountId?.username
        ? [contact.accountByAccountId.username.toLowerCase()]
        : []),
      ...(contact.emailAddress ? [contact.emailAddress.toLowerCase()] : []),
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

const accountSearched = computed(() => {
  const username = usernameSearched.value

  // Results of an outdated search must not be shown for the current one.
  if (
    !username ||
    accountByUsernameSearchQuery.operation.value?.variables.username !==
      username
  ) {
    return undefined
  }

  return accountByUsernameSearchQuery.data.value?.accountByUsername
})
const contactCreationCandidate = computed(() =>
  getContactCreationCandidate({
    accountId: accountSearched.value?.rowId,
    contacts: contacts.value,
    emailAddress: emailAddressSearched.value,
    username: usernameSearched.value,
  }),
)
const errorMessages = computed(() =>
  apiData.value.errors
    ? getCombinedErrorMessages(apiData.value.errors, {
        postgres23505: t('contactExisting'),
      })
    : undefined,
)
</script>

<i18n lang="yaml">
de:
  buttonContact: Ein Kontakt
  contactBookSearch: Kontaktbuch durchsuchen
  contactBookSearchDescription: Gib einen Nutzernamen oder eine E-Mail-Adresse ein, um jemanden hinzuzufügen, der noch nicht in deinem Kontaktbuch steht.
  contactCreate: Zum Kontaktbuch hinzufügen
  contactExisting: Ein Kontakt für dieses Konto existiert bereits!
  contactsAdd: Zu meinem Kontaktbuch
  placeholderContact: Max Mustermann
  select: Zur Gästeliste hinzufügen
en:
  buttonContact: A contact
  contactBookSearch: Search your contact book
  contactBookSearchDescription: Enter a username or an email address to add someone who is not in your contact book yet.
  contactCreate: Add to contact book
  contactExisting: A contact for this account already exists!
  contactsAdd: To my contact book
  placeholderContact: John Doe
  select: Add to guest list
</i18n>
