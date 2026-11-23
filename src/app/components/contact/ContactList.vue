<template>
  <Loader :api>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <AppInputSearch
          v-if="contacts.length"
          v-model="searchString"
          class="flex-1"
        />
        <template v-if="contacts.length">
          <AppButton :aria-label="t('contactAdd')" @click="add">
            {{ t('contactAdd') }}
            <template #prefix>
              <AppIconPlus />
            </template>
          </AppButton>
          <AppButton
            :aria-label="t('contactImport')"
            :to="localePath('contact-import')"
            variant="secondary"
          >
            {{ t('contactImport') }}
          </AppButton>
        </template>
      </div>
      <AppTable v-if="contactsFiltered.length">
        <AppTableHeader>
          <tr>
            <AppTableHead scope="col">
              {{ t('contact') }}
            </AppTableHead>
            <AppTableHead class="hidden xl:table-cell" scope="col">
              {{ t('emailAddress') }}
            </AppTableHead>
            <!-- <AppTableHead class="hidden xl:table-cell" scope="col">
              {{ t('address') }}
            </AppTableHead> -->
            <AppTableHead class="hidden xl:table-cell" scope="col">
              {{ t('phoneNumber') }}
            </AppTableHead>
            <AppTableHead class="hidden xl:table-cell" scope="col">
              {{ t('url') }}
            </AppTableHead>
            <AppTableHead scope="col" />
          </tr>
        </AppTableHeader>
        <AppTableBody>
          <ContactListItem
            v-for="contact in contactsFiltered"
            :id="contact.rowId"
            :key="contact.rowId"
            :contact
            @delete="onDeleteSelect(contact)"
            @edit="edit(contact)"
          />
        </AppTableBody>
      </AppTable>
      <AppEmptyState
        v-else-if="contacts.length"
        :description="t('searchEmptyDescription')"
        :title="t('searchEmptyTitle', { query: searchString.trim() })"
      >
        <AppButton :aria-label="t('searchClear')" @click="searchString = ''">
          {{ t('searchClear') }}
        </AppButton>
      </AppEmptyState>
      <AppEmptyState
        v-else
        :description="t('emptyDescription')"
        :title="t('emptyTitle')"
      >
        <template #icon><AppIconContacts /></template>
        <AppButton :aria-label="t('contactAdd')" @click="add">
          {{ t('contactAdd') }}
          <template #prefix>
            <AppIconPlus />
          </template>
        </AppButton>
        <AppButton
          :aria-label="t('contactImport')"
          :to="localePath('contact-import')"
          variant="secondary"
        >
          {{ t('contactImport') }}
        </AppButton>
      </AppEmptyState>
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
import { graphql } from '~~/gql/generated'
import type {
  AllContactsQueryVariables,
  ContactItemFragment,
} from '~~/gql/generated/graphql'
import { getContactItem, getContactsSorted } from '~~/shared/utils/contact'

const localePath = useLocalePath()
const route = useRoute()
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
const isDeleteDrawerOpen = ref(false)
const searchString = ref<string>('')

// api data
const contactsQuery = useApiQuery({
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
const api = await useApiData([contactsQuery])
const contacts = computed(() =>
  getContactsSorted(
    api.value.data.allContacts?.nodes
      .map((x) => getContactItem(x))
      .filter(isNeitherNullNorUndefined) || [],
  ),
)
const contactsFiltered = computed(() => {
  const normalizedSearch = searchString.value.toLowerCase().trim()
  if (!normalizedSearch) return contacts.value

  const searchStringParts = normalizedSearch.split(/\s+/).filter(Boolean)
  return contacts.value.filter((contact) => {
    const contactProperties = [
      ...(contact.accountByAccountId?.username
        ? [contact.accountByAccountId.username.toLowerCase()]
        : []),
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
const add = () =>
  navigateTo(
    localePath({ name: 'contact-create', query: { redirect: route.fullPath } }),
  )
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
}
const edit = (contact: Pick<ContactItemFragment, 'rowId'>) =>
  navigateTo(
    localePath({
      name: 'contact-edit-id',
      params: { id: contact.rowId },
      query: { redirect: route.fullPath },
    }),
  )

// lifecycle
watch(
  () => api.value.data.allContacts?.pageInfo,
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
  # address: Adresse
  contact: Kontakt
  contactAdd: Kontakt hinzufügen
  contactImport: Kontakte importieren
  emailAddress: E-Mail Adresse
  emptyDescription: Speichere die Menschen, die Du triffst, um sie mit einem Fingertipp zu Veranstaltungen einzuladen.
  emptyTitle: Dein Kontaktbuch ist leer
  phoneNumber: Telefonnummer
  searchClear: Suche zurücksetzen
  searchEmptyDescription: Prüfe die Schreibweise oder suche stattdessen nach der E-Mail-Adresse.
  searchEmptyTitle: Kein Kontakt passt zu „{query}“
  url: Webseite
en:
  # address: Address
  contact: Contact
  contactAdd: Add contact
  contactImport: Import contacts
  emailAddress: Email address
  emptyDescription: Save the people you meet so you can invite them to events with one tap.
  emptyTitle: Your contact book is empty
  phoneNumber: Phone number
  searchClear: Clear search
  searchEmptyDescription: Check the spelling or search by email address instead.
  searchEmptyTitle: 'No contact matches "{query}"'
  url: Website
</i18n>
