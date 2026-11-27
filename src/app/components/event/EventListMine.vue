<template>
  <div class="flex flex-col gap-4">
    <div
      :aria-label="t('filterLabel')"
      class="flex gap-1 overflow-x-auto border-b border-line"
      role="tablist"
    >
      <AppButton
        v-for="option in filterOptions"
        :key="option.value"
        :aria-label="option.label"
        :aria-selected="filter === option.value"
        :class="
          cn(
            '-mb-px gap-2 rounded-none border-b-2 px-4 py-2 text-body whitespace-nowrap',
            filter === option.value
              ? 'border-action-primary text-fg-1'
              : 'border-transparent text-fg-2',
            'isFlagged' in option && 'feature-preview',
          )
        "
        role="tab"
        size="none"
        :to="{ query: getQuery({ filter: option.value }) }"
        variant="ghost"
      >
        <component
          :is="option.icon"
          aria-hidden="true"
          :class="cn('size-5', option.color)"
        />
        {{ option.label }}
      </AppButton>
    </div>
    <Select v-model="timeModel">
      <SelectTrigger :aria-label="t('timeLabel')" class="w-fit" size="sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="option in timeOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </SelectItem>
      </SelectContent>
    </Select>
    <EventList
      :badge="badge"
      :events
      :has-next-page
      is-grouped-by-day
      :is-loading="!isWithoutData && api.isFetching && !events"
      :is-map-visible
      @load-more="loadMore"
    >
      <template #empty>
        <AppEmptyState
          :description="emptyState.description"
          :title="emptyState.title"
        >
          <template #icon>
            <component :is="emptyState.icon" />
          </template>
          <AppButton
            v-for="(action, index) in emptyState.actions"
            :key="action.label"
            :aria-label="action.label"
            :to="action.to"
            :variant="index ? 'secondary' : 'primary'"
          >
            {{ action.label }}
          </AppButton>
        </AppEmptyState>
      </template>
    </EventList>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'
import { eventHasEnded } from '~~/shared/utils/event'

const { t } = useI18n()

// compiler

const { isMapVisible = false, search = undefined } = defineProps<{
  isMapVisible?: boolean
  search?: string
}>()

// the condition is passed whole, as a `null` field in it would match a `NULL` column instead of being left out
const queryEvents = graphql(`
  query EventListMine(
    $after: Cursor
    $condition: EventCondition!
    $first: Int!
    $orderBy: [EventOrderBy!]
  ) {
    allEvents(
      after: $after
      condition: $condition
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
          city
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
            city
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
// and a flagged tile carries the stripes itself
const filterOptions = computed(() => [
  ...(isAttendingEnabled.value
    ? [
        {
          color: 'text-green-600',
          icon: resolveComponent('AppIconCheckCircle'),
          isFlagged: true,
          label: t('attending'),
          value: 'attending',
        } as const,
      ]
    : []),
  {
    color: 'text-accent-pink',
    icon: resolveComponent('AppIconBookmark'),
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
          isFlagged: true,
          label: t('drafts'),
          value: 'drafts',
        } as const,
      ]
    : []),
])
const timeOptions = [
  { label: t('upcoming'), value: 'upcoming' },
  { label: t('past'), value: 'past' },
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
// drafts have no data yet, as they wait on a schema change, so they show the empty state without a query
const isWithoutData = computed(() => filter.value === 'drafts')
const badge = computed(() =>
  filter.value === 'hosting' || filter.value === 'saved'
    ? filter.value
    : undefined,
)
const time = computed(() => (route.query.time === 'past' ? 'past' : 'upcoming'))
const router = useRouter()
const timeModel = computed({
  get: () => time.value,
  set: (value) => {
    router.push({ query: getQuery({ time: String(value) }) })
  },
})
const getQuery = (override: { filter?: string; time?: string }) => {
  const next = { filter: filter.value, time: time.value, ...override }

  return {
    ...route.query,
    // the defaults stay out of the URL
    filter: next.filter === 'hosting' ? undefined : next.filter,
    time: next.time === 'upcoming' ? undefined : next.time,
  }
}

// empty state
const localePath = useLocalePath()
const emptyState = computed(() => {
  const create = { label: t('emptyCreate'), to: localePath('event-create') }
  const discover = { label: t('emptyDiscover'), to: localePath('discover') }
  const showUpcoming = {
    label: t('emptyShowUpcoming'),
    to: { query: getQuery({ time: 'upcoming' }) },
  }
  const isPast = time.value === 'past'

  if (
    (filter.value === 'hosting' || filter.value === 'saved') &&
    hasNoSavedOrHosted.value
  )
    return {
      actions: [discover, create],
      description: t('emptyAllDescription'),
      icon: resolveComponent('AppIconCalendar'),
      title: t('emptyAllTitle'),
    }

  switch (filter.value) {
    case 'attending':
      return isPast
        ? {
            actions: [showUpcoming],
            description: t('emptyAttendingPastDescription'),
            icon: resolveComponent('AppIconCheckCircle'),
            title: t('emptyAttendingPastTitle'),
          }
        : {
            actions: [
              discover,
              { label: t('emptyInvitations'), to: localePath('guest') },
            ],
            description: t('emptyAttendingUpcomingDescription'),
            icon: resolveComponent('AppIconCheckCircle'),
            title: t('emptyAttendingUpcomingTitle'),
          }
    case 'drafts':
      return {
        actions: [create],
        description: t('emptyDraftsDescription'),
        icon: resolveComponent('AppIconEdit'),
        title: t('emptyDraftsTitle'),
      }
    case 'saved':
      return isPast
        ? {
            actions: [showUpcoming],
            description: t('emptySavedPastDescription'),
            icon: resolveComponent('AppIconBookmark'),
            title: t('emptySavedPastTitle'),
          }
        : {
            actions: [discover],
            description: t('emptySavedUpcomingDescription'),
            icon: resolveComponent('AppIconBookmark'),
            title: t('emptySavedUpcomingTitle'),
          }
    default:
      return isPast
        ? {
            actions: [showUpcoming],
            description: t('emptyHostingPastDescription'),
            icon: resolveComponent('AppIconCalendar'),
            title: t('emptyHostingPastTitle'),
          }
        : {
            actions: [create],
            description: t('emptyHostingUpcomingDescription'),
            icon: resolveComponent('AppIconCalendar'),
            title: t('emptyHostingUpcomingTitle'),
          }
  }
})

// api data
const eventsAfter = ref<string | null>()
const savedVisibleCount = ref(ITEMS_PER_PAGE)
// resets the paging with the filter, the time and the search, synchronously so
// the query never runs with them changed and the old cursor
watch(
  [filter, time, () => search],
  () => {
    eventsAfter.value = undefined
    savedVisibleCount.value = ITEMS_PER_PAGE
  },
  { flush: 'sync' },
)
const eventsApi = useApiQuery({
  pause: computed(
    () => filter.value !== 'hosting' && filter.value !== 'attending',
  ),
  query: queryEvents,
  variables: computed(() => ({
    after: eventsAfter.value,
    condition: {
      ...(filter.value === 'attending'
        ? { isAttending: true }
        : { createdBy: store.signedInAccountId ?? '' }),
      hasEnded: time.value === 'past',
      ...(search ? { search } : {}),
    },
    first: ITEMS_PER_PAGE,
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
// whether the account has any saved or hosted events at all, ignoring tab, time and search
const savedAnyApi = useApiQuery({
  query: querySaved,
  variables: computed(() => ({
    createdBy: store.signedInAccountId ?? '',
    first: 1,
  })),
})
const hostedAnyApi = useApiQuery({
  query: queryEvents,
  variables: computed(() => ({
    condition: { createdBy: store.signedInAccountId ?? '' },
    first: 1,
  })),
})
const hasNoSavedOrHosted = computed(
  () =>
    !!savedAnyApi.data.value &&
    !!hostedAnyApi.data.value &&
    !savedAnyApi.data.value.allEventFavorites?.nodes.length &&
    !hostedAnyApi.data.value.allEvents?.nodes.length,
)
const api = await useApiData([eventsApi, savedApi])

// computations
const savedEvents = computed(() => {
  const nodes = savedApi.data.value?.allEventFavorites?.nodes

  if (!nodes) return

  // Deliberate shortcut: the saved events are matched by name in the browser, without the server's word stems and typo tolerance, as they are filtered here anyway; the SQL function named above would let the server search them too
  const searchLowerCase = search?.toLocaleLowerCase()

  return nodes
    .flatMap((node) => (node.eventByEventId ? [node.eventByEventId] : []))
    .filter(
      (event) =>
        !searchLowerCase ||
        event.name.toLocaleLowerCase().includes(searchLowerCase),
    )
    .filter(
      (event) => eventHasEnded(event, now.value) === (time.value === 'past'),
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
      : eventsApi.data.value?.allEvents?.nodes,
)
const hasNextPage = computed(() =>
  isWithoutData.value
    ? false
    : filter.value === 'saved'
      ? (savedEvents.value?.length ?? 0) > savedVisibleCount.value
      : eventsApi.data.value?.allEvents?.pageInfo.hasNextPage,
)

// methods
const loadMore = () => {
  if (filter.value === 'saved') {
    savedVisibleCount.value += ITEMS_PER_PAGE
    return
  }

  eventsAfter.value = eventsApi.data.value?.allEvents?.pageInfo.endCursor
}
</script>

<i18n lang="yaml">
de:
  attending: Dabei
  drafts: Entwürfe
  emptyAllDescription: Merke Dir Veranstaltungen beim Entdecken oder plane selbst eine.
  emptyAllTitle: Noch keine Veranstaltungen
  emptyAttendingPastDescription: Veranstaltungen, bei denen Du dabei warst, erscheinen hier, sobald sie vorbei sind.
  emptyAttendingPastTitle: Keine vergangenen Veranstaltungen, bei denen Du warst
  emptyAttendingUpcomingDescription: Veranstaltungen, für die Du eine Einladung annimmst oder denen Du beitrittst, erscheinen hier.
  emptyAttendingUpcomingTitle: Du bist noch bei nichts dabei
  emptyCreate: Veranstaltung planen
  emptyDiscover: Veranstaltungen entdecken
  emptyDraftsDescription: Veranstaltungen, die Du beginnst, aber noch nicht veröffentlichst, werden hier aufbewahrt.
  emptyDraftsTitle: Keine Entwürfe
  emptyHostingPastDescription: Veranstaltungen, die Du organisiert hast, erscheinen hier, sobald sie vorbei sind.
  emptyHostingPastTitle: Keine vergangenen Veranstaltungen von Dir
  emptyHostingUpcomingDescription: Plane eine Veranstaltung und lade Deine Leute ein. Sie erscheint dann hier.
  emptyHostingUpcomingTitle: Du veranstaltest noch nichts
  emptyInvitations: Einladungen
  emptySavedPastDescription: Gemerkte Veranstaltungen wandern hierher, sobald sie vorbei sind.
  emptySavedPastTitle: Keine vergangenen gemerkten Veranstaltungen
  emptySavedUpcomingDescription: Tippe bei einer Veranstaltung auf das Lesezeichen, um sie hier für später aufzuheben.
  emptySavedUpcomingTitle: Noch nichts gemerkt
  emptyShowUpcoming: Bevorstehende anzeigen
  filterLabel: Filter
  hosting: Von Dir
  past: Vergangen
  saved: Gemerkt
  timeLabel: Zeitraum
  upcoming: Bevorstehend
en:
  attending: Going
  drafts: Drafts
  emptyAllDescription: Save events while discovering, or plan one yourself.
  emptyAllTitle: No events yet
  emptyAttendingPastDescription: Events you attended appear here once they're over.
  emptyAttendingPastTitle: No past events you went to
  emptyAttendingUpcomingDescription: Events you accept an invitation to or join show up here.
  emptyAttendingUpcomingTitle: You're not going to anything yet
  emptyCreate: Plan an event
  emptyDiscover: Discover events
  emptyDraftsDescription: Events you start but don't publish yet are kept here.
  emptyDraftsTitle: No drafts
  emptyHostingPastDescription: Events you hosted appear here once they're over.
  emptyHostingPastTitle: No past events you hosted
  emptyHostingUpcomingDescription: Plan an event and invite your people. It shows up here.
  emptyHostingUpcomingTitle: You're not hosting anything yet
  emptyInvitations: Invitations
  emptySavedPastDescription: Saved events move here once they're over.
  emptySavedPastTitle: No past saved events
  emptySavedUpcomingDescription: Tap the bookmark on any event to keep it here for later.
  emptySavedUpcomingTitle: Nothing saved yet
  emptyShowUpcoming: Show upcoming
  filterLabel: Filter
  hosting: Hosting
  past: Past
  saved: Saved
  timeLabel: Time
  upcoming: Upcoming
</i18n>
