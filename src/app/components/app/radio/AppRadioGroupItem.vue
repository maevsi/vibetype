<template>
  <div>
    <RadioGroupItem :id="templateIdLabel" :value />
    <Label :for="templateIdLabel">
      <span class="text-body">
        <slot />
      </span>
    </Label>
  </div>
</template>

<script setup lang="ts">
const { value } = defineProps<{
  value: string
}>()

const templateIdLabel = useId()
</script>
