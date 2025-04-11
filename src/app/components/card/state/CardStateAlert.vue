<template>
  <CardState :class="cn('bg-red-600', classProps)" role="alert">
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
