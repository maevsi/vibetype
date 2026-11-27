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
      <AppLoaderProgress
        v-if="!isComplete"
        :count="contacts.length"
        :total="api.data.allContacts?.totalCount ?? 0"
      />
      <template v-else-if="contactsFiltered.length">
        <p class="text-body-small text-fg-2">
          {{
            searchStringDebounced.trim()
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
        :title="t('searchEmptyTitle', { query: searchStringDebounced.trim() })"
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
const searchStringDebounced = refDebounced(searchString, 200)

// api data
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
const api = await useApiData([contactsQuery])
const contacts = computed(() =>
  getContactsSorted(
    api.value.data.allContacts?.nodes
      .map((node) => {
        const contact = getContactItem(node)
        return (
          contact && {
            ...contact,
            guestCount: node.guestsByContactId.totalCount,
          }
        )
      })
      .filter(isNeitherNullNorUndefined) || [],
  ),
)
// the search text is built once per data change instead of once per keystroke
const contactsIndexed = computed(() =>
  contacts.value.map((contact) => ({
    contact,
    searchText: getContactSearchText(contact),
  })),
)
const contactsFiltered = computed(() =>
  searchStringDebounced.value.trim()
    ? contactsIndexed.value
        .filter(({ searchText }) =>
          isSearchTextMatch(searchText, searchStringDebounced.value),
        )
        .map(({ contact }) => contact)
    : contacts.value,
)
const { limit, sentinel } = useRenderLimit([searchStringDebounced])
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
  searchClear: Suche zurücksetzen
  searchEmptyDescription: Prüfe die Schreibweise oder suche stattdessen nach der E-Mail-Adresse.
  searchEmptyTitle: Kein Kontakt passt zu „{query}“
en:
  contactAdd: Add contact
  contactCount: '{count} contact | {count} contacts'
  contactCountFiltered: '{count} of {total}'
  contactImport: Import contacts
  emptyDescription: Save the people you meet so you can invite them to events with one tap.
  emptyTitle: Your contact book is empty
  searchClear: Clear search
  searchEmptyDescription: Check the spelling or search by email address instead.
  searchEmptyTitle: 'No contact matches "{query}"'
</i18n>
