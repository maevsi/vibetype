<template>
  <div class="flex flex-1 flex-col gap-4">
    <FormInputSearch v-model="searchQuery" />
    <CardStateAlert v-if="errorMessages.length">
      <AppSpanList :span="errorMessages" />
    </CardStateAlert>
    <EventList
      :events
      :has-next-page="pageInfo?.hasNextPage"
      :is-loading="api.isFetching"
      @load-more="loadMore"
    />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { refDebounced } from '@vueuse/core'

import { graphql } from '~~/gql/generated'

const queryEventList = graphql(`
  query EventList($after: Cursor, $first: Int!, $now: Datetime!) {
    allEvents(
      after: $after
      first: $first
      orderBy: START_ASC
      filter: { effectiveEnd: { greaterThanOrEqualTo: $now } }
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
  query EventSearch(
    $after: Cursor
    $first: Int
    $language: Language
    $query: String
  ) {
    eventSearch(
      after: $after
      first: $first
      language: $language
      query: $query
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

const now = useNow()

const allEventsQueryAfter = ref<string | null>()
const allEventsQuery = useQuery({
  query: queryEventList,
  variables: computed(() => ({
    after: allEventsQueryAfter.value,
    first: ITEMS_PER_PAGE,
    now: now.value.toISOString(),
  })),
})

const searchQuery = ref<string>()
const searchQueryDebounced = refDebounced(searchQuery, 300)
const searchQueryVariable = computed(() =>
  searchQueryDebounced.value?.trim().split(/\s+/).join(' OR '),
)
const searchResultsQueryAfter = ref<string | null>()
const searchResultsQuery = useQuery({
  query: queryEventSearch,
  variables: computed(() => ({
    after: searchResultsQueryAfter.value,
    query: searchQueryVariable.value,
    first: ITEMS_PER_PAGE,
  })),
  pause: computed(() => !searchQueryVariable.value),
})
// Both queries are passed here (rather than just the active one at setup
// time) so `api.value.data`/`pageInfo` keep reflecting whichever one is
// currently active - otherwise, once a search starts, `api` would stay
// permanently frozen on `allEvents`'s data and `pageInfo` would always
// read as `undefined` for search results.
const api = await useApiData([allEventsQuery, searchResultsQuery])
const errorMessages = computed(() => getCombinedErrorMessages(api.value.errors))
const pageInfo = computed(() =>
  searchQueryVariable.value
    ? api.value.data.eventSearch?.pageInfo
    : api.value.data.allEvents?.pageInfo,
)
const events = computed(() =>
  searchQueryVariable.value
    ? api.value.data.eventSearch?.nodes
    : api.value.data.allEvents?.nodes,
)

const loadMore = () => {
  if (searchQueryVariable.value) {
    searchResultsQueryAfter.value =
      api.value.data.eventSearch?.pageInfo.endCursor
  } else {
    allEventsQueryAfter.value = api.value.data.allEvents?.pageInfo.endCursor
  }
}

watch(searchQueryVariable, () => {
  searchResultsQueryAfter.value = undefined
})
</script>
