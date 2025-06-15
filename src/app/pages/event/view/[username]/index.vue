<template>
  <Loader :api="api">
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
  </Loader>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { EventListAccountQueryVariables } from '~~/gql/generated/graphql'

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
const queryAfter = ref<string>()
const query = useQuery({
  query: queryEventListAccount,
  variables: {
    after: queryAfter,
    first: ITEMS_PER_PAGE,
    username: route.params.username,
  } satisfies MaybeRefObj<EventListAccountQueryVariables>,
})
const api = await useApiData([query])
const account = computed(() => api.value.data.accountByUsername)
const events = computed(() =>
  account.value?.eventsByCreatedBy.nodes.map((event) => ({
    ...event,
    accountByCreatedBy: { ...account.value, username: route.params.username },
  })),
)

// validation
if (account.value === null) {
  throw showError({
    message: 'Account data missing',
    statusCode: 404,
  })
}

// template
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  title: Veranstaltungen von {name}
en:
  title: Events by {name}
</i18n>
