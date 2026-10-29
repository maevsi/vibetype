import type { DefineNuxtConfig } from 'nuxt/config'
import { defineAddress, defineOrganization } from 'nuxt-schema-org/schema'

import { cookieControlConfig } from './cookieControl'
import { i18nConfig } from './i18n'
import { pwaConfig } from './pwa'
import { scriptsConfig } from './scripts'
import { securityConfig } from './security'

import { SITE_NAME } from '../../node/static'
import { HTML_VALIDATE_CONFIG } from '../htmlValidate'

export const modulesConfig: ReturnType<DefineNuxtConfig> = {
  // the site exposes personal data (e.g. account profiles) that must not be served to AI crawlers
  aiReady: false,
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
    providers: {
      // Only the local `npm` and `local` providers are used (Raleway ships via
      // `@fontsource-variable/raleway`), so disable the remaining default
      // providers. Each of them fetches font metadata from a remote CDN during
      // the build, which makes the build depend on external network
      // availability and fail when a CDN is unreachable (e.g. fonts.google.com)
      adobe: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      google: false,
      googleicons: false,
    },
  },
  htmlValidator: {
    failOnError: true,
    logLevel: 'warning',
    options: HTML_VALIDATE_CONFIG,
  },
  ...i18nConfig,
  ...pwaConfig,
  linkChecker: {
    failOnError: true,
  },
  nuxtEmailRenderer: {
    codeHighlighting: false,
  },
  ogImage: {
    // X reads the image from the Open Graph tags, so mirroring them into
    // `twitter:image` tags only grows every page's head
    includeTwitter: false,
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
  // the storage persists across builds because the dockerfile seeds it from the previously released image (see `SKEW_PROTECTION_SOURCE_IMAGE`) and carries it into the next one
  skewProtection: {
    // the retained assets are baked into every image, so keep the retention low to bound the image size
    retentionDays: 7,
    maxNumberOfVersions: 3,
  },
  sitemap: {
    credits: false,
    sources: ['/api/__sitemap__/accounts', '/api/__sitemap__/events'],
  },
}
