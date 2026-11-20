<template>
  <Loader :api is-page>
    <AppError
      v-if="!isOwn && !account"
      :error="{ message: 'Account data missing', status: 404 }"
    />
    <div v-else class="flex flex-1 flex-col">
      <LayoutPage>
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
        <div class="flex flex-1 flex-col gap-4">
          <EventSearchBar
            v-model:is-map-visible="isMapVisible"
            v-model:search-query="searchQuery"
            disabled
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
          <EventListMine v-if="isOwn" :is-map-visible />
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
          />
        </div>
      </LayoutPage>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'

const queryEventListAccount = graphql(`
  query EventListAccount($after: Cursor, $first: Int!, $username: String!) {
    accountByUsername(username: $username) {
      eventsByCreatedBy(after: $after, first: $first, orderBy: START_DESC) {
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
const store = useStore()
const isOwn = computed(() => route.params.username === store.signedInUsername)
const query = useApiQuery({
  query: queryEventListAccount,
  variables: computed(() => ({
    after: queryAfter.value,
    first: ITEMS_PER_PAGE,
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
// Disabled: the search needs the `search` condition of `allEvents`, which is not deployed to production yet.
// Upgrade path: once postgraphile with that condition (maevsi/postgraphile#69) is deployed, drop `disabled` and query `allEvents` with `condition: { createdBy, search }`.
const searchQuery = ref('')
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  searchPlaceholderOther: Veranstaltungen von {name} durchsuchen
  searchPlaceholderOwn: Deine Veranstaltungen durchsuchen
  title: Veranstaltungen von {name}
en:
  searchPlaceholderOther: Search events by {name}
  searchPlaceholderOwn: Search for your events
  title: Events by {name}
</i18n>
