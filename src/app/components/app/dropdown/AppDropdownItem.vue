<template>
  <DropdownMenuItem
    :class="cn('rounded-lg px-4 py-3 font-semibold', classProps)"
  >
    <slot />
  </DropdownMenuItem>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
