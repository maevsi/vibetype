<template>
  <div
    :class="
      cn('overflow-x-hidden rounded-large bg-surface-raised p-2', classProps)
    "
    data-slot="card"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
