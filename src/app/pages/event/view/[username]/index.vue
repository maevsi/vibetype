<template>
  <LoaderIndicatorPing v-if="api.isFetching" />
  <AppError
    v-else-if="!account"
    :error="{ message: 'Account data missing', status: 404 }"
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

    <!-- Upcoming / Past tabs -->
    <div
      class="relative mx-4 mb-4 h-10 rounded-xl bg-(--figma-neutral-level-2) p-1"
    >
      <div class="relative z-10 flex h-full gap-1">
        <button
          class="flex-1 rounded-lg text-sm font-semibold transition-colors"
          :class="
            activeTab === 'upcoming'
              ? 'text-white'
              : 'text-(--semantic-base-text-secondary)'
          "
          @click="activeTab = 'upcoming'"
        >
          {{ t('upcoming') }}
        </button>
        <button
          class="flex-1 rounded-lg text-sm font-semibold transition-colors"
          :class="
            activeTab === 'past'
              ? 'text-white'
              : 'text-(--semantic-base-text-secondary)'
          "
          @click="activeTab = 'past'"
        >
          {{ t('past') }}
        </button>
      </div>
      <!-- Sliding indicator -->
      <div
        class="absolute top-1 bottom-1 rounded-lg bg-(--accent-strong) transition-all duration-300"
        :style="{
          width: 'calc(50% - 4px)',
          left: activeTab === 'upcoming' ? '4px' : 'calc(50% + 2px)',
        }"
      />
    </div>

    <EventList
      :events="filteredEvents"
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
          eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
            nodes {
              eventCategoryByCategoryId {
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
      id
      rowId
    }
  }
`)

// page
const { t } = useI18n()
const route = useRoute()
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

// tabs
const activeTab = ref<'past' | 'upcoming'>('upcoming')
const now = useNow()
const filteredEvents = computed(() => {
  if (!events.value) return undefined
  return events.value.filter((event) =>
    activeTab.value === 'upcoming'
      ? new Date(event.start) >= now.value
      : new Date(event.start) < now.value,
  )
})
</script>

<i18n lang="yaml">
de:
  past: Vergangen
  title: Veranstaltungen von {name}
  upcoming: Bevorstehend
en:
  past: Past
  title: Events by {name}
  upcoming: Upcoming
</i18n>
