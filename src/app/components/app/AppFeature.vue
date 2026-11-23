<template>
  <div
    v-if="isEnabled || runtimeConfig.public.vio.environment !== 'production'"
    class="feature-preview"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const { feature } = defineProps<{
  feature: FeatureFlag
}>()

const { isFeatureEnabled } = useFeatureFlags()
const isEnabled = isFeatureEnabled(feature)

const runtimeConfig = useRuntimeConfig()
</script>
