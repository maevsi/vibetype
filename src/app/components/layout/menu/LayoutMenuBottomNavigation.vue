<template>
  <!-- z-1000 for above map -->
  <nav
    :aria-label="t('nav')"
    :class="
      cn(
        'sticky bottom-0 z-1000 flex items-center justify-around bg-(--base-background-nav-bar) p-2 shadow-xs',
        isIos && 'pb-6',
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
