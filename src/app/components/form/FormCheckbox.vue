<template>
  <div class="flex items-start gap-4">
    <input
      :id="`input-${formKey}`"
      :checked="value"
      class="mt-1.5 rounded-sm"
      :disabled="isDisabled"
      type="checkbox"
      @change="emit('change', ($event.target as HTMLInputElement).checked)"
    />
    <label :for="`input-${formKey}`"><slot /></label>
  </div>
</template>

<script setup lang="ts">
const {
  formKey = undefined,
  isDisabled,
  value,
} = defineProps<{
  formKey?: string
  isDisabled?: boolean
  value?: boolean
}>()

const emit = defineEmits<{
  change: [change: boolean]
}>()
</script>
