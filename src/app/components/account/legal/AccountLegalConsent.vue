<template>
  <div class="flex grow flex-col">
    <div class="grow overflow-x-auto">
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
