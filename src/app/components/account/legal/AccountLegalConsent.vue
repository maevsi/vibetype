<template>
  <div class="flex grow flex-col">
    <div class="grow overflow-x-auto">
      <slot />
    </div>
    <FormAccountLegalConsent
      :id
      :disabled
      :label
      @agreement="emit('agreement')"
    />
  </div>
</template>

<script setup lang="ts">
const { disabled, id, label } = defineProps<{
  disabled?: boolean
  id: string
  label: string
}>()
const emit = defineEmits<{
  agreement: []
}>()
</script>
