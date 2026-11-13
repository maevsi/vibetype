<template>
  <div
    :aria-label="t('globalLoading')"
    :class="cn('flex h-full items-center justify-center', classProps)"
    data-slot="loader-ping"
    role="status"
  >
    <div class="flex w-1/2 items-center justify-center">
      <div class="aspect-square w-1/2 animate-ping rounded-full bg-fg-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { t } = useI18n()
</script>
