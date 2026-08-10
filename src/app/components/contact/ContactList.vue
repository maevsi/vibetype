<template>
  <Loader :api>
    <div class="flex flex-col gap-4">
      <AppScrollContainer
        v-if="contacts"
        class="max-h-[70vh]"
        :has-next-page="!!api.data.allContacts?.pageInfo.hasNextPage"
        @load-more="after = api.data.allContacts?.pageInfo.endCursor"
      >
        <LayoutTable>
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
              v-for="contact in contacts"
              :id="contact.rowId"
              :key="contact.rowId"
              :contact
              :is-editing="pending.edits.includes(contact.rowId)"
              @delete="onDeleteSelect(contact)"
              @edit="edit(contact)"
            />
          </LayoutTbody>
        </LayoutTable>
      </AppScrollContainer>
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
      <ContactDeleteDrawer
        v-if="contactToDelete"
        v-model:open="isDeleteDrawerOpen"
        :contact="contactToDelete"
        :contact-row-id="contactToDelete.rowId"
      />
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

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
const contactToDelete =
  ref<
    Pick<
      ContactItemFragment,
      | 'accountByAccountId'
      | 'accountId'
      | 'firstName'
      | 'lastName'
      | 'nickname'
      | 'rowId'
    >
  >()
const formContactHeading = ref<string>()
const isDeleteDrawerOpen = ref(false)
const isModalContactOpen = ref<boolean>()
const pending = reactive({
  edits: ref<string[]>([]),
})
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
const api = await useApiData([contactsQuery])
const contacts = computed(
  () =>
    api.value.data.allContacts?.nodes
      .map((x) => getContactItem(x))
      .filter(isNeitherNullNorUndefined) || [],
)

// methods
const add = () => {
  contactsQuery.pause()
  formContactHeading.value = t('contactAdd')
  selectedContact.value = undefined
  isModalContactOpen.value = true
}
const onDeleteSelect = (
  contact: Pick<
    ContactItemFragment,
    | 'accountByAccountId'
    | 'accountId'
    | 'firstName'
    | 'lastName'
    | 'nickname'
    | 'rowId'
  >,
) => {
  contactToDelete.value = contact
  isDeleteDrawerOpen.value = true
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
  phoneNumber: Telefonnummer
  url: Webseite
en:
  # address: Address
  contact: Contact
  contactAdd: Add contact
  contactEdit: Kontakt bearbeiten
  emailAddress: Email address
  phoneNumber: Phone number
  url: Website
</i18n>
