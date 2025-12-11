<template>
  <slot :class="cn('size-6', classProps)" role="graphics-symbol img" :title />
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined, title = undefined } = defineProps<
  {
    class?: HtmlHTMLAttributes['class']
  } & { title?: string }
>()
</script>
