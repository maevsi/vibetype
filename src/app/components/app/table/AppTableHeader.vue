<template>
  <thead
    :class="cn('sticky top-0 z-10 bg-surface-raised', classProps)"
    data-slot="table-header"
  >
    <slot />
  </thead>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
