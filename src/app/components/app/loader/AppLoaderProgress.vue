<template>
  <AppLoaderPlaceholder class="flex-col gap-2">
    <AppLoaderLogo class="size-16" />
    <p class="text-body-small text-fg-2">
      {{ t('progress', { count, total }) }}
    </p>
  </AppLoaderPlaceholder>
</template>

<script setup lang="ts">
defineProps<{
  count: number
  total: number
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  progress: Lade {count} von {total} …
en:
  progress: Loading {count} of {total} …
</i18n>
