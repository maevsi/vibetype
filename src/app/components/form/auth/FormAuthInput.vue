<template>
  <div class="relative">
    <div
      v-if="$slots.icon"
      class="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-(--semantic-base-text-secondary)"
    >
      <slot name="icon" />
    </div>
    <Input
      :id
      :aria-invalid="ariaInvalid"
      :aria-label="placeholder"
      :class="[
        cn(
          'h-13 rounded-2xl border-transparent bg-(--semantic-base-surface-1) pl-12 text-[17px]',
          { 'border-(--semantic-error-strong)': ariaInvalid },
        ),
      ]"
      :disabled
      :model-value="modelValue"
      :placeholder
      :type
      @blur="emit('blur')"
      @input="emit('input', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'

defineProps<{
  ariaInvalid?: boolean
  disabled?: boolean
  id?: string
  modelValue: string
  placeholder?: string
  type: string
}>()

const emit = defineEmits<{
  blur: []
  input: [value: string]
}>()
</script>
