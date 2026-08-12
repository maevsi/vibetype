import type { DefineNuxtConfig } from 'nuxt/config'
import { defineAddress, defineOrganization } from 'nuxt-schema-org/schema'

import { cookieControlConfig } from './cookieControl'
import { i18nConfig } from './i18n'
import { pwaConfig } from './pwa'
import { scriptsConfig } from './scripts'
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
  htmlValidator: {
    failOnError: true,
    logLevel: 'warning',
    options: {
      rules: {
        // combobox-style widgets (e.g. `Select`) correctly point `aria-controls`
        // at a popup that only exists in the DOM once opened, which this rule
        // can't distinguish from an actually broken reference
        'no-missing-references': 'off',
      },
    },
  },
  ...i18nConfig,
  ...pwaConfig,
  linkChecker: {
    failOnError: true,
  },
  ...scriptsConfig,
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
    reactive: false, // for a strict trusted type policy the script may not change and it must be inlined / cannot be linked (https://github.com/harlan-zw/nuxt-schema-org/issues/96)
  },
  sitemap: {
    credits: false,
    sources: ['/api/__sitemap__/accounts', '/api/__sitemap__/events'],
  },
}
