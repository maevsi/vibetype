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
              class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
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
            <AppSpinner class="size-8" />
          </div>
          <AppButton
            v-if="contactCreationCandidate"
            :aria-label="t('contactCreate')"
            class="flex w-full shrink-0 items-center gap-4 rounded-small border-2 border-dashed border-line px-4 py-2"
            :loading="createContactMutation.fetching.value"
            size="none"
            type="button"
            variant="ghost"
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
              class="size-12 rounded-full"
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
              <span class="text-fg-2">
                {{ t('contactCreate') }}
              </span>
            </div>
            <AppIconPlus class="ml-auto shrink-0" />
          </AppButton>
          <AppCheckboxGroup
            :aria-label="t('contactsSelect')"
            class="shrink-0"
            :model-value="[
              ...(guestContactIdsExisting ?? []),
              ...field.state.value,
            ]"
            variant="card"
            @update:model-value="
              (values) =>
                field.handleChange(
                  values
                    .map(String)
                    .filter(
                      (value) => !guestContactIdsExisting?.includes(value),
                    ),
                )
            "
          >
            <AppCheckboxGroupItem
              v-for="contact in contactsFiltered"
              :key="contact.rowId"
              :disabled="guestContactIdsExisting?.includes(contact.rowId)"
              :value="contact.rowId"
            >
              <ContactPreview :contact :is-username-linked="false" />
            </AppCheckboxGroupItem>
          </AppCheckboxGroup>
        </div>
      </form.Field>
      <AppFeature feature="account-management">
        <div class="flex flex-col items-center">
          <AppButton
            :aria-label="t('contactsAdd')"
            class="px-4 py-2 font-medium whitespace-nowrap"
            size="none"
            :to="localePath('contact')"
            variant="ghost"
          >
            {{ t('contactsAdd') }}
            <template #suffix>
              <AppIconArrowRight />
            </template>
          </AppButton>
        </div>
      </AppFeature>
      <FormPrivacyNotice />
      <div class="flex flex-col items-center">
        <AppButton
          :aria-label="isSending ? t('selectAndSend') : t('select')"
          class="w-full"
          :loading="createGuestsMutation.fetching.value"
          type="submit"
        >
          {{ isSending ? t('selectAndSend') : t('select') }}
        </AppButton>
        <p
          v-if="isInvitationSent && !event.isPublished"
          class="mt-2 text-body-small text-fg-2"
        >
          {{ t('disabledReasonDraft') }}
        </p>
      </div>
      <AppAlert v-if="errorMessages?.length" variant="error">
        <AppSpanList :span="errorMessages" />
      </AppAlert>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { useMutation, useQuery } from '@urql/vue'
import { refDebounced } from '@vueuse/core'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'
import type {
  AllContactsQueryVariables,
  ContactItemFragment,
  EventItemFragment,
} from '~~/gql/generated/graphql'
import {
  getContactCreationCandidate,
  getContactItem,
  getContactsSorted,
} from '~~/shared/utils/contact'

const {
  event,
  guestContactIdsExisting = undefined,
  isInvitationSent = false,
} = defineProps<{
  event: Pick<EventItemFragment, 'isPublished' | 'rowId'>
  guestContactIdsExisting?: string[]
  isInvitationSent?: boolean
}>()

const emit = defineEmits<{
  submitSuccess: []
}>()

const store = useStore()
const localePath = useLocalePath()
const { locale, t } = useI18n()

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
const allContactsQuery = useApiQuery({
  query: graphql(`
    query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {
      allContacts(
        after: $after
        condition: { createdBy: $createdBy }
        first: $first
        orderBy: [PRIMARY_KEY_ASC]
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
// Declared here rather than among the other computations because the query below reads it while it is being set up.
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
          contactId
          id
          rowId
        }
      }
    }
  `),
)
const inviteMutation = useMutation(
  graphql(`
    mutation GuestsInvite($input: InviteInput!) {
      invite(input: $input) {
        clientMutationId
      }
    }
  `),
)
const apiData = await useApiData([
  allContactsQuery,
  createContactMutation,
  createGuestsMutation,
  inviteMutation,
])
const contacts = computed(
  () =>
    apiData.value.data.allContacts?.nodes
      .map((x) => getContactItem(x))
      .filter(isNeitherNullNorUndefined) || [],
)
// Contacts without a name sort to the very end of the contact book, far beyond the loaded page, so the ones this form is about are kept at hand separately.
const contactsPinned = ref<ContactItemFragment[]>([])

const isSending = computed(() => isInvitationSent && event.isPublished)

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

      const guestsCreated = getResultData(result)?.createGuests?.result

      if (!guestsCreated) {
        throw new Error('No data!')
      }

      successIds.push(...value.contactIds)

      if (isSending.value) {
        await invite(guestsCreated)
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

// methods
const invite = async (guests: { contactId: string; rowId: string }[]) => {
  // Contacts without an account or an email address cannot receive an invitation, they stay on the guest list.
  const contactIdsReachable = new Set(
    contactsShown.value
      .filter((contact) => contact.accountId || contact.emailAddress)
      .map((contact) => contact.rowId),
  )
  const guestsReachable = guests.filter((guest) =>
    contactIdsReachable.has(guest.contactId),
  )
  const results = await Promise.all(
    guestsReachable.map((guest) =>
      inviteMutation.executeMutation({
        input: { guestId: guest.rowId, language: locale.value },
      }),
    ),
  )
  const sentCount = results.filter((result) => getResultData(result)).length
  const skippedCount = guests.length - guestsReachable.length
  const failedCount = guestsReachable.length - sentCount

  if (sentCount) toast.success(t('sendSuccess', { count: sentCount }))
  if (skippedCount) toast.warning(t('sendSkipped', { count: skippedCount }))
  if (failedCount) toast.error(t('sendFailed', { count: failedCount }))
}
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
  contactsPinned.value = [...contactsPinned.value, contactCreated]
}

// computations
const isContactBookComplete = computed(
  () =>
    !allContactsQuery.fetching.value &&
    !apiData.value.data.allContacts?.pageInfo.hasNextPage,
)
const contactsShown = computed(() => {
  const contactsPinnedIds = new Set(
    contactsPinned.value.map((contact) => contact.rowId),
  )

  return getContactsSorted([
    ...contactsPinned.value,
    ...contacts.value.filter(
      (contact) => !contactsPinnedIds.has(contact.rowId),
    ),
  ])
})
const contactsFiltered = computed(() => {
  if (!searchString.value || searchString.value === '') {
    return contactsShown.value
  }

  const searchStringParts = searchString.value.split(' ')
  const allContactsFiltered = contactsShown.value.filter((contact) => {
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

const contactCreationCandidate = computed(() =>
  // Offering to create a contact before the whole book is known would suggest a duplicate of a contact that is still being loaded.
  isContactBookComplete.value
    ? getContactCreationCandidate({
        accountId: accountSearched.value?.rowId,
        contacts: contactsShown.value,
        emailAddress: emailAddressSearched.value,
        username: usernameSearched.value,
      })
    : undefined,
)
const errorMessages = computed(() =>
  apiData.value.errors
    ? getCombinedErrorMessages(apiData.value.errors, {
        postgres23505: t('contactExisting'),
      })
    : undefined,
)

// lifecycle
watch(
  () => apiData.value.data.allContacts?.pageInfo,
  (pageInfo) => {
    // Sorting and searching happen in the client, which needs every page to be complete.
    if (import.meta.client && pageInfo?.hasNextPage)
      after.value = pageInfo.endCursor
  },
  { immediate: true },
)
</script>

<i18n lang="yaml">
de:
  disabledReasonDraft: Veröffentliche die Veranstaltung, um Einladungen zu verschicken.
  contactBookSearch: Kontaktbuch durchsuchen
  contactBookSearchDescription: Gib einen Nutzernamen oder eine E-Mail-Adresse ein, um jemanden hinzuzufügen, der noch nicht in deinem Kontaktbuch steht.
  contactCreate: Zum Kontaktbuch hinzufügen
  contactExisting: Ein Kontakt für dieses Konto existiert bereits!
  contactsAdd: Zu meinem Kontaktbuch
  contactsSelect: Kontakte auswählen
  placeholderContact: Max Mustermann
  select: Zur Gästeliste hinzufügen
  selectAndSend: Einladung senden
  sendFailed: Eine Einladung konnte nicht versandt werden, der Gast steht aber auf der Gästeliste. | {count} Einladungen konnten nicht versandt werden, die Gäste stehen aber auf der Gästeliste.
  sendSkipped: Einem Kontakt fehlt ein Konto oder eine E-Mail-Adresse, er wurde nur zur Gästeliste hinzugefügt. | Für {count} Kontakte fehlt ein Konto oder eine E-Mail-Adresse, sie wurden nur zur Gästeliste hinzugefügt.
  sendSuccess: Eine Einladung wurde versandt. | {count} Einladungen wurden versandt.
en:
  disabledReasonDraft: Publish the event to send invitations.
  contactBookSearch: Search your contact book
  contactBookSearchDescription: Enter a username or an email address to add someone who is not in your contact book yet.
  contactCreate: Add to contact book
  contactExisting: A contact for this account already exists!
  contactsAdd: To my contact book
  contactsSelect: Select contacts
  placeholderContact: John Doe
  select: Add to guest list
  selectAndSend: Send invitation
  sendFailed: One invitation could not be sent, but the guest is on the guest list. | {count} invitations could not be sent, but the guests are on the guest list.
  sendSkipped: One contact has no account or email address and was only added to the guest list. | {count} contacts have no account or email address and were only added to the guest list.
  sendSuccess: One invitation was sent. | {count} invitations were sent.
</i18n>
