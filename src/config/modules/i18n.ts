import type { DefineNuxtConfig } from 'nuxt/config'

import { I18N_COOKIE_NAME } from '../../node/static'

export const i18nConfig: ReturnType<DefineNuxtConfig> = {
  i18n: {
    defaultLocale: 'en', // Must be set for the default prefix_except_default prefix strategy.
    detectBrowserLanguage: {
      cookieKey: I18N_COOKIE_NAME,
      cookieSecure: process.env.NODE_ENV === 'production',
      fallbackLocale: 'en',
      // redirecting only the visitors landing on the root keeps the search engines' crawl of the deep links free of language redirects
      redirectOn: 'root',
      useCookie: true,
    },
    experimental: {
      compactRoutes: true,
      prerenderMessages: true, // static files the service worker precaches, as the offline app shell has no server to load messages from
      strictSeo: true,
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
