<template>
  <Card :class="cn('border-0 text-center font-medium text-white', classProps)">
    <slot />
  </Card>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
