<template>
  <div class="relative">
    <div
      v-if="$slots.icon"
      class="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-(--figma-neutral-level-6)"
    >
      <slot name="icon" />
    </div>
    <AppTypographySubheadline v-slot="attributes" variant="emphasized">
      <Input
        v-bind="attributes"
        :id
        :aria-invalid
        class="rounded-(--default-border-radius) bg-(--figma-neutral-level-1) px-6 py-4 pl-12 text-[17px] aria-invalid:border-(--figma-critic-red-middle-dark)"
        :disabled
        :model-value
        :placeholder
        :type
        @blur="emit('blur')"
        @input="emit('input', ($event.target as HTMLInputElement).value)"
      />
    </AppTypographySubheadline>
  </div>
</template>

<script setup lang="ts">
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
