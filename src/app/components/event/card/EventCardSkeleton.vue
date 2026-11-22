<template>
  <div
    aria-hidden="true"
    class="group flex items-center gap-4 rounded-large p-2 data-[variant=highlight]:bg-surface-raised data-[variant=recommendation]:flex-col data-[variant=recommendation]:items-stretch data-[variant=recommendation]:gap-2 data-[variant=recommendation]:bg-surface-raised"
    :data-variant="variant"
  >
    <Skeleton
      class="size-20 shrink-0 rounded-pill group-data-[variant=highlight]:h-30 group-data-[variant=highlight]:w-40 group-data-[variant=highlight]:bg-surface group-data-[variant=recommendation]:aspect-[4/3] group-data-[variant=recommendation]:size-auto group-data-[variant=recommendation]:max-h-64 group-data-[variant=recommendation]:rounded-medium group-data-[variant=recommendation]:bg-surface"
    />
    <div
      class="flex min-w-0 flex-1 flex-col gap-2 group-data-[variant=recommendation]:px-1 group-data-[variant=recommendation]:pb-1"
    >
      <Skeleton class="h-5 w-3/4 group-data-[variant]:bg-surface" />
      <Skeleton class="h-4 w-1/2 group-data-[variant]:bg-surface" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventCardProps } from './EventCard.vue'

const { variant = undefined } = defineProps<{
  variant?: EventCardProps['variant']
}>()
</script>
