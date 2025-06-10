import type { DefineNuxtConfig } from 'nuxt/config'

import { LOCALES } from '../../shared/utils/constants'

export const i18nConfig: ReturnType<DefineNuxtConfig> = {
  i18n: {
    defaultLocale: 'en', // Must be set for the default prefix_except_default prefix strategy.
    detectBrowserLanguage: false,
    locales: LOCALES,
  },
}
