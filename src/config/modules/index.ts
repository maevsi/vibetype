import type { DefineNuxtConfig } from 'nuxt/config'
import { defineAddress, defineOrganization } from 'nuxt-schema-org/schema'

import { cookieControlConfig } from './cookieControl'
import { i18nConfig } from './i18n'
import { pwaConfig } from './pwa'
import { securityConfig } from './security'

import { SITE_NAME } from '../../node/static'

export const modulesConfig: ReturnType<DefineNuxtConfig> = {
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  ...cookieControlConfig,
  eslint: {
    config: {
      typescript: true,
    },
  },
  fonts: {
    families: [
      {
        global: true,
        name: 'Raleway Variable',
        provider: 'npm',
      },
    ],
    npm: {
      remote: false,
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
  schemaOrg: {
    identity: defineOrganization({
      address: defineAddress({
        addressCountry: 'DE',
        addressLocality: 'Kassel',
        postalCode: '34121',
        streetAddress: 'Virchowstraße 4',
      }),
      legalName: 'maevsi UG (haftungsbeschränkt)',
      logo: '/assets/static/favicon/apple-touch-icon-180x180.png',
      name: SITE_NAME.toUpperCase(),
      sameAs: [
        'https://instagram.com/vibetype.app/',
        'https://facebook.com/profile.php?id=61573494951867',
        'https://tiktok.com/@vibetype',
        'https://linkedin.com/company/92700414/',
      ],
    }),
    reactive: false, // TODO: for a strict trusted type policy, evaluate linking schema org json instead of reatively updating it inline (https://github.com/harlan-zw/nuxt-schema-org/issues/96)
  },
  sitemap: {
    credits: false,
  },
}
