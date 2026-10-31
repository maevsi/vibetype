<script setup lang="ts">
import AppLogo from './AppLogo.vue'

const {
  locale,
  logoSource = undefined,
  title,
} = defineProps<{
  locale: AppLocale
  logoSource?: string
  title: string
}>()

defineOptions({
  name: 'AppEmail',
})
</script>

<template>
  <EHtml :lang="locale">
    <EHead>
      <title>
        {{ title }}
      </title>
      <EFont
        :fallback-font-family="['Helvetica', 'Arial', 'sans-serif']"
        font-family="Raleway"
        :web-font="{
          url: 'https://fonts.gstatic.com/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2',
          format: 'woff2',
        }"
      />
    </EHead>
    <EBody style="margin: 0">
      <EContainer
        style="background-color: #f0f0f0; max-width: 42.5em; padding: 0 2.5em"
      >
        <AppLogo :locale :logo-source />
        <slot />
      </EContainer>
    </EBody>
  </EHtml>
</template>
