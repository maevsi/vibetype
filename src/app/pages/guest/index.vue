<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-4">
        <nav :aria-label="t('timeLabel')">
          <ul
            class="grid grid-cols-2 gap-1 rounded-medium bg-surface-raised p-1"
          >
            <li v-for="option in timeOptions" :key="option.value">
              <AppButton
                :aria-current="time === option.value ? 'page' : undefined"
                :aria-label="option.label"
                :class="
                  cn(
                    'w-full justify-center px-4 py-2 text-body',
                    time === option.value &&
                      'bg-action-primary text-on-action-primary',
                  )
                "
                size="none"
                :to="{
                  query: {
                    ...route.query,
                    // the default stays out of the URL
                    time:
                      option.value === 'upcoming' ? undefined : option.value,
                  },
                }"
                variant="ghost"
              >
                {{ option.label }}
              </AppButton>
            </li>
          </ul>
        </nav>
        <AppAlert v-if="errorMessages.length" variant="error">
          <AppSpanList :span="errorMessages" />
        </AppAlert>
        <EventList
          :events="invitedQuery.data.value?.allEvents?.nodes"
          :has-next-page="
            invitedQuery.data.value?.allEvents?.pageInfo.hasNextPage
          "
          is-grouped-by-day
          :is-loading="api.isFetching"
          @load-more="loadMore"
        />
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'

useFeatureRequired('invitations')

defineRouteRules({
  robots: false,
})

const { t } = useI18n()

// compiler
const queryInvited = graphql(`
  query EventListInvited(
    $after: Cursor
    $first: Int!
    $hasEnded: Boolean!
    $orderBy: [EventOrderBy!]
  ) {
    allEvents(
      after: $after
      condition: { hasEnded: $hasEnded, isInvited: true }
      first: $first
      orderBy: $orderBy
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
        guestCount
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
        isInPerson
        name
        rowId
        slug
        start
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`)

// data
const title = t('title')
const timeOptions = [
  { label: t('upcoming'), value: 'upcoming' },
  { label: t('past'), value: 'past' },
] as const
const route = useRoute()

// the time lives in the URL, so a reload or a shared link keeps it
const time = computed(() => (route.query.time === 'past' ? 'past' : 'upcoming'))

// api data
const after = ref<string | null>()
// resets the paging with the time, synchronously so the query never runs with
// the new time and the old cursor
watch(
  time,
  () => {
    after.value = undefined
  },
  { flush: 'sync' },
)
const invitedQuery = useApiQuery({
  query: queryInvited,
  variables: computed(() => ({
    after: after.value,
    first: ITEMS_PER_PAGE,
    hasEnded: time.value === 'past',
    orderBy:
      time.value === 'past' ? ('START_DESC' as const) : ('START_ASC' as const),
  })),
})
const api = await useApiData([invitedQuery])
const errorMessages = computed(() => getCombinedErrorMessages(api.value.errors))

// methods
const loadMore = () => {
  after.value = invitedQuery.data.value?.allEvents?.pageInfo.endCursor
}

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  past: Vergangen
  timeLabel: Zeitraum
  title: Einladungen
  upcoming: Bevorstehend
en:
  past: Past
  timeLabel: Time
  title: Invitations
  upcoming: Upcoming
</i18n>
