<template>
  <div>
    <input
      :id="`input-${formKey}`"
      class="rounded-sm"
      :disabled="isDisabled"
      type="checkbox"
      :checked="value"
      @change="emit('change', ($event.target as HTMLInputElement).checked)"
    />
    <label class="pl-2" :for="`input-${formKey}`"><slot /></label>
  </div>
</template>

<script setup lang="ts">
const { formKey, isDisabled, value } = defineProps<{
  formKey?: string
  isDisabled?: boolean
  value?: boolean
}>()

const emit = defineEmits<{
  change: [change: boolean]
}>()
</script>
