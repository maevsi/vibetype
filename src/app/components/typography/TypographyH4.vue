<template>
  <span :class="cn('text-3xl font-semibold', classProps)">
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
