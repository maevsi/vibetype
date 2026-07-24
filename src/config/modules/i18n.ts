import type { DefineNuxtConfig } from 'nuxt/config'

export const i18nConfig: ReturnType<DefineNuxtConfig> = {
  i18n: {
    defaultLocale: 'en', // Must be set for the default prefix_except_default prefix strategy.
    detectBrowserLanguage: false,
    experimental: {
      compactRoutes: true,
    },
    locales: [
      {
        code: 'de',
        file: 'de.json',
        language: 'de',
        name: 'Deutsch',
      },
      {
        code: 'en',
        file: 'en.json',
        language: 'en', // Will be used as catchall locale by default.
        name: 'English',
      },
    ],
  },
}
