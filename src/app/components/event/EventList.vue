<template>
  <div v-if="events?.length" class="flex flex-col items-center gap-4">
    <AppMap v-if="isMapShown" :events />
    <div v-if="isGroupedByDay" class="flex w-full flex-col gap-8">
      <section
        v-for="eventGroup in eventGroups"
        :key="eventGroup.key"
        class="flex flex-col gap-4"
      >
        <h2 class="text-title3">
          {{ eventGroup.heading }}
          <span v-if="eventGroup.suffix" class="text-headline text-fg-2">
            {{ eventGroup.suffix }}
          </span>
        </h2>
        <ul class="flex flex-col gap-3">
          <li v-for="event in eventGroup.events" :key="event.rowId">
            <EventCard
              :badge
              :distance-kilometers="getDistanceKilometersEvent(event)"
              :event
            />
          </li>
        </ul>
      </section>
    </div>
    <ul v-else class="flex w-full flex-col gap-3">
      <li v-for="event in events" :key="event.rowId">
        <EventCard
          :badge
          :distance-kilometers="getDistanceKilometersEvent(event)"
          :event
        />
      </li>
    </ul>
    <AppButton
      v-if="hasNextPage"
      :aria-label="t('globalShowMore')"
      :loading="isLoading"
      @click="emit('loadMore')"
    >
      {{ t('globalShowMore') }}
    </AppButton>
  </div>
  <AppLoaderPlaceholder
    v-else-if="isLoading"
    class="flex-col items-stretch justify-start gap-3"
  >
    <EventCardSkeleton v-for="index in 3" :key="index" />
  </AppLoaderPlaceholder>
  <div v-else class="flex flex-col items-center gap-3 py-12 text-center">
    <AppIconCalendar aria-hidden="true" class="size-12 text-fg-3" />
    <p class="text-fg-2">{{ t('noEvents') }}</p>
  </div>
</template>

<script setup lang="ts">
import type { DeepReadonly } from 'vue'

import type { AppMapEvent } from '~/components/app/AppMap.vue'
import { getDistanceKilometersNearest } from '~~/shared/utils/distance'
import {
  getPreferenceEventLocationItem,
  useAllPreferenceEventLocationsQuery,
} from '~~/shared/utils/preference/eventLocation'
import type { EventCardBadge, EventCardProps } from './card/EventCard.vue'

// compiler
type EventListEvent = DeepReadonly<EventCardProps['event'] & AppMapEvent>
const {
  badge = undefined,
  isGroupedByDay = false,
  isLoading = false,
  isMapVisible = false,
  events = undefined,
  hasNextPage,
} = defineProps<{
  badge?: EventCardBadge
  isGroupedByDay?: boolean
  isLoading?: boolean
  isMapVisible?: boolean
  events?: EventListEvent[]
  hasNextPage?: boolean
}>()

const emit = defineEmits<{
  loadMore: []
}>()

// map
const isMapShown = computed(
  () =>
    isMapVisible && events?.some((event) => event.addressByAddressId?.location),
)

// distance
const store = useStore()
// preferences are readable by accounts only
const preferenceEventLocationsQuery = store.signedInAccountId
  ? useAllPreferenceEventLocationsQuery()
  : undefined
const preferenceEventLocations = computed(
  () =>
    preferenceEventLocationsQuery?.data.value?.allPreferenceEventLocations?.nodes.flatMap(
      (node) => {
        const location = getPreferenceEventLocationItem(node)?.location
        return location ? [location] : []
      },
    ) ?? [],
)
const getDistanceKilometersEvent = (event: EventListEvent) => {
  const location = event.addressByAddressId?.location
  return event.isInPerson && location
    ? getDistanceKilometersNearest(preferenceEventLocations.value, location)
    : undefined
}

// grouping
const { locale, t } = useI18n()
const now = useNow()
// The server may not know the viewer's time zone, so the first render uses the
// one the server rendered with and only switches to the browser's once mounted,
// as day headings that differ between the two would fail to hydrate
const timeZoneViewer = useTimeZone()
const timeZone = useState(STATE_KEY_TIME_ZONE, () => timeZoneViewer || 'UTC')
onMounted(() => {
  if (timeZoneViewer) timeZone.value = timeZoneViewer
})
const eventGroups = computed(() => {
  if (!isGroupedByDay || !events) return []

  const yearCurrent = Intl.DateTimeFormat('en-US', {
    timeZone: timeZone.value,
    year: 'numeric',
  }).format(now.value)

  return groupByDay({
    getDate: (event) => event.start,
    items: events,
    now: now.value,
    timeZone: timeZone.value,
  }).map(({ day, items, relativeDay }) => ({
    events: items,
    heading:
      relativeDay === 'today'
        ? t('today')
        : relativeDay === 'tomorrow'
          ? t('tomorrow')
          : // the day is midnight UTC of the calendar day, see `groupByDay`
            Intl.DateTimeFormat(locale.value, {
              timeZone: 'UTC',
              weekday: 'long',
            }).format(day),
    key: items[0]?.rowId,
    suffix: relativeDay
      ? undefined
      : t('daySuffix', {
          date: Intl.DateTimeFormat(locale.value, {
            day: 'numeric',
            month: 'short',
            timeZone: 'UTC',
            year:
              String(day.getUTCFullYear()) === yearCurrent
                ? undefined
                : 'numeric',
          }).format(day),
        }),
  }))
})
</script>

<i18n lang="yaml">
de:
  daySuffix: / {date}
  noEvents: Keine Veranstaltungen gefunden
  today: Heute
  tomorrow: Morgen
en:
  daySuffix: / {date}
  noEvents: No events found
  today: Today
  tomorrow: Tomorrow
</i18n>
