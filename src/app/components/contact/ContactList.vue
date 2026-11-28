<template>
  <Loader :api>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <AppInputSearch
          v-if="isComplete && contacts.length"
          v-model="searchString"
          class="flex-1"
        />
        <div v-if="isComplete && contacts.length" class="flex gap-4">
          <AppButton
            :aria-label="t('contactAdd')"
            class="flex-1 whitespace-nowrap sm:flex-none"
            @click="add"
          >
            {{ t('contactAdd') }}
            <template #prefix>
              <AppIconPlus />
            </template>
          </AppButton>
          <AppButton
            :aria-label="t('contactImport')"
            class="flex-1 whitespace-nowrap sm:flex-none"
            :to="localePath('contact-import')"
            variant="secondary"
          >
            {{ t('contactImport') }}
          </AppButton>
        </div>
      </div>
      <div
        v-if="isComplete && contacts.length && contactGroups.length"
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
      <AppLoaderProgress
        v-if="!isComplete"
        :count="contacts.length"
        :total="api.data.allContacts?.totalCount ?? 0"
      />
      <template v-else-if="contactsFiltered.length">
        <p class="text-body-small text-fg-2">
          {{
            contactsFiltered.length !== contacts.length
              ? t('contactCountFiltered', {
                  count: contactsFiltered.length,
                  total: contacts.length,
                })
              : t('contactCount', contacts.length)
          }}
        </p>
        <section
          v-for="section in contactSections"
          :key="section.title"
          class="flex flex-col"
        >
          <h2 v-if="section.title" class="text-caption text-fg-2 uppercase">
            {{ section.title }}
          </h2>
          <AppList>
            <ContactListItem
              v-for="contact in section.contacts"
              :key="contact.rowId"
              :contact
              :guest-count="contact.guestCount"
              @delete="onDeleteSelect(contact)"
              @merge="onMergeSelect(contact)"
            />
          </AppList>
        </section>
        <div
          v-if="contactsRendered.length < contactsFiltered.length"
          :key="limit"
          ref="sentinel"
        />
      </template>
      <AppEmptyState
        v-else-if="contacts.length"
        :description="t('searchEmptyDescription')"
        :title="
          searchStringDebounced.trim()
            ? t('searchEmptyTitle', { query: searchStringDebounced.trim() })
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
      <ContactMergeDrawer
        v-if="contactToMerge"
        v-model:open="isMergeDrawerOpen"
        :contact="contactToMerge"
        :contacts
      />
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

import { graphql } from '~~/gql/generated'
import type {
  AllContactsContactListQueryVariables,
  ContactItemFragment,
} from '~~/gql/generated/graphql'
import {
  getContactItem,
  getContactSearchText,
  getContactSortKey,
  getContactsSorted,
  isSearchTextMatch,
} from '~~/shared/utils/contact'
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
const isMergeDrawerOpen = ref(false)
const searchString = ref<string>('')
const searchStringDebounced = refDebounced(searchString, 200)

// api data
const { contactGroups, query: contactGroupsQuery } = useContactGroupsQuery()
const contactsQuery = useApiQuery({
  query: graphql(`
    query AllContactsContactList(
      $after: Cursor
      $createdBy: UUID
      $first: Int!
    ) {
      allContacts(
        after: $after
        condition: { createdBy: $createdBy }
        first: $first
        orderBy: [PRIMARY_KEY_ASC]
      ) {
        nodes {
          ...ContactItem
          addressId
          language
          timeZone
          contactGroupMembersByContactId {
            nodes {
              contactGroupId
            }
          }
          guestsByContactId {
            totalCount
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
  variables: computed<AllContactsContactListQueryVariables>(() => ({
    after: after.value,
    createdBy: store.signedInAccountId,
    first: ITEMS_PER_PAGE_LARGE,
  })),
})
const api = await useApiData([contactGroupsQuery, contactsQuery])
const contacts = computed(() =>
  getContactsSorted(
    api.value.data.allContacts?.nodes
      .map((node) => {
        const contact = getContactItem(node)
        return (
          contact && {
            ...contact,
            addressId: node.addressId,
            guestCount: node.guestsByContactId.totalCount,
            language: node.language,
            timeZone: node.timeZone,
          }
        )
      })
      .filter(isNeitherNullNorUndefined) || [],
  ),
)
const contactToMerge = ref<(typeof contacts.value)[number]>()
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
// the search text is built once per data change instead of once per keystroke
const contactsIndexed = computed(() => {
  const contactsInGroups = getContactsByGroupFilter({
    contacts: contacts.value,
    groupIdsByContactId: groupIdsByContactId.value,
    groupIdsExcluded: groupIdsExcluded.value,
    groupIdsIncluded: groupIdsIncluded.value,
  })

  return contactsInGroups.map((contact) => ({
    contact,
    searchText: getContactSearchText(contact),
  }))
})
const contactsFiltered = computed(() =>
  searchStringDebounced.value.trim()
    ? contactsIndexed.value
        .filter(({ searchText }) =>
          isSearchTextMatch(searchText, searchStringDebounced.value),
        )
        .map(({ contact }) => contact)
    : contactsIndexed.value.map(({ contact }) => contact),
)
const { limit, sentinel } = useRenderLimit([
  groupIdsExcluded,
  groupIdsIncluded,
  searchStringDebounced,
])
const contactsRendered = computed(() =>
  contactsFiltered.value.slice(0, limit.value),
)
// search results stay one flat list, as a few matches need no index
const contactSections = computed(() => {
  if (searchStringDebounced.value.trim())
    return [{ contacts: contactsRendered.value, title: '' }]

  const sections: { contacts: typeof contacts.value; title: string }[] = []

  for (const contact of contactsRendered.value) {
    const initial = getContactSortKey(contact)
      .normalize('NFD')
      .charAt(0)
      .toUpperCase()
    const title = /\p{L}/u.test(initial) ? initial : '#'
    const section = sections.at(-1)

    if (section?.title === title) section.contacts.push(contact)
    else sections.push({ contacts: [contact], title })
  }

  return sections
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
const onMergeSelect = (contact: (typeof contacts.value)[number]) => {
  contactToMerge.value = contact
  isMergeDrawerOpen.value = true
}

const searchClear = () => {
  groupIdsExcluded.value = []
  groupIdsIncluded.value = []
  searchString.value = ''
}

// lifecycle
// Sorting and searching happen in the client, which needs every page to be complete.
const isComplete = usePagesAll(
  after,
  () => api.value.data.allContacts?.pageInfo,
)
useRowHighlight('contact', isComplete, (rowId) => {
  const index = contactsFiltered.value.findIndex(
    (contact) => contact.rowId === rowId,
  )
  if (index >= limit.value) limit.value = index + 1
})
</script>

<i18n lang="yaml">
de:
  contactAdd: Kontakt hinzufügen
  contactCount: '{count} Kontakt | {count} Kontakte'
  contactCountFiltered: '{count} von {total}'
  contactImport: Kontakte importieren
  emptyDescription: Speichere die Menschen, die Du triffst, um sie mit einem Fingertipp zu Veranstaltungen einzuladen.
  emptyTitle: Dein Kontaktbuch ist leer
  filterEmptyTitle: Kein Kontakt passt zu den gewählten Gruppen
  groupsManage: Gruppen verwalten
  searchClear: Suche und Filter zurücksetzen
  searchEmptyDescription: Prüfe die Schreibweise oder suche stattdessen nach der E-Mail-Adresse.
  searchEmptyTitle: Kein Kontakt passt zu „{query}“
en:
  contactAdd: Add contact
  contactCount: '{count} contact | {count} contacts'
  contactCountFiltered: '{count} of {total}'
  contactImport: Import contacts
  emptyDescription: Save the people you meet so you can invite them to events with one tap.
  emptyTitle: Your contact book is empty
  filterEmptyTitle: No contact matches the chosen groups
  groupsManage: Manage groups
  searchClear: Clear search and filters
  searchEmptyDescription: Check the spelling or search by email address instead.
  searchEmptyTitle: 'No contact matches "{query}"'
</i18n>
