<template>
  <Loader :api>
    <div class="flex flex-col gap-4">
      <FormInputSearch v-if="contacts.length" v-model="searchString" />
      <LayoutTable v-if="contactsFiltered.length">
        <LayoutThead>
          <tr>
            <LayoutTh scope="col">
              {{ t('contact') }}
            </LayoutTh>
            <LayoutTh class="hidden xl:table-cell" scope="col">
              {{ t('emailAddress') }}
            </LayoutTh>
            <!-- <LayoutTh class="hidden xl:table-cell" scope="col">
              {{ t('address') }}
            </LayoutTh> -->
            <LayoutTh class="hidden xl:table-cell" scope="col">
              {{ t('phoneNumber') }}
            </LayoutTh>
            <LayoutTh class="hidden xl:table-cell" scope="col">
              {{ t('url') }}
            </LayoutTh>
            <LayoutTh scope="col" />
          </tr>
        </LayoutThead>
        <LayoutTbody>
          <ContactListItem
            v-for="contact in contactsFiltered"
            :id="contact.rowId"
            :key="contact.rowId"
            :contact
            :is-deleting="pending.deletions.includes(contact.rowId)"
            :is-editing="pending.edits.includes(contact.rowId)"
            @delete="delete_(contact.rowId)"
            @edit="edit(contact)"
          />
        </LayoutTbody>
      </LayoutTable>
      <p v-else class="text-center">
        {{ t('noContactsFound') }}
      </p>
      <div
        v-if="api.data.allContacts?.pageInfo.hasNextPage"
        class="flex justify-center"
      >
        <ButtonColored
          :aria-label="t('globalShowMore')"
          @click="after = api.data.allContacts?.pageInfo.endCursor"
        >
          {{ t('globalShowMore') }}
        </ButtonColored>
      </div>
      <div class="flex justify-center">
        <ButtonColored :aria-label="t('contactAdd')" @click="add()">
          {{ t('contactAdd') }}
          <template #prefix>
            <AppIconPlus />
          </template>
        </ButtonColored>
      </div>
      <Modal
        v-model="isModalContactOpen"
        is-footer-hidden
        @close="onModalContactClose"
      >
        <FormContact
          :contact="selectedContact"
          @submit-success="onContactSubmitSuccess"
        />
        <template #header>
          {{ formContactHeading }}
        </template>
      </Modal>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useMutation, useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type {
  AllContactsQueryVariables,
  ContactItemFragment,
} from '~~/gql/generated/graphql'
import { getContactItem } from '~~/shared/utils/contact'

const { t } = useI18n()
const store = useStore()

// data
const after = ref<string | null>()
const formContactHeading = ref<string>()
const isModalContactOpen = ref<boolean>()
const pending = reactive({
  deletions: ref<string[]>([]),
  edits: ref<string[]>([]),
})
const searchString = ref<string>('')
const selectedContact = ref<
  Pick<
    ContactItemFragment,
    | 'accountByAccountId'
    // | 'addressByAddressId'
    | 'emailAddress'
    | 'firstName'
    | 'id'
    | 'lastName'
    | 'nickname'
    | 'note'
    | 'phoneNumber'
    | 'rowId'
    | 'url'
  >
>()

// api data
const contactsQuery = useQuery({
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
const deleteContactByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteContactByRowId($input: DeleteContactByRowIdInput!) {
      deleteContactByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const api = await useApiData([contactsQuery, deleteContactByRowIdMutation])
const contacts = computed(
  () =>
    api.value.data.allContacts?.nodes
      .map((x) => getContactItem(x))
      .filter(isNeitherNullNorUndefined) || [],
)
const contactsFiltered = computed(() => {
  if (!searchString.value) return contacts.value

  const searchStringParts = searchString.value.toLowerCase().split(' ')

  return contacts.value.filter((contact) => {
    const contactProperties = [
      ...(contact.firstName ? [contact.firstName.toLowerCase()] : []),
      ...(contact.lastName ? [contact.lastName.toLowerCase()] : []),
      ...(contact.emailAddress ? [contact.emailAddress.toLowerCase()] : []),
    ]

    return searchStringParts.some((searchStringPart) =>
      contactProperties.some((contactProperty) =>
        contactProperty.includes(searchStringPart),
      ),
    )
  })
})

// methods
const add = () => {
  contactsQuery.pause()
  formContactHeading.value = t('contactAdd')
  selectedContact.value = undefined
  isModalContactOpen.value = true
}
const delete_ = async (rowId: string) => {
  pending.deletions.push(rowId)
  await deleteContactByRowIdMutation.executeMutation({ input: { rowId } })
  pending.deletions.splice(pending.deletions.indexOf(rowId), 1)
  // TODO: update cache, especially pagination, or reset query (https://github.com/maevsi/vibetype/issues/720)
}
const edit = (
  contact: Pick<
    ContactItemFragment,
    | 'accountByAccountId'
    // | 'addressByAddressId'
    | 'emailAddress'
    | 'firstName'
    | 'id'
    | 'lastName'
    | 'nickname'
    | 'note'
    | 'phoneNumber'
    | 'rowId'
    | 'url'
  >,
) => {
  pending.edits.push(contact.rowId)
  formContactHeading.value = t('contactEdit')
  selectedContact.value = contact
  isModalContactOpen.value = true
}
const onContactSubmitSuccess = () => {
  isModalContactOpen.value = false
  after.value = undefined
  contactsQuery.resume()
}
const onModalContactClose = () => {
  if (!selectedContact.value) return

  pending.edits.splice(pending.edits.indexOf(selectedContact.value.rowId), 1)
}
</script>

<i18n lang="yaml">
de:
  # address: Adresse
  contact: Kontakt
  contactAdd: Kontakt hinzufügen
  contactEdit: Kontakt bearbeiten
  emailAddress: E-Mail Adresse
  noContactsFound: Keine Kontakte gefunden 😕
  phoneNumber: Telefonnummer
  url: Webseite
en:
  # address: Address
  contact: Contact
  contactAdd: Add contact
  contactEdit: Kontakt bearbeiten
  emailAddress: Email address
  noContactsFound: No contacts found 😕
  phoneNumber: Phone number
  url: Website
</i18n>
