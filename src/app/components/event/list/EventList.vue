<template>
  <div class="mb-4">
    <div>
      <div v-if="allEvents.length" class="flex flex-col items-center gap-4">
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

export interface Props {
  events?: EventItemFragment[]
  hasNextPage?: boolean
  accountId?: string
}

const props = withDefaults(defineProps<Props>(), {
  events: undefined,
  hasNextPage: undefined,
  accountId: undefined,
})

const emit = defineEmits<{
  loadMore: []
}>()

const { t } = useI18n()
const after = ref<string>()
const storageStrategy = LocalStorageStrategy.getInstance()
const draftEvents = ref<DraftEvent[]>([])

const eventsQuery = !props.events
  ? await zalgo(
      useAllEventsQuery({
        after,
        createdBy: props.accountId,
        first: ITEMS_PER_PAGE,
      }),
    )
  : null

const regularEvents = computed(() => {
  if (props.events) {
    return props.events
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
