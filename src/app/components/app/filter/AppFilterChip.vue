<template>
  <button
    :aria-label="`${label}, ${stateLabel}`"
    :class="
      cn(
        'inline-flex h-10 items-center gap-2 rounded-large border border-line bg-surface-raised px-4 text-body-small text-fg-1 transition-colors hover:bg-line',
        'data-[state=included]:border-action-primary data-[state=included]:bg-action-primary data-[state=included]:text-on-action-primary data-[state=included]:hover:bg-action-primary-hover',
        'data-[state=excluded]:border-error data-[state=excluded]:text-error data-[state=excluded]:line-through',
        classProps,
      )
    "
    data-slot="filter-chip"
    :data-state="state ?? 'neutral'"
    type="button"
    @click="cycle"
  >
    <AppIconPlus
      v-if="state === 'included'"
      aria-hidden="true"
      class="size-4 shrink-0"
    />
    <AppIconMinus
      v-else-if="state === 'excluded'"
      aria-hidden="true"
      class="size-4 shrink-0"
    />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

export type AppFilterChipState = 'excluded' | 'included'

const {
  class: classProps = undefined,
  label,
  stateLabels,
} = defineProps<{
  class?: HTMLAttributes['class']
  label: string
  stateLabels: Record<AppFilterChipState | 'neutral', string>
}>()

// data
const state = defineModel<AppFilterChipState | undefined>()

// computations
const stateLabel = computed(() => stateLabels[state.value ?? 'neutral'])

// methods
const cycle = () => {
  state.value =
    state.value === undefined
      ? 'included'
      : state.value === 'included'
        ? 'excluded'
        : undefined
}
</script>
