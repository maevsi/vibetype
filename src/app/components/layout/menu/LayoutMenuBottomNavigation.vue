<template>
  <!-- z-1000 for above map -->
  <nav
    :aria-label="t('nav')"
    :class="
      cn(
        'sticky bottom-0 z-1000 flex min-h-16 items-center justify-center bg-glass-raised px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-xl',
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

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  nav: Untere
en:
  nav: Bottom
</i18n>
