<template>
  <slot :class="cn('text-sm font-normal', classProps)" />
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
