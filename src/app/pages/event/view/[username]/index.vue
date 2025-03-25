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
      :events="events"
      :has-next-page="api.data.allEvents?.pageInfo.hasNextPage"
      @load-more="allEventsQueryAfter = api.data.allEvents?.pageInfo.endCursor"
    />
  </Loader>
</template>

<script setup lang="ts">
import { useAccountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { getEventItem } from '~~/gql/documents/fragments/eventItem'
import { useAllEventsQuery } from '~~/gql/documents/queries/event/eventsAll'

const { t } = useI18n()
const localePath = useLocalePath()

// page
const route = useRoute('event-view-username-event_name___en')
const title = t('title', { name: route.params.username })
useHeadDefault({
  ogType: 'profile',
  profileUsername: route.params.username,
  title,
})

// validation
const accountByUsernameQuery = await zalgo(
  useAccountByUsernameQuery({
    username: route.params.username,
  }),
)
const account = getAccountItem(
  accountByUsernameQuery.data.value?.accountByUsername,
)
if (!account) {
  throw createError({
    statusCode: 404,
  })
}

// api data
const allEventsQueryAfter = ref<string>()
const allEventsQuery = await zalgo(
  useAllEventsQuery({
    after: allEventsQueryAfter,
    createdBy: account.id,
    first: ITEMS_PER_PAGE,
  }),
)
const events = computed(
  () =>
    allEventsQuery.data.value?.allEvents?.nodes
      ?.map(getEventItem)
      .filter(isNeitherNullNorUndefined) || [],
)
const api = getApiData([allEventsQuery])
</script>

<i18n lang="yaml">
de:
  title: Veranstaltungen von {name}
en:
  title: Events by {name}
</i18n>
