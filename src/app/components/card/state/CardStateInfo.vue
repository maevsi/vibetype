<template>
  <CardState :class="cn('bg-blue-600', classProps)">
    <slot />
  </CardState>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
