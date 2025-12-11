import type { DefineNuxtConfig } from 'nuxt/config'

import { cookieControlConfig } from './cookieControl'
import { i18nConfig } from './i18n'
import { pwaConfig } from './pwa'
import { securityConfig } from './security'

export const modulesConfig: ReturnType<DefineNuxtConfig> = {
  content: {
    experimental: {
      nativeSqlite: true,
    },
  },
  ...cookieControlConfig,
  eslint: {
    config: {
      typescript: true,
    },
  },
  gtag: {
    config: {
      cookie_flags: 'samesite=strict',
    },
    id: 'G-WMQ1JY99XH',
    initCommands: [
      [
        'consent',
        'default',
        {
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          ad_storage: 'denied',
          analytics_storage: 'denied',
          wait_for_update: 500,
        },
      ],
    ],
    initMode: 'manual',
  },
  htmlValidator: {
    failOnError: true,
    logLevel: 'warning',
  },
  ...i18nConfig,
  ...pwaConfig,
  linkChecker: {
    failOnError: true,
  },
  ...securityConfig,
  sentry: {
    org: 'maevsi',
    project: 'nuxt',
    release: {
      name: process.env.RELEASE_NAME || undefined,
    },
    sourcemaps: {
      disable: !process.env.RELEASE_NAME,
    },
    telemetry: false,
  },
  shadcn: {
    prefix: '',
    componentDir: 'app/components/scn',
  },
  sitemap: {
    credits: false,
  },
  zodI18n: {
    localeCodesMapping: {
      'de-DE': 'de',
      'en-GB': 'en',
    },
  },
}
