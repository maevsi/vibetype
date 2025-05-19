<template>
  <td :class="cn('px-4 py-6', classProps)">
    <slot />
  </td>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
