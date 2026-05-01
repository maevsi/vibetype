<template>
  <AppStep v-slot="attributes" :is-active="isActive">
    <LayoutPage v-bind="attributes">
      <div class="flex w-full max-w-md flex-col self-center px-3 lg:px-6">
        <slot />
      </div>
    </LayoutPage>
  </AppStep>
</template>

<script setup lang="ts">
defineProps<{
  isActive?: boolean
}>()
</script>
