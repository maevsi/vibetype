<template>
  <ol
    :class="cn('flex items-center justify-center gap-1', classProps)"
    data-slot="step-progress"
  >
    <li
      v-for="key in count"
      :key
      :aria-current="key === index ? 'step' : undefined"
      class="rounded-full p-1.5"
      :class="[
        key === index ? 'border-4 border-success-tint' : 'm-1',
        key <= index ? 'bg-action-primary' : 'bg-line',
      ]"
    />
  </ol>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  class: classProps = undefined,
  count,
  index,
} = defineProps<{
  class?: HTMLAttributes['class']
  count: number
  index: number
}>()
</script>
