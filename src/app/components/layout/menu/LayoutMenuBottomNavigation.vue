<template>
  <nav
    :aria-label="t('nav')"
    :class="
      cn(
        'sticky flex items-center justify-center gap-1 border-t-1 border-(--semantic-base-line) bg-(--semantic-base-background) p-2 shadow-xs',
        {
          'bottom-2': platform === 'ios' && isApp,
          'bottom-0': !platform || platform !== 'ios' || !isApp,
        },
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
const { isApp, platform } = usePlatform()
</script>

<i18n lang="yaml">
de:
  nav: Untere
en:
  nav: Bottom
</i18n>
