<template>
  <div class="flex max-w-1/4 flex-col">
    <nav
      :class="
        cn(
          'sticky top-0 flex h-screen flex-col gap-4 border-r-1 border-(--semantic-base-line) bg-(--semantic-base-background) p-8 shadow-xs',
          classProps,
        )
      "
    >
      <LayoutMenuItemList />
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
