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
          <AppButton
            :aria-label="t('contactAdd')"
            class="shrink-0 whitespace-nowrap"
            @click="add"
          >
            {{ t('contactAdd') }}
            <template #prefix>
              <AppIconPlus />
            </template>
          </AppButton>
          <AppButton
            :aria-label="t('contactImport')"
            class="shrink-0 whitespace-nowrap"
            :to="localePath('contact-import')"
            variant="secondary"
          >
            {{ t('contactImport') }}
          </AppButton>
        </template>
      </div>
      <div
        v-if="contacts.length && contactGroups.length"
        class="flex flex-wrap items-center gap-2"
      >
        <ContactGroupFilter
          v-model:excluded="groupIdsExcluded"
          v-model:included="groupIdsIncluded"
          :groups="contactGroups"
        />
        <AppButton
          :aria-label="t('groupsManage')"
          class="h-10 px-2 font-medium"
          size="none"
          variant="tertiary"
          @click="isGroupsDrawerOpen = true"
        >
          {{ t('groupsManage') }}
        </AppButton>
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
            <AppTableHead scope="col">
              <span class="sr-only">{{ t('actions') }}</span>
            </AppTableHead>
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
        :title="
          searchString.trim()
            ? t('searchEmptyTitle', { query: searchString.trim() })
            : t('filterEmptyTitle')
        "
      >
        <AppButton :aria-label="t('searchClear')" @click="searchClear">
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
      <ContactGroupDrawer
        v-model:open="isGroupsDrawerOpen"
        :groups="contactGroups"
      />
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
import { getContactsByGroupFilter } from '~~/shared/utils/contactGroup'

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
const groupIdsExcluded = ref<string[]>([])
const groupIdsIncluded = ref<string[]>([])
const isDeleteDrawerOpen = ref(false)
const isGroupsDrawerOpen = ref(false)
const searchString = ref<string>('')

// api data
const { contactGroups, query: contactGroupsQuery } = useContactGroupsQuery()
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
          contactGroupMembersByContactId {
            nodes {
              contactGroupId
            }
          }
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
const api = await useApiData([contactGroupsQuery, contactsQuery])
const contacts = computed(() =>
  getContactsSorted(
    api.value.data.allContacts?.nodes
      .map((x) => getContactItem(x))
      .filter(isNeitherNullNorUndefined) || [],
  ),
)
const groupIdsByContactId = computed(() => {
  const groupIds = new Map<string, string[]>()

  for (const node of api.value.data.allContacts?.nodes ?? []) {
    const contact = getContactItem(node)

    if (contact)
      groupIds.set(
        contact.rowId,
        node.contactGroupMembersByContactId.nodes.map(
          ({ contactGroupId }) => contactGroupId,
        ),
      )
  }

  return groupIds
})
const contactsFiltered = computed(() => {
  const contactsInGroups = getContactsByGroupFilter({
    contacts: contacts.value,
    groupIdsByContactId: groupIdsByContactId.value,
    groupIdsExcluded: groupIdsExcluded.value,
    groupIdsIncluded: groupIdsIncluded.value,
  })
  const normalizedSearch = searchString.value.toLowerCase().trim()
  if (!normalizedSearch) return contactsInGroups

  const searchStringParts = normalizedSearch.split(/\s+/).filter(Boolean)
  return contactsInGroups.filter((contact) => {
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

const searchClear = () => {
  groupIdsExcluded.value = []
  groupIdsIncluded.value = []
  searchString.value = ''
}

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
  actions: Aktionen
  contact: Kontakt
  contactAdd: Kontakt hinzufügen
  contactImport: Kontakte importieren
  emailAddress: E-Mail Adresse
  emptyDescription: Speichere die Menschen, die Du triffst, um sie mit einem Fingertipp zu Veranstaltungen einzuladen.
  emptyTitle: Dein Kontaktbuch ist leer
  filterEmptyTitle: Kein Kontakt passt zu den gewählten Gruppen
  groupsManage: Gruppen verwalten
  phoneNumber: Telefonnummer
  searchClear: Suche und Filter zurücksetzen
  searchEmptyDescription: Prüfe die Schreibweise oder suche stattdessen nach der E-Mail-Adresse.
  searchEmptyTitle: Kein Kontakt passt zu „{query}“
  url: Webseite
en:
  # address: Address
  actions: Actions
  contact: Contact
  contactAdd: Add contact
  contactImport: Import contacts
  emailAddress: Email address
  emptyDescription: Save the people you meet so you can invite them to events with one tap.
  emptyTitle: Your contact book is empty
  filterEmptyTitle: No contact matches the chosen groups
  groupsManage: Manage groups
  phoneNumber: Phone number
  searchClear: Clear search and filters
  searchEmptyDescription: Check the spelling or search by email address instead.
  searchEmptyTitle: 'No contact matches "{query}"'
  url: Website
</i18n>
