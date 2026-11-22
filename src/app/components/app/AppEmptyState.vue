<template>
  <section
    :aria-labelledby="templateIdTitle"
    :class="
      cn(
        'flex flex-col items-center gap-4 rounded-medium bg-surface-raised p-8 text-center sm:p-12',
        classProps,
      )
    "
    data-slot="empty-state"
  >
    <div
      v-if="$slots.icon"
      aria-hidden="true"
      class="flex size-12 items-center justify-center text-fg-3 [&_svg]:size-12"
    >
      <slot name="icon" />
    </div>
    <div class="flex flex-col gap-1">
      <h2 :id="templateIdTitle" class="text-headline text-balance text-fg-1">
        {{ title }}
      </h2>
      <p v-if="description" class="text-body-small text-pretty text-fg-2">
        {{ description }}
      </p>
    </div>
    <div
      v-if="$slots.default"
      class="flex w-full flex-col items-center justify-center gap-2 sm:flex-row"
    >
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  class: classProps = undefined,
  description = undefined,
  title,
} = defineProps<{
  class?: HtmlHTMLAttributes['class']
  description?: string
  title: string
}>()

// template
const templateIdTitle = useId()
</script>
