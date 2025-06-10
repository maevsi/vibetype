<template>
  <Card
    :class="
      cn(
        'has-focus-visible:focus-ring relative isolate flex items-center gap-3 p-2',
        classProps,
      )
    "
  >
    <div class="flex items-center p-2">
      <slot />
    </div>
    <div class="flex flex-1 flex-col">
      <AppButton
        :aria-label="title"
        class="focus-visible:ring-0"
        :disabled="isDisabled"
        :is-external="isExternal"
        is-external-icon-disabled
        :to="to"
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
      <slot v-if="$slots.iconSecondary" name="iconSecondary" />
      <div v-else-if="to">
        <AppIconArrowForward />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  class: classProps = undefined,
  description = undefined,
  isDisabled,
  isExternal,
  to = undefined,
} = defineProps<
  {
    description?: string
    isDisabled?: boolean
    isExternal?: boolean
    title: string
    to?: RouteLocationRaw
  } & { class?: HtmlHTMLAttributes['class'] }
>()
</script>
