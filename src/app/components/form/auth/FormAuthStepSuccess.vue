<template>
  <AppStepPanel v-slot="attributes" :is-active="isActive">
    <LayoutPage v-bind="attributes">
      <div class="flex flex-col">
        <slot />
      </div>
    </LayoutPage>
  </AppStepPanel>
</template>

<script setup lang="ts">
defineProps<{
  isActive?: boolean
}>()
</script>
