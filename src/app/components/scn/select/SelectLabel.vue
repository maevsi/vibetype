<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SelectLabel } from 'reka-ui'
import type { SelectLabelProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'

const props = defineProps<
  SelectLabelProps & { class?: HTMLAttributes['class'] }
>()
</script>

<template>
  <SelectLabel
    :class="cn('px-2 py-1.5 text-sm font-medium', props.class)"
    data-slot="select-label"
  >
    <slot />
  </SelectLabel>
</template>
