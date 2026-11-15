<template>
  <!-- z-1000 for above map -->
  <nav
    :aria-label="t('nav')"
    :class="
      cn(
        'sticky bottom-0 z-1000 flex h-16 items-center justify-center bg-glass-raised px-4 py-2 backdrop-blur-xl',
        isIos && 'h-21 pb-[calc(0.5rem+21px)]',
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
const { isIos } = usePlatform()
</script>

<i18n lang="yaml">
de:
  nav: Untere
en:
  nav: Bottom
</i18n>
