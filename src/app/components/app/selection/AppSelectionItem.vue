<template>
  <label
    :class="
      cn(
        'flex cursor-pointer items-start gap-4 has-disabled:cursor-not-allowed has-disabled:opacity-40',
        'group-data-[variant=card]/selection:min-h-14 group-data-[variant=card]/selection:items-center group-data-[variant=card]/selection:rounded-small group-data-[variant=card]/selection:border-2 group-data-[variant=card]/selection:border-line group-data-[variant=card]/selection:px-4 group-data-[variant=card]/selection:py-2 group-data-[variant=card]/selection:has-data-[state=checked]:border-action-primary',
        props.class,
      )
    "
    data-slot="selection-item"
  >
    <slot
      :aria-describedby="$slots.description ? templateIdDescription : undefined"
      :aria-labelledby="templateIdLabel"
      name="control"
    />
    <!-- the padding centers the first text line on the 24px control -->
    <span
      class="flex min-w-0 flex-1 flex-col gap-1 pt-0.5 group-data-[variant=card]/selection:pt-0"
    >
      <span :id="templateIdLabel" class="text-body text-fg-1">
        <slot />
      </span>
      <span
        v-if="$slots.description"
        :id="templateIdDescription"
        class="text-body-small text-fg-2"
      >
        <slot name="description" />
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()

const templateIdDescription = useId()
const templateIdLabel = useId()
</script>
