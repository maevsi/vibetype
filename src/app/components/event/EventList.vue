<template>
  <div v-if="events?.length" class="flex flex-col items-center gap-4">
    <AppMap v-if="isMapVisible" :events />
    <div
      ref="listRef"
      class="relative w-full"
      :style="{ height: `${rowVirtualizer.getTotalSize()}px` }"
    >
      <div
        v-for="virtualRow in virtualItems"
        :key="virtualRow.index"
        :ref="
          (el) => {
            if (el) rowVirtualizer.measureElement(el as Element)
          }
        "
        :data-index="virtualRow.index"
        :style="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transform: `translateY(${virtualRow.start - scrollMargin}px)`,
        }"
      >
        <div class="pb-3">
          <EventCard :event="events[virtualRow.index]!" variant="compact" />
        </div>
      </div>
    </div>
  </div>
  <p v-else-if="!loading" class="text-center">{{ t('noEvents') }}</p>
</template>

<script setup lang="ts">
import { useWindowVirtualizer } from '@tanstack/vue-virtual'
import type { DeepReadonly } from 'vue'

import type { AppMapEvent } from '~/components/app/AppMap.vue'
import type { EventCardProps } from './card/EventCard.vue'

// compiler
const {
  isMapVisible = undefined,
  events = undefined,
  hasNextPage,
  loading = false,
} = defineProps<{
  isMapVisible?: boolean
  events?: DeepReadonly<(EventCardProps['event'] & AppMapEvent)[]>
  hasNextPage?: boolean
  loading?: boolean
}>()

const emit = defineEmits<{
  loadMore: []
}>()

// template
const { t } = useI18n()

// virtualization
const listRef = ref<HTMLElement | null>(null)
const scrollMargin = computed(() => listRef.value?.offsetTop ?? 0)

const rowVirtualizer = useWindowVirtualizer(
  computed(() => ({
    count: events?.length ?? 0,
    estimateSize: () => 120,
    overscan: 5,
    scrollMargin: scrollMargin.value,
  })),
)

const virtualItems = computed(() => rowVirtualizer.value.getVirtualItems())

watch(virtualItems, (items) => {
  const lastItem = items[items.length - 1]
  if (!lastItem) return
  if (lastItem.index >= (events?.length ?? 0) - 1 && hasNextPage) {
    emit('loadMore')
  }
})
</script>

<i18n lang="yaml">
de:
  noEvents: Keine Veranstaltungen verfügbar 😕
en:
  noEvents: No events available 😕
</i18n>
