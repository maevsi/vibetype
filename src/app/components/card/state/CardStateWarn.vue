<template>
  <CardState :class="cn('bg-yellow-600', classProps)">
    <slot />
  </CardState>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
