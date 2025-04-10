<template>
  <nav
    :class="
      cn(
        'sticky bottom-0 flex items-center justify-center gap-1 border-t-1 border-(--semantic-base-line) bg-(--semantic-base-background) px-2 py-2 shadow-xs',
        classProps,
      )
    "
  >
    <LayoutMenuItemList />
  </nav>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
