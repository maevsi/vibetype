<template>
  <div class="flex flex-1 flex-col gap-4">
    <EventSearchBar
      v-model:is-map-visible="isMapVisible"
      v-model:search-query="searchQuery"
    />
    <AppFeature v-if="!searchQueryVariable" feature="category-browse">
      <EventCategoryBrowse />
    </AppFeature>
    <LoaderError
      v-if="errorMessages.length"
      :messages="errorMessages"
      @retry="retry"
    />
    <EventList
      v-if="events?.length || isLoading || !errorMessages.length"
      :events
      :has-next-page="pageInfo?.hasNextPage"
      :is-loading="isLoading"
      :is-map-visible="isMapVisible"
      @load-more="loadMore"
    >
      <template #empty>
        <AppEmptyState
          v-if="searchQueryVariable"
          :description="t('searchEmptyDescription')"
          :title="t('searchEmptyTitle', { query: searchQueryVariable })"
        >
          <template #icon><AppIconMagnifyingGlass /></template>
          <AppButton
            :aria-label="t('searchClear')"
            @click="searchQuery = undefined"
          >
            {{ t('searchClear') }}
          </AppButton>
        </AppEmptyState>
        <AppEmptyState
          v-else
          :description="t('emptyDescription')"
          :title="t('emptyTitle')"
        >
          <template #icon><AppIconCalendar /></template>
          <AppButton
            :aria-label="t('emptyCreate')"
            :to="localePath('event-create')"
          >
            {{ t('emptyCreate') }}
          </AppButton>
          <AppButton
            :aria-label="t('emptyHunt')"
            :to="localePath('event-ingest-image')"
            variant="secondary"
          >
            {{ t('emptyHunt') }}
          </AppButton>
        </AppEmptyState>
      </template>
    </EventList>
  </div>
</template>

<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

import { graphql } from '~~/gql/generated'

const queryEventList = graphql(`
  query EventList($after: Cursor, $first: Int!) {
    allEvents(
      after: $after
      condition: { hasEnded: false }
      first: $first
      orderBy: START_ASC
    ) {
      nodes {
        accountByCreatedBy {
          id
          rowId
          username
        }
        addressByAddressId {
          id
          location {
            latitude
            longitude
          }
          rowId
        }
        eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventCategoryByCategoryId {
              id
              name
            }
            id
          }
        }
        eventFavoritesByEventId(first: 1) {
          nodes {
            id
            createdBy
            rowId
          }
        }
        eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventFormatByFormatId {
              id
              name
            }
            id
          }
        }
        eventUploadsByEventId {
          nodes {
            id
            isHeaderImage
            rowId
            uploadByUploadId {
              id
              rowId
              storageKey
            }
          }
        }
        guestCount
        guestsByEventId(first: 1) {
          nodes {
            contactByContactId {
              accountId
              id
              rowId
            }
            id
            rowId
          }
        }
        id
        isInPerson
        name
        rowId
        slug
        start
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`)
const queryEventSearch = graphql(`
  query EventSearch($after: Cursor, $first: Int, $query: String) {
    eventSearch(after: $after, first: $first, query: $query) {
      nodes {
        accountByCreatedBy {
          id
          rowId
          username
        }
        addressByAddressId {
          id
          location {
            latitude
            longitude
          }
          rowId
        }
        eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventCategoryByCategoryId {
              id
              name
            }
            id
          }
        }
        eventFavoritesByEventId(first: 1) {
          nodes {
            createdBy
            id
            rowId
          }
        }
        eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventFormatByFormatId {
              id
              name
            }
            id
          }
        }
        eventUploadsByEventId {
          nodes {
            id
            isHeaderImage
            rowId
            uploadByUploadId {
              id
              rowId
              storageKey
            }
          }
        }
        guestCount
        guestsByEventId(first: 1) {
          nodes {
            contactByContactId {
              accountId
              id
              rowId
            }
            id
            rowId
          }
        }
        id
        isInPerson
        name
        rowId
        slug
        start
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`)

const { t } = useI18n()
const localePath = useLocalePath()
const isMapVisible = useEventMapVisible()

const allEventsQueryAfter = ref<string | null>()
const allEventsQuery = useApiQuery({
  query: queryEventList,
  variables: computed(() => ({
    after: allEventsQueryAfter.value,
    first: ITEMS_PER_PAGE,
  })),
})

const searchQuery = ref<string>()
const searchQueryDebounced = refDebounced(searchQuery, 300)
// `eventSearch` already matches by prefix (so partial words work while
// typing) and falls back to typo-tolerant matching on the name, so the raw
// trimmed input is passed through as-is.
const searchQueryVariable = computed(() => searchQueryDebounced.value?.trim())
const searchResultsQueryAfter = ref<string | null>()
// `flush: 'sync'` so the cursor is already cleared by the time the reactive
// `variables` computed below is next read, otherwise `searchResultsQuery`
// would refetch with the old cursor and the new query, skipping that query's
// first page.
watch(
  searchQueryVariable,
  () => {
    searchResultsQueryAfter.value = undefined
  },
  { flush: 'sync' },
)
const searchResultsQuery = useApiQuery({
  query: queryEventSearch,
  variables: computed(() => ({
    after: searchResultsQueryAfter.value,
    query: searchQueryVariable.value,
    first: ITEMS_PER_PAGE,
  })),
  pause: computed(() => !searchQueryVariable.value),
})
const query = computed(() =>
  searchQueryVariable.value ? searchResultsQuery : allEventsQuery,
)
// Both queries are passed here (rather than just `query.value` at setup
// time) so `api.value.data`/`pageInfo` keep reflecting whichever one is
// currently active.
const api = await useApiData([allEventsQuery, searchResultsQuery])
const errorMessages = computed(() => getCombinedErrorMessages(api.value.errors))
const isLoading = computed(() => api.value.isFetching)
const retry = () => {
  allEventsQuery.executeQuery({ requestPolicy: 'network-only' })
  if (searchQueryVariable.value)
    searchResultsQuery.executeQuery({ requestPolicy: 'network-only' })
}
const pageInfo = computed(() =>
  searchQueryVariable.value
    ? api.value.data.eventSearch?.pageInfo
    : api.value.data.allEvents?.pageInfo,
)
const events = computed(() => {
  if (!query.value.data.value) return

  if ('allEvents' in query.value.data.value) {
    return query.value.data.value.allEvents?.nodes
  }

  if ('eventSearch' in query.value.data.value) {
    return query.value.data.value.eventSearch?.nodes
  }

  return undefined
})

const loadMore = () => {
  if (!query.value.data.value) return

  if ('allEvents' in query.value.data.value) {
    allEventsQueryAfter.value =
      query.value.data.value?.allEvents?.pageInfo.endCursor
  }

  if ('eventSearch' in query.value.data.value) {
    searchResultsQueryAfter.value =
      query.value.data.value?.eventSearch?.pageInfo.endCursor
  }
}
</script>

<i18n lang="yaml">
de:
  emptyCreate: Veranstaltung planen
  emptyDescription: 'Sei die erste Person: Plane deine eigene Veranstaltung oder füge eine hinzu, die du auf einem Plakat entdeckt hast.'
  emptyHunt: Plakat jagen
  emptyTitle: Noch keine bevorstehenden Veranstaltungen
  searchClear: Suche zurücksetzen
  searchEmptyDescription: Prüfe die Schreibweise oder versuche ein allgemeineres Wort, zum Beispiel eine Stadt oder eine Kategorie.
  searchEmptyTitle: Nichts passt zu „{query}“
en:
  emptyCreate: Plan an event
  emptyDescription: 'Be the first: plan your own event, or add one you spotted on a poster.'
  emptyHunt: Hunt a poster
  emptyTitle: No upcoming events yet
  searchClear: Clear search
  searchEmptyDescription: Check the spelling or try a broader word, like a city or a category.
  searchEmptyTitle: Nothing matches "{query}"
</i18n>
