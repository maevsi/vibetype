<template>
  <div class="flex flex-1 flex-col">
    <div class="flex-1 overflow-x-auto px-3">
      <slot />
    </div>
    <FormAccountLegalConsent :disabled :label @agreement="emit('agreement')" />
  </div>
</template>

<script setup lang="ts">
const { disabled, label } = defineProps<{
  disabled?: boolean
  label: string
}>()
const emit = defineEmits<{
  agreement: []
}>()
</script>
