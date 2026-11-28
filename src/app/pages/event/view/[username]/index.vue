<template>
  <Loader :api is-page>
    <AppError
      v-if="!isOwn && !account"
      :error="{ data: { vibetype: t('errorAccountMissing') }, status: 404 }"
    />
    <div v-else class="flex flex-1 flex-col">
      <LayoutPage>
        <div class="flex flex-1 flex-col gap-4">
          <h1 class="sr-only">
            <i18n-t keypath="title">
              <template #name>
                <AppLink
                  :to="
                    localePath({
                      name: 'account-view-username',
                      params: { username: route.params.username },
                    })
                  "
                >
                  {{ `@${route.params.username}` }}
                </AppLink>
              </template>
            </i18n-t>
          </h1>
          <EventSearchBar
            v-model:is-map-visible="isMapVisible"
            v-model:search-query="searchQuery"
            :placeholder="
              isOwn
                ? t('searchPlaceholderOwn')
                : t('searchPlaceholderOther', { name: route.params.username })
            "
          >
            <template v-if="!isOwn" #back>
              <ButtonIconBackRoute />
            </template>
          </EventSearchBar>
          <EventListMine
            v-if="isOwn"
            :is-map-visible
            :search="searchVariable"
          />
          <EventList
            v-else
            :events
            :has-next-page="
              api.data.accountByUsername?.eventsByCreatedBy.pageInfo.hasNextPage
            "
            is-grouped-by-day
            :is-map-visible
            @load-more="
              queryAfter =
                api.data.accountByUsername?.eventsByCreatedBy.pageInfo.endCursor
            "
          >
            <template #empty>
              <AppEmptyState
                :description="t('emptyDescription')"
                :title="t('emptyTitle', { name: route.params.username })"
              >
                <template #icon><AppIconCalendar /></template>
                <AppButton
                  :aria-label="t('emptyDiscover')"
                  :to="localePath('discover')"
                >
                  {{ t('emptyDiscover') }}
                </AppButton>
              </AppEmptyState>
            </template>
          </EventList>
        </div>
      </LayoutPage>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

import { graphql } from '~~/gql/generated'

const queryEventListAccount = graphql(`
  query EventListAccount(
    $after: Cursor
    $first: Int!
    $search: String
    $username: String!
  ) {
    accountByUsername(username: $username) {
      eventsByCreatedBy(
        after: $after
        condition: { search: $search }
        first: $first
        orderBy: START_DESC
      ) {
        nodes {
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
      id
      rowId
    }
  }
`)

// page
const { t } = useI18n()
const route = useRoute()
const title = t('title', { name: `@${route.params.username}` })
useHeadDefault({
  ogType: 'profile',
  profileUsername: route.params.username,
  title,
})

// api data
const queryAfter = ref<string | null>()
const searchQuery = ref<string>()
const searchQueryDebounced = refDebounced(searchQuery, 300)
const searchVariable = computed(
  () => searchQueryDebounced.value?.trim() || undefined,
)
// resets the paging synchronously, so the query never runs with the new search and the old cursor
watch(
  searchVariable,
  () => {
    queryAfter.value = undefined
  },
  { flush: 'sync' },
)
const store = useStore()
const isOwn = computed(() => route.params.username === store.signedInUsername)
const query = useApiQuery({
  query: queryEventListAccount,
  variables: computed(() => ({
    after: queryAfter.value,
    first: ITEMS_PER_PAGE,
    search: searchVariable.value,
    username: route.params.username,
  })),
})
const api = await useApiData([query])
const account = computed(() => api.value.data.accountByUsername)
const events = computed(() =>
  account.value?.eventsByCreatedBy.nodes.map((event) => ({
    ...event,
    accountByCreatedBy: { ...account.value, username: route.params.username },
  })),
)

// template
const isMapVisible = useEventMapVisible()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  emptyDescription: Schau später wieder vorbei oder finde andere Veranstaltungen zum Mitmachen.
  emptyDiscover: Veranstaltungen entdecken
  emptyTitle: "{'@'}{name} hat noch keine Veranstaltungen veröffentlicht"
  errorAccountMissing: Dieses Konto existiert nicht. Es wurde möglicherweise gelöscht oder der Nutzername hat sich geändert.
  searchPlaceholderOther: Veranstaltungen von {name} durchsuchen
  searchPlaceholderOwn: Deine Veranstaltungen durchsuchen
  title: Veranstaltungen von {name}
en:
  emptyDescription: Check back later, or find other events to join.
  emptyDiscover: Discover events
  emptyTitle: "{'@'}{name} hasn't published any events yet"
  errorAccountMissing: This account doesn't exist. It may have been deleted, or the username changed.
  searchPlaceholderOther: Search events by {name}
  searchPlaceholderOwn: Search for your events
  title: Events by {name}
</i18n>
