<template>
  <span
    :class="cn('text-lg leading-[128%] font-bold tracking-[0.15%]', classProps)"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
