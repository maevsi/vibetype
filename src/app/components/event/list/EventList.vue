<template>
  <div class="mb-4">
    <div>
      <div v-if="allEvents.length" class="flex flex-col items-center gap-4">
        <AppMap v-if="isDevelopmentModeActive" :events />
        <ul class="flex w-full flex-col gap-4">
          <EventListItem
            v-for="event in allEvents"
            :key="event.id"
            :event="event"
            :is-draft="isDraftEvent(event)"
          />
        </ul>
        <ButtonColored
          v-if="hasNextPage"
          :aria-label="t('globalShowMore')"
          @click="emit('loadMore')"
        >
          {{ t('globalShowMore') }}
        </ButtonColored>
      </div>
    </div>
    <div v-if="!allEvents.length" class="mt-4 text-center">
      <p>{{ t('noEvents') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAllEventsQuery } from '~~/gql/documents/queries/event/eventsAll'
import { getEventItem } from '~~/gql/documents/fragments/eventItem'
import {
  LocalStorageStrategy,
  type DraftEvent,
} from '~/utils/storage/LocalStorageStrategy'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { events = undefined, hasNextPage } = defineProps<{
  events?: EventItemFragment[]
  hasNextPage?: boolean
}>()

const store = useStore()

const emit = defineEmits<{
  loadMore: []
}>()

const { t } = useI18n()
const { isDevelopmentModeActive } = useDevelopmentModeTrigger()
const after = ref<string>()
const storageStrategy = LocalStorageStrategy.getInstance()
const draftEvents = ref<DraftEvent[]>([])

const eventsQuery = events
  ? await zalgo(
      useAllEventsQuery({
        after,
        createdBy: store.signedInAccountId,
        first: ITEMS_PER_PAGE,
      }),
    )
  : null

const regularEvents = computed(() => {
  if (events) {
    return events
  }
  return (
    eventsQuery?.data.value?.allEvents?.nodes
      .map((x) => getEventItem(x))
      .filter(isNeitherNullNorUndefined) || []
  )
})

onMounted(async () => {
  draftEvents.value = await storageStrategy.getAllEvents()
})

const allEvents = computed(() => [...draftEvents.value, ...regularEvents.value])

const isDraftEvent = (event: EventItemFragment | DraftEvent): boolean =>
  (event as DraftEvent).isDraft === true
</script>

<i18n lang="yaml">
de:
  noEvents: Keine Veranstaltungen verfügbar 😕
en:
  noEvents: No events available 😕
</i18n>
