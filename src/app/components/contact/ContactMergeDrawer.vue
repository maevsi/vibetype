<template>
  <AppDrawer v-model="isOpen">
    <template #title>{{ t('title') }}</template>
    <template #description>{{ t('description') }}</template>
    <div class="flex flex-col gap-4 pb-4">
      <template v-if="!contactMerged">
        <p class="text-body text-fg-2">{{ t('description') }}</p>
        <AppInputSearch v-model="searchString" />
        <AppRadioGroup
          v-if="candidateItems.length"
          v-model="contactIdMerged"
          :aria-label="t('contactChoose')"
          :items="candidateItems"
        />
        <p v-else class="text-body text-fg-2">{{ t('candidatesEmpty') }}</p>
      </template>
      <template v-else>
        <AppButton
          :aria-label="t('back')"
          class="self-start"
          size="none"
          variant="tertiary"
          @click="contactIdMerged = undefined"
        >
          <template #prefix><AppIconArrowLeft /></template>
          {{ t('back') }}
        </AppButton>
        <p class="text-body text-fg-2">
          {{
            t('mergeInto', {
              merged: getName(contactMerged),
              kept: getName(contact),
            })
          }}
        </p>
        <AppRadioGroup
          v-for="field in conflicts"
          :key="field"
          v-model="choices[field]"
          :items="getConflictItems(field)"
        >
          <template #legend>{{ fieldLabels[field] }}</template>
        </AppRadioGroup>
        <div v-if="emailAddressesCombined.length" class="flex flex-col gap-2">
          <AppCheckboxGroup
            v-model="emailAddresses"
            :items="
              emailAddressesCombined.map((emailAddress) => ({
                label: emailAddress,
                value: emailAddress,
              }))
            "
          >
            <template #legend>{{ t('emailAddresses') }}</template>
          </AppCheckboxGroup>
          <p
            v-if="!isEmailAddressesValid"
            class="text-fg-error text-body-small"
          >
            {{ t('emailAddressesInvalid') }}
          </p>
        </div>
      </template>
    </div>
    <template v-if="contactMerged" #footer>
      <AppButton
        :aria-label="t('merge')"
        :disabled="!isEmailAddressesValid"
        :loading="contactMergeMutation.fetching.value"
        @click="onConfirm"
      >
        {{ t('merge') }}
      </AppButton>
      <AppButton
        :aria-label="t('cancel')"
        variant="secondary"
        @click="isOpen = false"
      >
        {{ t('cancel') }}
      </AppButton>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { ContactItemFragment, Language } from '~~/gql/generated/graphql'
import { getContactsSorted } from '~~/shared/utils/contact'
import {
  getContactMergeConflicts,
  getContactMergeEmailAddresses,
  getContactMergeInput,
  isContactMergeCandidate,
} from '~~/shared/utils/contactMerge'
import type {
  ContactMergeChoices,
  ContactMergeField,
} from '~~/shared/utils/contactMerge'
import { getContactName } from '~~/shared/utils/model'

type ContactMergeDrawerContact = Pick<
  ContactItemFragment,
  | 'accountByAccountId'
  | 'accountId'
  | 'createdBy'
  | 'emailAddresses'
  | 'firstName'
  | 'lastName'
  | 'nickname'
  | 'note'
  | 'phoneNumber'
  | 'rowId'
  | 'url'
> & {
  addressId?: string | null
  language?: Language | null
  timeZone?: string | null
}

const EMAIL_ADDRESSES_MAXIMUM = 10 // the `contact` table's limit

const { contact, contacts } = defineProps<{
  contact: ContactMergeDrawerContact
  contacts: ContactMergeDrawerContact[]
}>()
const emit = defineEmits<{
  success: []
}>()

const { t } = useI18n()
const alertErrorDetails = useAlertErrorDetails()
const store = useStore()

// data
const choices = ref<ContactMergeChoices>({})
const contactIdMerged = ref<string>()
const emailAddresses = ref<string[]>([])
const isOpen = defineModel<boolean>('open')
const searchString = ref('')

// api data
const contactMergeMutation = useMutation(
  graphql(`
    mutation ContactMerge($input: ContactMergeInput!) {
      contactMerge(input: $input) {
        result {
          id
          rowId
        }
      }
    }
  `),
)

// methods
const getName = (item: ContactMergeDrawerContact) =>
  getContactName({ account: item.accountByAccountId, contact: item }) ||
  item.emailAddresses?.[0] ||
  t('unnamed')
const fieldLabels: Record<ContactMergeField, string> = {
  firstName: t('fieldFirstName'),
  lastName: t('fieldLastName'),
  nickname: t('fieldNickname'),
  note: t('fieldNote'),
  phoneNumber: t('fieldPhoneNumber'),
  url: t('fieldUrl'),
}
const getConflictItems = (field: ContactMergeField) => [
  { label: String(contact[field]), value: 'kept' },
  { label: String(contactMerged.value?.[field]), value: 'merged' },
]
const onConfirm = async () => {
  if (!contactMerged.value) return

  const result = await contactMergeMutation.executeMutation({
    input: {
      contact: getContactMergeInput({
        choices: choices.value,
        // the checkbox model holds the addresses in the order they were checked, which must not pick the primary address
        emailAddresses: emailAddressesCombined.value.filter((emailAddress) =>
          emailAddresses.value.includes(emailAddress),
        ),
        kept: contact,
        merged: contactMerged.value,
      }),
      contactId: contact.rowId,
      contactIdMerged: contactMerged.value.rowId,
    },
  })

  if (result.error) {
    alertErrorDetails({
      errors: [result.error],
      postgresErrorMap: {
        postgresVTCMA: t('errorAccounts'),
        postgresVTCMG: t('errorGuests'),
        postgresVTCMN: t('errorNotAllowed'),
        postgresVTCMS: t('errorSelf'),
        postgresVTCMV: t('errorInvalid'),
      },
    })
    return
  }

  if (!getResultData(result)) return

  toast.success(t('success'))
  isOpen.value = false
  emit('success')
}

// computations
const candidateItems = computed(() => {
  const searchStringParts = searchString.value
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)

  return getContactsSorted(
    contacts.filter((other) =>
      isContactMergeCandidate(contact, other, store.signedInAccountId),
    ),
  )
    .filter((other) => {
      const properties = [getName(other), ...(other.emailAddresses ?? [])].map(
        (property) => property?.toLowerCase() ?? '',
      )

      return (
        !searchStringParts.length ||
        searchStringParts.some((part) =>
          properties.some((property) => property.includes(part)),
        )
      )
    })
    .map((other) => ({
      description: other.emailAddresses?.join(', ') || undefined,
      label: getName(other),
      value: other.rowId,
    }))
})
const conflicts = computed(() =>
  contactMerged.value
    ? getContactMergeConflicts(contact, contactMerged.value)
    : [],
)
const contactMerged = computed(() =>
  contacts.find(({ rowId }) => rowId === contactIdMerged.value),
)
const emailAddressesCombined = computed(() =>
  contactMerged.value
    ? getContactMergeEmailAddresses(contact, contactMerged.value)
    : [],
)
const isEmailAddressesValid = computed(
  () =>
    !emailAddressesCombined.value.length ||
    (emailAddresses.value.length >= 1 &&
      emailAddresses.value.length <= EMAIL_ADDRESSES_MAXIMUM),
)

// lifecycle
watch(contactMerged, () => {
  choices.value = {}
  emailAddresses.value = [...emailAddressesCombined.value]
})
watch(isOpen, (value) => {
  if (!value) return

  contactIdMerged.value = undefined
  searchString.value = ''
})
</script>

<i18n lang="yaml">
de:
  back: Zurück
  cancel: Abbrechen
  candidatesEmpty: Es gibt keinen Kontakt, mit dem dieser Kontakt zusammengeführt werden kann.
  contactChoose: Kontakt zum Zusammenführen
  description: Wähle einen Kontakt aus. Seine Veranstaltungen, Check-ins und Gruppen gehen auf diesen Kontakt über, danach wird der gewählte Kontakt gelöscht.
  emailAddresses: E-Mail-Adressen
  emailAddressesInvalid: Wähle mindestens 1 und höchstens 10 E-Mail-Adressen.
  errorAccounts: Die Kontakte gehören zu verschiedenen Accounts und können nicht zusammengeführt werden.
  errorGuests: Beide Kontakte sind zur selben Veranstaltung eingeladen und können nicht zusammengeführt werden.
  errorInvalid: Die gewählten Werte sind für den Kontakt nicht zulässig.
  errorNotAllowed: Du kannst nur Deine eigenen, voneinander verschiedenen Kontakte zusammenführen.
  errorSelf: Der Kontakt Deines eigenen Accounts kann nicht zusammengeführt werden.
  fieldFirstName: Vorname
  fieldLastName: Nachname
  fieldNickname: Spitzname
  fieldNote: Notiz
  fieldPhoneNumber: Telefonnummer
  fieldUrl: Webseite
  merge: Zusammenführen
  mergeInto: '{merged} wird mit {kept} zusammengeführt. Wähle bei abweichenden Angaben, welche übernommen werden.'
  success: Die Kontakte wurden zusammengeführt.
  title: Kontakt zusammenführen
  unnamed: Ohne Namen
en:
  back: Back
  cancel: Cancel
  candidatesEmpty: There is no contact this contact can be merged with.
  contactChoose: Contact to merge
  description: Choose a contact. Its events, check-ins and groups move to this contact, then the chosen contact is deleted.
  emailAddresses: Email addresses
  emailAddressesInvalid: Choose at least 1 and at most 10 email addresses.
  errorAccounts: The contacts belong to different accounts and cannot be merged.
  errorGuests: Both contacts are invited to the same event and cannot be merged.
  errorInvalid: The chosen values are not valid for the contact.
  errorNotAllowed: You can only merge two different contacts of your own.
  errorSelf: The contact of your own account cannot be merged.
  fieldFirstName: First name
  fieldLastName: Last name
  fieldNickname: Nickname
  fieldNote: Note
  fieldPhoneNumber: Phone number
  fieldUrl: Website
  merge: Merge
  mergeInto: '{merged} is merged into {kept}. Where the details differ, choose which ones to keep.'
  success: The contacts were merged.
  title: Merge contact
  unnamed: Unnamed
</i18n>
