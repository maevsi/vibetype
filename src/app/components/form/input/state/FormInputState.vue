<template>
  <TypographyLabel v-slot="{ class: classAttribute }">
    <div :class="cn('flex items-center gap-1', classAttribute, classProp)">
      <slot />
    </div>
  </TypographyLabel>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProp } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
