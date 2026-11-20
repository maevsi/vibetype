<template>
  <div class="flex flex-1 flex-col gap-4">
    <AppInputSearch v-model="searchQuery" class="h-12" />
    <AppFeature v-if="!searchQueryVariable" feature="category-browse">
      <EventCategoryBrowse />
    </AppFeature>
    <AppAlert v-if="errorMessages.length" variant="error">
      <AppSpanList :span="errorMessages" />
    </AppAlert>
    <EventList
      :events
      :has-next-page="pageInfo?.hasNextPage"
      :is-loading="api.isFetching"
      @load-more="loadMore"
    />
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
