<template>
  <li
    :class="cn('flex min-h-16 items-center gap-4 py-1', classProps)"
    data-slot="list-item"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
