<template>
  <div class="flex flex-col gap-4">
    <nav :aria-label="t('timeLabel')">
      <ul class="grid grid-cols-2 gap-1 rounded-medium bg-surface-raised p-1">
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
            :to="{ query: getQuery({ time: option.value }) }"
            variant="ghost"
          >
            {{ option.label }}
          </AppButton>
        </li>
      </ul>
    </nav>
    <nav :aria-label="t('filterLabel')">
      <ul
        :class="
          cn(
            'grid gap-3',
            filterOptions.length > 3
              ? 'grid-cols-4'
              : filterOptions.length === 3
                ? 'grid-cols-3'
                : 'grid-cols-2',
          )
        "
      >
        <li v-for="option in filterOptions" :key="option.value">
          <AppButton
            :aria-current="filter === option.value ? 'page' : undefined"
            :aria-label="option.label"
            :class="
              cn(
                'w-full flex-col justify-center gap-1 px-2 py-3 text-body-small',
                filter === option.value && 'ring-2 ring-action-primary',
              )
            "
            size="none"
            :to="{ query: getQuery({ filter: option.value }) }"
            variant="secondary"
          >
            <component
              :is="option.icon"
              aria-hidden="true"
              :class="cn('size-5', option.color)"
            />
            {{ option.label }}
          </AppButton>
        </li>
      </ul>
    </nav>
    <EventList
      :badge="badge"
      :events
      :has-next-page
      is-grouped-by-day
      :is-loading="!isWithoutData && api.isFetching && !events"
      :is-map-visible
      @load-more="loadMore"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'

const { t } = useI18n()

// compiler

const { isMapVisible = false } = defineProps<{
  isMapVisible?: boolean
}>()

const queryHosting = graphql(`
  query EventListMineHosting(
    $after: Cursor
    $createdBy: UUID!
    $first: Int!
    $hasEnded: Boolean!
    $orderBy: [EventOrderBy!]
  ) {
    allEvents(
      after: $after
      condition: { createdBy: $createdBy, hasEnded: $hasEnded }
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

// The nested event cannot be filtered or ordered by the server through its
// favorite, so all of the favorites are fetched at once and the time split,
// the order and the paging happen in the browser. That holds up to
// `ITEMS_PER_PAGE_LARGE` favorites; beyond that, a SQL function returning the
// invoker's favorite events would let the server do all of it.
const querySaved = graphql(`
  query EventListMineSaved($createdBy: UUID!, $first: Int!) {
    allEventFavorites(condition: { createdBy: $createdBy }, first: $first) {
      nodes {
        eventByEventId {
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
        id
      }
    }
  }
`)

// data
const { isFeatureEnabled } = useFeatureFlags()
const isAttendingEnabled = isFeatureEnabled('event-attending')
const isDraftsEnabled = isFeatureEnabled('event-drafts')
// `AppFeature` would show an unflagged tile with a striped overlay in
// development, which a tile in a grid cannot carry, so the flags decide here
const filterOptions = computed(() => [
  ...(isAttendingEnabled.value
    ? [
        {
          color: 'text-green-600',
          icon: resolveComponent('AppIconCheckCircle'),
          label: t('attending'),
          value: 'attending',
        } as const,
      ]
    : []),
  {
    color: 'text-accent-pink',
    icon: resolveComponent('AppIconHeart'),
    label: t('saved'),
    value: 'saved',
  } as const,
  {
    color: 'text-info',
    icon: resolveComponent('AppIconUsers'),
    label: t('hosting'),
    value: 'hosting',
  } as const,
  ...(isDraftsEnabled.value
    ? [
        {
          color: 'text-warning',
          icon: resolveComponent('AppIconEdit'),
          label: t('drafts'),
          value: 'drafts',
        } as const,
      ]
    : []),
])
const timeOptions = [
  { label: t('past'), value: 'past' },
  { label: t('upcoming'), value: 'upcoming' },
] as const
const route = useRoute()
const store = useStore()
const now = useNow()

// the filter and the time live in the URL, so a reload or a shared link keeps them
const filter = computed(() => {
  const value = route.query.filter
  return filterOptions.value.some((option) => option.value === value)
    ? (value as (typeof filterOptions.value)[number]['value'])
    : 'hosting'
})
// Going and drafts have no data yet (going waits on a separate backend change,
// drafts on a schema change), so they show the empty state without a query.
// Upgrade path: a query per filter next to the two below
const isWithoutData = computed(
  () => filter.value === 'attending' || filter.value === 'drafts',
)
const badge = computed(() =>
  filter.value === 'hosting' || filter.value === 'saved'
    ? filter.value
    : undefined,
)
const time = computed(() => (route.query.time === 'past' ? 'past' : 'upcoming'))
const getQuery = (override: { filter?: string; time?: string }) => {
  const next = { filter: filter.value, time: time.value, ...override }

  return {
    ...route.query,
    // the defaults stay out of the URL
    filter: next.filter === 'hosting' ? undefined : next.filter,
    time: next.time === 'upcoming' ? undefined : next.time,
  }
}

// api data
const hostingAfter = ref<string | null>()
const savedVisibleCount = ref(ITEMS_PER_PAGE)
// resets the paging with the time, synchronously so the query never runs with
// the new time and the old cursor
watch(
  time,
  () => {
    hostingAfter.value = undefined
    savedVisibleCount.value = ITEMS_PER_PAGE
  },
  { flush: 'sync' },
)
const hostingApi = useApiQuery({
  pause: computed(() => filter.value !== 'hosting'),
  query: queryHosting,
  variables: computed(() => ({
    after: hostingAfter.value,
    createdBy: store.signedInAccountId ?? '',
    first: ITEMS_PER_PAGE,
    hasEnded: time.value === 'past',
    orderBy:
      time.value === 'past' ? ('START_DESC' as const) : ('START_ASC' as const),
  })),
})
const savedApi = useApiQuery({
  pause: computed(() => filter.value !== 'saved'),
  query: querySaved,
  variables: computed(() => ({
    createdBy: store.signedInAccountId ?? '',
    first: ITEMS_PER_PAGE_LARGE,
  })),
})
const api = await useApiData([hostingApi, savedApi])

// computations
const savedEvents = computed(() => {
  const nodes = savedApi.data.value?.allEventFavorites?.nodes

  if (!nodes) return

  // like the server's `hasEnded`, an event without an end ends at its start
  return nodes
    .flatMap((node) => (node.eventByEventId ? [node.eventByEventId] : []))
    .filter(
      (event) =>
        new Date(event.end ?? event.start) <= now.value ===
        (time.value === 'past'),
    )
    .toSorted(
      (a, b) =>
        (new Date(a.start).getTime() - new Date(b.start).getTime()) *
        (time.value === 'past' ? -1 : 1),
    )
})
const events = computed(() =>
  isWithoutData.value
    ? []
    : filter.value === 'saved'
      ? savedEvents.value?.slice(0, savedVisibleCount.value)
      : hostingApi.data.value?.allEvents?.nodes,
)
const hasNextPage = computed(() =>
  isWithoutData.value
    ? false
    : filter.value === 'saved'
      ? (savedEvents.value?.length ?? 0) > savedVisibleCount.value
      : hostingApi.data.value?.allEvents?.pageInfo.hasNextPage,
)

// methods
const loadMore = () => {
  if (filter.value === 'saved') {
    savedVisibleCount.value += ITEMS_PER_PAGE
    return
  }

  hostingAfter.value = hostingApi.data.value?.allEvents?.pageInfo.endCursor
}
</script>

<i18n lang="yaml">
de:
  attending: Dabei
  drafts: Entwürfe
  filterLabel: Filter
  hosting: Von dir
  past: Vergangen
  saved: Gemerkt
  timeLabel: Zeitraum
  upcoming: Bevorstehend
en:
  attending: Going
  drafts: Drafts
  filterLabel: Filter
  hosting: Hosting
  past: Past
  saved: Saved
  timeLabel: Time
  upcoming: Upcoming
</i18n>
