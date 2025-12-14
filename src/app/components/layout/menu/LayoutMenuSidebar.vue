<template>
  <div class="flex max-w-1/4 flex-col">
    <nav
      :aria-label="t('nav')"
      :class="
        cn(
          'sticky top-0 flex h-screen flex-col gap-4 bg-(--base-background-nav-bar) p-8',
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

const { t } = useI18n()

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>

<i18n lang="yaml">
de:
  nav: Seitenleiste
en:
  nav: Sidebar
</i18n>
