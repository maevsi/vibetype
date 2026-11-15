<template>
  <div class="relative w-full" data-slot="input-group">
    <div
      v-if="$slots.prefix"
      class="pointer-events-none absolute top-1/2 left-4 flex -translate-y-1/2 text-fg-2"
      data-slot="input-prefix"
    >
      <slot name="prefix" />
    </div>
    <Input
      v-bind="$attrs"
      :class="
        cn($slots.prefix && 'pl-12', $slots.suffix && 'pr-14', classProps)
      "
      :model-value="model"
      @update:model-value="model = String($event)"
    />
    <div
      v-if="$slots.suffix"
      class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center"
      data-slot="input-suffix"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

defineOptions({ inheritAttrs: false })

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()

defineSlots<{
  prefix?: () => unknown
  suffix?: () => unknown
}>()

// a text input only ever yields strings, which spares every caller a conversion
const model = defineModel<string>({ default: '' })
</script>
