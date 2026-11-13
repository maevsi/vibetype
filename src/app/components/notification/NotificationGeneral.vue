<template>
  <AppCard>
    <div class="flex items-center gap-4">
      <div class="px-2">
        <slot name="icon" />
      </div>
      <div class="flex flex-1 items-center gap-2">
        <NotificationIndicator v-if="isUnread" />
        <span>
          <span class="font-bold">{{ category }}</span>
          {{ message }}
        </span>
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
const {
  category,
  isUnread = false,
  message,
} = defineProps<{
  category: string
  isUnread?: boolean
  message: string
}>()
</script>
