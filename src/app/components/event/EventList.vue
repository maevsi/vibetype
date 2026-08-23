<template>
  <div v-if="isLoading" class="flex flex-1 items-center justify-center">
    <AppLoaderLogo class="size-16" />
  </div>
  <div v-else-if="events?.length" class="flex flex-col items-center gap-4">
    <LazyAppMap v-if="isMapVisible" :events />
    <ul class="flex w-full flex-col gap-3">
      <li v-for="event in events" :key="event.rowId">
        <EventCard :event />
      </li>
    </ul>
    <ButtonColored
      v-if="hasNextPage"
      :aria-label="t('globalShowMore')"
      @click="emit('loadMore')"
    >
      {{ t('globalShowMore') }}
    </ButtonColored>
  </div>
  <p v-else class="text-center">{{ t('noEvents') }}</p>
</template>

<script setup lang="ts">
import type { DeepReadonly } from 'vue'

import type { AppMapEvent } from '~/components/app/AppMap.vue'
import type { EventCardProps } from './card/EventCard.vue'

// compiler
const {
  isMapVisible = undefined,
  isLoading = false,
  events = undefined,
  hasNextPage,
} = defineProps<{
  isMapVisible?: boolean
  isLoading?: boolean
  events?: DeepReadonly<(EventCardProps['event'] & AppMapEvent)[]>
  hasNextPage?: boolean
}>()

const emit = defineEmits<{
  loadMore: []
}>()

// template
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  noEvents: Keine Veranstaltungen verfügbar 😕
en:
  noEvents: No events available 😕
</i18n>
