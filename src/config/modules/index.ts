import type { DefineNuxtConfig } from 'nuxt/config'

import { RELEASE_NAME, SITE_URL } from '../../node'
import { cookieControlConfig } from './cookieControl'
import { i18nConfig } from './i18n'
import { pwaConfig } from './pwa'
import { securityConfig } from './security'

export const modulesConfig: ReturnType<DefineNuxtConfig> = {
  colorMode: {
    classSuffix: '',
  },
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
    sourceMapsUploadOptions: {
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: 'maevsi',
      project: 'nuxt',
      telemetry: false,
    },
    unstable_sentryBundlerPluginOptions: {
      release: {
        name: await RELEASE_NAME(),
      },
    },
  },
  shadcn: {
    prefix: '',
    componentDir: 'app/components/scn',
  },
  site: {
    url: SITE_URL,
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
