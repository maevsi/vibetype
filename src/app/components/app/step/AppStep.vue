<template>
  <slot v-bind="{ hidden: !isActive }" />
</template>

<script setup lang="ts">
const { isActive } = defineProps<{
  isActive: boolean
}>()
</script>
