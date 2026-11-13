<template>
  <th
    :class="cn('px-3 py-6 text-left text-caption uppercase', classProps)"
    data-slot="table-head"
  >
    <slot />
  </th>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
