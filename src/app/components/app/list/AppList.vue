<template>
  <ul
    :class="cn('flex flex-col divide-y divide-line', classProps)"
    data-slot="list"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
