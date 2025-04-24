<template>
  <slot v-bind="{ 'aria-hidden': !isActive, class: 'aria-hidden:hidden' }" />
</template>

<script setup lang="ts">
const { isActive } = defineProps<{
  isActive: boolean
}>()
</script>
