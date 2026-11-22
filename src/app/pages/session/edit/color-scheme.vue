<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <ColorScheme>
        <AppRadioGroup
          :aria-label="title"
          :default-value="colorMode.preference"
          :items="colorSchemes"
          @update:model-value="
            (value: AcceptableValue) => (colorMode.preference = String(value))
          "
        />
        <template #placeholder>
          <AppRadioGroup :aria-label="title" :items="colorSchemes" />
        </template>
      </ColorScheme>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

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
