<template>
  <AppStep v-slot="attributes" :is-active="isActive">
    <LayoutPage v-bind="attributes">
      <LayoutPageResult type="error">
        <span v-if="error?.message">
          {{ error.message }}
        </span>
        <template #description>
          {{ translatedDescription }}
        </template>
      </LayoutPageResult>
      <template #bottom>
        <slot />
      </template>
    </LayoutPage>
  </AppStep>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    description?: string
    error?: Error | null
    isActive?: boolean
  }>(),
  {
    description: 'globalTryAgain',
    error: null,
    isActive: false,
  },
)

const { t } = useI18n()

const translatedDescription = computed(() => {
  if (props.description === 'globalTryAgain') return t('globalTryAgain')
  return props.description || t('globalTryAgain')
})
</script>
