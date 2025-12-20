<template>
  <AppContent>
    <LayoutPageTitle :title />
    <ColorScheme>
      <AppRadioGroup
        :default-value="colorMode.preference"
        :items="colorSchemes"
        @update:model-value="(value) => (colorMode.preference = value)"
      />
      <template #placeholder>
        <AppRadioGroup :items="colorSchemes" />
      </template>
    </ColorScheme>
  </AppContent>
</template>

<script setup lang="ts">
// compiler
definePageMeta({
  layout: 'default-no-header',
})

// page
const { t } = useI18n()
const title = t('title')

// color mode
const colorMode = useColorMode()
const colorSchemes = [
  { label: t('colorSchemeSystem'), value: 'system' },
  { label: t('colorSchemeLight'), value: 'light' },
  {
    label: t('colorSchemeDark'),
    value: 'dark',
  },
]
</script>

<i18n lang="yaml">
de:
  colorSchemeDark: Dunkel
  colorSchemeLight: Hell
  colorSchemeSystem: System
  title: Farbschema
en:
  colorSchemeDark: Dark
  colorSchemeLight: Light
  colorSchemeSystem: System
  title: Color scheme
</i18n>
