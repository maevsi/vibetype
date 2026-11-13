<template>
  <AppCard
    :class="
      cn(
        'relative isolate flex items-center gap-3 p-2 has-focus-visible:focus-ring',
        classProps,
      )
    "
    data-slot="card-button"
  >
    <div class="flex items-center p-2">
      <slot />
    </div>
    <div class="flex flex-1 flex-col">
      <!-- the overlay stretches the link over the whole card, so the card is clickable while its text stays a single link -->
      <AppButton
        :aria-label="title"
        class="focus-visible:ring-0"
        :disabled
        :is-external
        is-external-icon-disabled
        size="none"
        :to
        variant="ghost"
      >
        <span class="absolute inset-0 z-10" />
        <span class="font-bold">
          {{ title }}
        </span>
      </AppButton>
      <span v-if="description" class="opacity-60">
        {{ description }}
      </span>
    </div>
    <div class="p-2">
      <slot v-if="$slots.suffix" name="suffix" />
      <div v-else-if="to">
        <AppIconArrowForward />
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { cn } from '@/utils/shadcn'

const {
  class: classProps = undefined,
  description = undefined,
  disabled,
  isExternal,
  to = undefined,
} = defineProps<{
  class?: HTMLAttributes['class']
  description?: string
  disabled?: boolean
  isExternal?: boolean
  title: string
  to?: RouteLocationRaw
}>()

defineSlots<{
  default?: () => unknown
  suffix?: () => unknown
}>()
</script>
