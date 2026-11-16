<template>
  <div
    aria-hidden="true"
    class="group flex animate-pulse items-center gap-4 rounded-large p-2 data-[variant=highlight]:bg-surface-raised data-[variant=recommendation]:flex-col data-[variant=recommendation]:items-stretch data-[variant=recommendation]:gap-2 data-[variant=recommendation]:bg-surface-raised"
    :data-variant="variant"
  >
    <div
      class="size-20 shrink-0 rounded-pill bg-surface-raised group-data-[variant=highlight]:h-30 group-data-[variant=highlight]:w-40 group-data-[variant=highlight]:bg-surface group-data-[variant=recommendation]:aspect-[4/3] group-data-[variant=recommendation]:size-auto group-data-[variant=recommendation]:rounded-medium group-data-[variant=recommendation]:bg-surface"
    />
    <div
      class="flex min-w-0 flex-1 flex-col gap-2 group-data-[variant=recommendation]:px-1 group-data-[variant=recommendation]:pb-1"
    >
      <div
        class="h-5 w-3/4 rounded-small bg-surface-raised group-data-[variant]:bg-surface"
      />
      <div
        class="h-4 w-1/2 rounded-small bg-surface-raised group-data-[variant]:bg-surface"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventCardProps } from './EventCard.vue'

const { variant = undefined } = defineProps<{
  variant?: EventCardProps['variant']
}>()
</script>
