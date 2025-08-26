<template>
  <Loader :api="api">
    <div class="flex flex-col gap-4">
      <FormInputSearch v-model="searchQuery" />
      <EventList
        :events
        :has-next-page="pageInfo?.hasNextPage"
        @load-more="loadMore"
      />
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { refDebounced } from '@vueuse/core'

import { graphql } from '~~/gql/generated'

const queryEventList = graphql(`
  query EventList($after: Cursor, $first: Int!) {
    allEvents(after: $after, first: $first, orderBy: START_DESC) {
      nodes {
        accountByCreatedBy {
          id
          username
        }
        addressByAddressId {
          id
          location {
            latitude
            longitude
          }
        }
        eventFavoritesByEventId(first: 1) {
          nodes {
            id
            createdBy
          }
        }
        guestsByEventId(first: 1) {
          nodes {
            contactByContactId {
              accountId
              id
            }
            id
          }
        }
        id
        name
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
          username
        }
        addressByAddressId {
          id
          location {
            latitude
            longitude
          }
        }
        eventFavoritesByEventId(first: 1) {
          nodes {
            createdBy
            id
          }
        }
        guestsByEventId(first: 1) {
          nodes {
            contactByContactId {
              accountId
              id
            }
            id
          }
        }
        id
        name
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

const allEventsQueryAfter = ref<string>()
const allEventsQuery = useQuery({
  query: queryEventList,
  variables: computed(() => ({
    after: allEventsQueryAfter.value,
    first: ITEMS_PER_PAGE,
  })),
})

const searchQuery = ref<string>()
const searchQueryDebounced = refDebounced(searchQuery, 300)
const searchQueryVariable = computed(() =>
  searchQueryDebounced.value?.trim().split(/\s+/).join(' OR '),
)
const searchResultsQueryAfter = ref<string>()
const searchResultsQuery = useQuery({
  query: queryEventSearch,
  variables: computed(() => ({
    after: searchResultsQueryAfter.value,
    query: searchQueryVariable.value,
    first: ITEMS_PER_PAGE,
  })),
})
watch(searchQueryVariable, () => {
  searchResultsQueryAfter.value = undefined
})

const query = computed(() =>
  searchQueryVariable.value ? searchResultsQuery : allEventsQuery,
)
const pageInfo = computed(() =>
  searchQueryVariable.value
    ? api.value.data.eventSearch?.pageInfo
    : api.value.data.allEvents?.pageInfo,
)
const events = computed(() => {
  if (!query.value.data.value) return

  if ('allEvents' in query.value.data.value) {
    return query.value.data.value.allEvents?.nodes || []
  }

  if ('eventSearch' in query.value.data.value) {
    return query.value.data.value.eventSearch?.nodes || []
  }

  return undefined
})

const api = await useApiData([query.value])
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
