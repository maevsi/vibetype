import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { createResolver } from 'nuxt/kit'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

import { modulesConfig } from './config/modules'
import { environmentsConfig } from './config/environments'

import { iconCollectionOptimization } from './node'
import {
  IS_IN_FRONTEND_DEVELOPMENT,
  IS_NITRO_OPENAPI_ENABLED,
  NUXT_PUBLIC_SENTRY_HOST,
  NUXT_PUBLIC_SENTRY_PROFILES_SAMPLE_RATE,
  NUXT_PUBLIC_SENTRY_PROJECT_ID,
  NUXT_PUBLIC_SENTRY_PROJECT_PUBLIC_KEY,
  NUXT_PUBLIC_VIO_ENVIRONMENT,
  PRODUCTION_HOST,
  SITE_NAME,
  SITE_URL,
} from './node/static'

// TODO: let this error in "eslint (compat/compat)"" (https://github.com/DefinitelyTyped/DefinitelyTyped/issues/55519)
// setImmediate(() => {})

const { resolve } = createResolver(import.meta.url)

const typescriptConfig = {
  compilerOptions: {
    allowImportingTsExtensions: true,
  },
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-20',
  css: ['~/assets/css/app.css'],
  experimental: {
    inlineRouteRules: true,
    prefetchPreloadTags: true,
    typedPages: true,
    typescriptPlugin: true,
    watcher: 'builder',
  },
  imports: {
    parser: 'regex', // TODO: remove once unimport issue is resolved (https://github.com/nuxt/nuxt/issues/35858)
  },
  modules: [
    '@dargmuesli/nuxt-cookie-control',
    // '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    '@nuxtjs/i18n',
    '@nuxtjs/mdc',
    '@nuxtjs/seo',
    '@nuxt/content', // most come after `@nuxtjs/seo`
    '@nuxtjs/turnstile',
    '@pinia/nuxt',
    '@sentry/nuxt/module',
    '@vite-pwa/nuxt',
    'nuxt-gtag',
    'shadcn-nuxt',
    'nuxt-security',
  ],
  nitro: {
    typescript: {
      tsConfig: typescriptConfig,
    },
    compressPublicAssets: true,
    esbuild: {
      options: {
        target: 'es2022', // needed for sentry server-side configuration (top-level async release getter) // TODO: remove once top-level target option is available (https://github.com/nuxt/nuxt/issues/14893)
      },
    },
    experimental: {
      asyncContext: true,
      openAPI: IS_NITRO_OPENAPI_ENABLED,
    },
    // @ts-expect-error environment type missing (https://github.com/nitrojs/nitro/issues/4482)
    rollupConfig: {
      plugins: [vue()],
    },
  },
  routeRules: {
    '/**': {
      headers: { 'Document-Policy': 'js-profiling' }, // Sentry's browser profiling (currently supported for Chromium-based browsers)
    },
    '/.well-known/apple-app-site-association': {
      headers: { 'Content-Type': 'application/json' },
    },
    '/__nuxt_content/content/query': {
      csurf: false,
    },
    '/api/model/event/ical': {
      csurf: false,
      security: {
        xssValidator: false, // TipTap's HTML is stored unescaped (is escaped when displayed) so api requests would trigger the xss protection here (https://github.com/maevsi/vibetype/issues/1603)
      },
    },
    '/api/internal/service/postgraphile/authentication': {
      csurf: false,
      security: {
        xssValidator: false, // TipTap's HTML is stored unescaped (is escaped when displayed) so api requests would trigger the xss protection on forward authentication (https://github.com/maevsi/vibetype/issues/1603)
      },
    },
  },
  runtimeConfig: {
    public: {
      [SITE_NAME]: {
        email: {
          // TODO(major): remove deprecated `limit24h` in the next major version
          limit24h: '150',
          rateLimit: {
            perDay: '', // falls back to the deprecated `limit24h`, then to `MAEVSI_EMAIL_RATE_LIMIT_PER_DAY`
            perSecond: '14',
          },
        },
      },
      i18n: {
        baseUrl: SITE_URL,
      },
      sentry: {
        host: NUXT_PUBLIC_SENTRY_HOST,
        logs: {
          enable: true,
        },
        profiles: {
          sampleRate: NUXT_PUBLIC_SENTRY_PROFILES_SAMPLE_RATE,
        },
        project: {
          id: NUXT_PUBLIC_SENTRY_PROJECT_ID,
          publicKey: NUXT_PUBLIC_SENTRY_PROJECT_PUBLIC_KEY,
        },
        replays: {
          onError: {
            sampleRate: 1.0,
          },
          session: {
            sampleRate: 0.0,
          },
        },
      },
      security: {
        isRateLimiterDisabled: true, // TODO: disable once api requests are optimized (https://github.com/maevsi/vibetype/issues/1654)
      },
      vio: {
        auth: {
          jwt: {
            publicKey: '',
          },
        },
        environment: NUXT_PUBLIC_VIO_ENVIRONMENT,
        isTesting: false,
        stagingHost: IS_IN_FRONTEND_DEVELOPMENT ? PRODUCTION_HOST : undefined,
      },
    },
    [SITE_NAME]: {
      api: {
        notification: {
          secret: '',
        },
      },
      kafka: {
        brokers: 'redpanda:9092',
      },
      openai: {
        apiKey: '',
      },
      redis: {
        url: 'redis://redis:6379',
      },
      zammad: {
        apiToken: undefined,
        groupId: 1,
        url: undefined,
      },
    },
  },
  sourcemap: true,
  tracingChannel: true,
  typescript: {
    sharedTsConfig: typescriptConfig,
    nodeTsConfig: {
      ...typescriptConfig,
      include: [
        resolve('./.config'),
        resolve('./config'),
        resolve('./node'),
        resolve('./sentry.server.config.ts'),
      ],
    },
    tsConfig: {
      ...typescriptConfig,
      vueCompilerOptions: {
        htmlAttributes: [], // https://github.com/johnsoncodehk/volar/issues/1970#issuecomment-1276994634
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        '@dargmuesli/nuxt-cookie-control/runtime/types.js',
        '@http-util/status-i18n',
        '@internationalized/date',
        '@intlify/core-base',
        '@intlify/shared',
        '@lucide/vue',
        '@sentry/nuxt',
        '@tanstack/vue-form',
        '@tiptap/extension-text-align',
        '@tiptap/starter-kit',
        '@tiptap/vue-3',
        '@uppy/core',
        '@uppy/tus',
        '@urql/core',
        '@urql/devtools',
        '@urql/exchange-graphcache',
        '@urql/exchange-graphcache/default-storage',
        '@urql/exchange-graphcache/extras',
        '@urql/exchange-request-policy',
        '@urql/vue',
        '@vueuse/core',
        'chart.js',
        'class-variance-authority',
        'clsx',
        'css-element-queries',
        'downloadjs',
        'firebase/app',
        'firebase/messaging',
        'firebase/messaging/sw',
        'html-to-text',
        'isomorphic-dompurify',
        'jose',
        'js-confetti',
        'leaflet',
        'leaflet-control-geocoder',
        'lodash-es',
        'mustache',
        'pretty-bytes',
        'prntr',
        'qrcode.vue',
        'reka-ui',
        'reka-ui/date',
        'seedrandom',
        'slugify',
        'tailwind-merge',
        'tailwindcss/colors',
        'ua-parser-js',
        'v-calendar',
        'vaul-vue',
        'vue-advanced-cropper',
        'vue-chartjs',
        'vue-qrcode-reader',
        'vue-sonner',
        'workbox-precaching',
        'zod',
      ],
    },
    plugins: [
      Components({
        dts: '../.nuxt/components-icons.d.ts',
        resolvers: [
          IconsResolver({
            customCollections: [SITE_NAME, `${SITE_NAME}-colored`],
          }),
        ],
      }),
      Icons({
        customCollections: {
          [SITE_NAME]: iconCollectionOptimization({}),
          [`${SITE_NAME}-colored`]: iconCollectionOptimization({
            isColored: true,
          }),
        },
        scale: 1.5,
      }),
      tailwindcss(),
    ],
  },
  ...modulesConfig,
  ...environmentsConfig,
})
