<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/shadcn'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-13 w-full min-w-0 rounded-medium bg-surface-raised px-6 text-body text-fg-1 outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-body file:text-fg-1 placeholder:text-fg-3 focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-inset disabled:pointer-events-none disabled:opacity-40 aria-invalid:ring-2 aria-invalid:ring-error aria-invalid:ring-inset',
        props.class,
      )
    "
    data-slot="input"
  />
</template>
