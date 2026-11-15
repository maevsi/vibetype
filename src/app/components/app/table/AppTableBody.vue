<template>
  <tbody :class="cn('divide-y divide-line', classProps)" data-slot="table-body">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
