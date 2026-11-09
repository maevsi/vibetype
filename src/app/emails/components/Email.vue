<script setup lang="ts">
import AppLogo from './AppLogo.vue'

const { locale, title } = defineProps<{
  locale: AppLocale
  title: string
}>()

defineOptions({
  name: 'AppEmail',
})

// inline styles stay the light default for clients that ignore this media query
const colorSchemeStyle = `
  :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {
    .button {
      background-color: #e4e4eb !important;
      color: #191911 !important;
    }

    .container {
      background-color: #191911 !important;
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
      color: #e4e4eb !important;
    }

    .text-secondary {
      color: #868679 !important;
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
          url: 'https://fonts.gstatic.com/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2',
          format: 'woff2',
        }"
      />
    </EHead>
    <EBody style="margin: 0">
      <EContainer
        class="container"
        style="background-color: #f0f0f0; max-width: 42.5em; padding: 0 2.5em"
      >
        <AppLogo :locale />
        <slot />
      </EContainer>
    </EBody>
  </EHtml>
</template>
