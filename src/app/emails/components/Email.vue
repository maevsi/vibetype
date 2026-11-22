<script setup lang="ts">
import { THEME_COLOR_DARK } from '#shared/utils/constants'

import AppLogo from './AppLogo.vue'

const { locale, title } = defineProps<{
  locale: AppLocale
  title: string
}>()

defineOptions({
  name: 'AppEmail',
})

const { siteUrl } = useSiteUrl()
const fontUrl = new URL(
  '/assets/static/fonts/raleway-latin-wght-normal.woff2',
  siteUrl,
).href

// inline styles stay the light default for clients that ignore this media query
const colorSchemeStyle = `
  :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {
    .button {
      background-color: #fff !important;
      color: #000 !important;
    }

    .container {
      background-color: ${THEME_COLOR_DARK} !important;
    }

    .link {
      color: #35de51 !important;
    }

    .logo-dark {
      display: block !important;
    }

    .logo-light {
      display: none !important;
    }

    .profile-picture {
      filter: invert(1);
    }

    .text {
      color: #fff !important;
    }

    .text-secondary {
      color: #9ca09d !important;
    }
  }
`
</script>

<template>
  <EHtml :lang="locale">
    <EHead>
      <title>
        {{ title }}
      </title>
      <meta content="light dark" name="color-scheme" />
      <meta content="light dark" name="supported-color-schemes" />
      <EStyle>{{ colorSchemeStyle }}</EStyle>
      <EFont
        :fallback-font-family="['Helvetica', 'Arial', 'sans-serif']"
        font-family="Raleway"
        :web-font="{
          url: fontUrl,
          format: 'woff2',
        }"
      />
    </EHead>
    <EBody style="margin: 0">
      <EContainer
        class="container"
        style="background-color: #eff0ef; max-width: 42.5em; padding: 0 2.5em"
      >
        <AppLogo :locale />
        <slot />
      </EContainer>
    </EBody>
  </EHtml>
</template>
