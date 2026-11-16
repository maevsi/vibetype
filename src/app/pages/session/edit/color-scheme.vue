<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>
      {{ title }}
      <template #back>
        <ButtonIconBackRoute />
      </template>
    </LayoutTopBar>
    <LayoutPage>
      <ColorScheme>
        <AppRadioGroup
          class="gap-0 *:min-h-12"
          :default-value="colorMode.preference"
          :items="colorSchemes"
          @update:model-value="
            (value: AcceptableValue) => (colorMode.preference = String(value))
          "
        />
        <template #placeholder>
          <AppRadioGroup class="gap-0 *:min-h-12" :items="colorSchemes" />
        </template>
      </ColorScheme>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'

// compiler
definePageMeta({
  layout: 'default-no-header',
})

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
