<template>
  <AppStep v-slot="attributes" :is-active="isActive">
    <LayoutPage v-bind="attributes">
      <LayoutPageResult :message="error?.message" type="error">
        <template #description>
          {{ t('globalTryAgain') }}
        </template>
      </LayoutPageResult>
      <template #bottom>
        <slot />
      </template>
    </LayoutPage>
  </AppStep>
</template>

<script setup lang="ts">
const { error = null } = defineProps<{
  error?: Error | null
  isActive?: boolean
}>()

const { t } = useI18n()
</script>
