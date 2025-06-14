<template>
  <AppIcon v-slot="attributes">
    <slot
      v-bind="attributes"
      :class="cn(attributes.class, 'size-16', classProps)"
    />
  </AppIcon>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
