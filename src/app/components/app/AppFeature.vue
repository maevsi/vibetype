<template>
  <div
    v-if="isEnabled || runtimeConfig.public.vio.environment !== 'production'"
    class="relative"
  >
    <slot />
    <div
      class="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,#fb0,#fb0_10px,#0000_10px,#0000_30px)] opacity-20"
    />
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
