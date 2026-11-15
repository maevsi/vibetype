<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/shadcn'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
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
  <textarea
    v-model="modelValue"
    :class="
      cn(
        'flex field-sizing-content min-h-28 w-full rounded-medium bg-surface-raised px-6 py-4 text-body text-fg-1 outline-none placeholder:text-fg-3 focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-inset disabled:pointer-events-none disabled:opacity-40 aria-invalid:ring-2 aria-invalid:ring-error aria-invalid:ring-inset',
        props.class,
      )
    "
    data-slot="textarea"
  />
</template>
