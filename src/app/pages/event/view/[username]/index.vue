<template>
  <LoaderIndicatorPing v-if="api.isFetching" />
  <AppError
    v-else-if="!account"
    :error="{ message: 'Account data missing', statusCode: 404 }"
  />
  <div v-else>
    <LayoutPageTitle title="-">
      <i18n-t keypath="title" tag="h1">
        <template #name>
          <AppLink
            :to="
              localePath({
                name: 'account-view-username',
                params: { username: route.params.username },
              })
            "
          >
            {{ route.params.username }}
          </AppLink>
        </template>
      </i18n-t>
    </LayoutPageTitle>
    <EventList
      :events
      :has-next-page="
        api.data.accountByUsername?.eventsByCreatedBy.pageInfo.hasNextPage
      "
      @load-more="
        queryAfter =
          api.data.accountByUsername?.eventsByCreatedBy.pageInfo.endCursor
      "
    />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'

const queryEventListAccount = graphql(`
  query EventListAccount($after: Cursor, $first: Int!, $username: String!) {
    accountByUsername(username: $username) {
      eventsByCreatedBy(after: $after, first: $first, orderBy: START_DESC) {
        nodes {
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
      id
    }
  }
`)

// page
const { t } = useI18n()
const route = useRoute('event-view-username-event_name___en')
const title = t('title', { name: route.params.username })
useHeadDefault({
  ogType: 'profile',
  profileUsername: route.params.username,
  title,
})

// api data
const queryAfter = ref<string | null>()
const query = useQuery({
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
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  title: Veranstaltungen von {name}
en:
  title: Events by {name}
</i18n>
