<template>
  <AppButton
    v-for="colorScheme in [
      { name: 'system', title: t('colorSchemeSystem') },
      { name: 'light', title: t('colorSchemeLight') },
      { name: 'dark', title: t('colorSchemeDark') },
    ]"
    :key="`${colorScheme.name}${isFallback ? 'Fallback' : ''}`"
    :aria-label="colorScheme.title"
    :class="{
      disabled: !isFallback && colorMode.preference === colorScheme.name,
    }"
    is-link-colored
    @click="colorMode.preference = colorScheme.name"
  >
    {{ colorScheme.title }}
  </AppButton>
</template>

<script setup lang="ts">
const { isFallback } = defineProps<{
  isFallback?: boolean
}>()

const colorMode = useColorMode()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  colorSchemeDark: Dunkel
  colorSchemeLight: Hell
  colorSchemeSystem: System
en:
  colorSchemeDark: Dark
  colorSchemeLight: Light
  colorSchemeSystem: System
</i18n>
