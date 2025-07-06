<template>
  <Loader :api="api">
    <div
      v-if="event && route.params.username === store.signedInUsername"
      class="flex flex-col gap-4"
    >
      <LayoutPageTitle :title="t('title')" />
      <GuestList :event />
    </div>
    <AppError v-else :error="{ statusCode: 403 }" />
  </Loader>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'

// validation
const route = useRoute('event-view-username-event_name-guest___en')
const store = useStore()
if (route.params.username !== store.signedInUsername) {
  throw createError({
    statusCode: 403,
  })
}

// api data
const queryEventGuests = useQuery({
  query: graphql(`
    query EventGuests($slug: String!, $username: String!) {
      accountByUsername(username: $username) {
        eventsByCreatedBy(condition: { slug: $slug }) {
          nodes {
            createdBy
            guestsByEventId {
              nodes {
                contactByContactId {
                  accountId
                  id
                }
                id
              }
              pageInfo {
                hasNextPage
                endCursor
              }
              totalCount
            }
            id
            name
            slug
          }
        }
        id
      }
    }
  `),
  variables: {
    slug: route.params.event_name,
    username: route.params.username,
  },
})
const api = await useApiData([queryEventGuests])
const account = computed(() => api.value.data.accountByUsername)
const event = computed(() => account.value?.eventsByCreatedBy.nodes[0])

// page
const { t } = useI18n()
const title = computed(() => {
  if (api.value.isFetching) return t('globalLoading')
  if (route.params.username !== store.signedInUsername) {
    showAppError({ statusCode: 403, message: 'Permission denied' })
    return
  }
  if (!event.value) {
    showAppError({ statusCode: 500, message: 'Event unavailable' })
    return
  }

  return `${t('title')} · ${event.value.name}`
})
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Gäste
en:
  title: Guests
</i18n>
