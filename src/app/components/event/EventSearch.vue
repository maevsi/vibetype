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
import { eventHasEnded } from '~~/shared/utils/event'

const queryEventList = graphql(`
  query EventList($after: Cursor, $first: Int!) {
    allEvents(after: $after, first: $first, orderBy: START_ASC) {
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
        end
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
        end
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

// `orderBy: START_ASC` sorts past events first, so a freshly fetched page
// can consist entirely of events that have already ended even though
// upcoming ones exist further on. Starting with a large batch reduces how
// many round trips that takes to get through.
const allEventsQueryAfter = ref<string | null>()
const allEventsQueryFirst = ref(ITEMS_PER_PAGE_LARGE)
const allEventsQuery = useQuery({
  query: queryEventList,
  variables: computed(() => ({
    after: allEventsQueryAfter.value,
    first: allEventsQueryFirst.value,
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
const query = computed(() =>
  searchQueryVariable.value ? searchResultsQuery : allEventsQuery,
)
// Both queries are passed here (rather than just `query.value` at setup
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
const events = computed(() => {
  if (!query.value.data.value) return

  if ('allEvents' in query.value.data.value) {
    return query.value.data.value.allEvents?.nodes.filter(
      (event) => !eventHasEnded(event, now.value),
    )
  }

  if ('eventSearch' in query.value.data.value) {
    return query.value.data.value.eventSearch?.nodes.filter(
      (event) => !eventHasEnded(event, now.value),
    )
  }

  return undefined
})

// Tracks whether the initial `advanceUntilUpcomingEvent` catch-up has
// finished, so `loadMore` only switches `allEventsQueryFirst` back down to
// `ITEMS_PER_PAGE` once there's also a new `after` cursor to go with it -
// changing `allEventsQueryFirst` on its own would re-execute `allEventsQuery`
// with the same `after` cursor, refetching (and discarding) data it already
// has.
let allEventsCaughtUpOnUpcomingEvent = false

const loadMore = () => {
  if (!query.value.data.value) return

  if ('allEvents' in query.value.data.value) {
    if (allEventsCaughtUpOnUpcomingEvent)
      allEventsQueryFirst.value = ITEMS_PER_PAGE
    allEventsQueryAfter.value =
      query.value.data.value?.allEvents?.pageInfo.endCursor
  }

  if ('eventSearch' in query.value.data.value) {
    searchResultsQueryAfter.value =
      query.value.data.value?.eventSearch?.pageInfo.endCursor
  }
}

// Bounds how far `advanceUntilUpcomingEvent` will page ahead looking for a
// single upcoming event before giving up, so a server-side inconsistency
// (see the `endCursor` guard below) can't turn into an unbounded loop.
const ADVANCE_UNTIL_UPCOMING_EVENT_MAX_PAGES = 50

// The "show more" button only renders once there's at least one upcoming
// event to show, so a run of past-only pages would otherwise leave the list
// stuck empty with no way to reach the upcoming ones. This pages ahead
// (starting with a large batch, see `allEventsQueryFirst`/`ITEMS_PER_PAGE_LARGE`
// above) until an upcoming event turns up, hasNextPage goes false, or one of
// the guards below trips.
const advanceUntilUpcomingEvent = async () => {
  let pages = 0
  let previousEndCursor: string | null | undefined

  // On the client (unlike during SSR, see below), the query triggered by
  // `useQuery` at setup is still in flight at this point, so `events.value`
  // reads as `undefined` rather than an empty array; awaiting the query here
  // lets the loop condition below see its actual result instead of exiting
  // immediately.
  await query.value

  while (events.value?.length === 0 && pageInfo.value?.hasNextPage) {
    if (pages >= ADVANCE_UNTIL_UPCOMING_EVENT_MAX_PAGES) break
    // `hasNextPage` being true with an `endCursor` that isn't moving would
    // otherwise refetch the same page forever.
    if (pages > 0 && pageInfo.value.endCursor === previousEndCursor) break

    previousEndCursor = pageInfo.value.endCursor
    pages++
    loadMore()
    await query.value.executeQuery()
  }
}

// Awaiting this at setup (rather than only reacting to it in a watcher)
// makes the initial catch-up finish during server-side rendering instead of
// flashing an empty list on load.
await advanceUntilUpcomingEvent()
allEventsCaughtUpOnUpcomingEvent = true

watch(searchQueryVariable, async () => {
  searchResultsQueryAfter.value = undefined
  // `query.value` already reflects the new search state by this point, so
  // this re-fetches whichever query just changed (a fresh search, or
  // `allEvents` again once the search is cleared) before re-running the
  // same catch-up used on initial load - without it, a new search whose
  // first page is entirely past events would get stuck the same way the
  // initial load used to.
  await query.value.executeQuery()
  await advanceUntilUpcomingEvent()
})
</script>
