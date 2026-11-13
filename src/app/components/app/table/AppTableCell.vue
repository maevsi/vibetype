<template>
  <td :class="cn('px-4 py-6', classProps)" data-slot="table-cell">
    <slot />
  </td>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
