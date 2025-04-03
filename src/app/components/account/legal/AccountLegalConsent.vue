<template>
  <div class="flex grow flex-col">
    <div class="grow overflow-x-auto">
      <slot />
    </div>
    <FormAccountLegalConsent :label @agreement="emit('agreement')" />
  </div>
</template>

<script setup lang="ts">
const { label } = defineProps<{
  label: string
}>()
const emit = defineEmits<{
  agreement: []
}>()
</script>
