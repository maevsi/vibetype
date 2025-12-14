<template>
  <div
    :class="cn('self-center justify-self-center', classProps)"
    :title="t('globalLoading')"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()

const { t } = useI18n()
</script>
