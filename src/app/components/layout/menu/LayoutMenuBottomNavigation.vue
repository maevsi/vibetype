<template>
  <nav
    :aria-label="t('nav')"
    :class="
      cn(
        'sticky bottom-0 flex items-center justify-center gap-1 border-t-1 border-(--semantic-base-line) bg-(--semantic-base-background) p-2 shadow-xs',
        classProps,
      )
    "
  >
    <div
      :class="{
        flex: true,
        'pb-3': isApp && /^ios/.test((platform || '').toLowerCase()),
      }"
    >
      <LayoutMenuItemList />
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()

const { t } = useI18n()
const { isApp, platform } = usePlatform()
</script>

<i18n lang="yaml">
de:
  nav: Untere
en:
  nav: Bottom
</i18n>
