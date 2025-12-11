import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { createResolver } from 'nuxt/kit'
import type { Nuxt, ModuleOptions } from 'nuxt/schema'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

import { modulesConfig } from '../config/modules'
import { environmentsConfig } from '../config/environments'

import { iconCollectionOptimization, RELEASE_NAME } from '../node'
import {
  IS_NITRO_OPENAPI_ENABLED,
  NUXT_PUBLIC_SENTRY_HOST,
  NUXT_PUBLIC_SENTRY_PROFILES_SAMPLE_RATE,
  NUXT_PUBLIC_SENTRY_PROJECT_ID,
  NUXT_PUBLIC_SENTRY_PROJECT_PUBLIC_KEY,
  NUXT_PUBLIC_VIO_ENVIRONMENT,
  SITE_NAME,
  SITE_URL,
} from '../node/static'
import { PRODUCTION_HOST } from '../shared/utils/constants'

// TODO: let this error in "eslint (compat/compat)"" (https://github.com/DefinitelyTyped/DefinitelyTyped/issues/55519)
// setImmediate(() => {})

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-20',
  css: ['~/assets/css/app.css'],
  experimental: {
    inlineRouteRules: true,
    typedPages: true,
  },
  modules: [
    '@dargmuesli/nuxt-cookie-control',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    'nuxt-zod-i18n', // most come before `@nuxtjs/i18n`
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
    async (_options: ModuleOptions, nuxt: Nuxt) => {
      nuxt.options.runtimeConfig.public.vio.releaseName = await RELEASE_NAME()
    },
    // nuxt-security: remove invalid `'none'`s and duplicates
    (_options: ModuleOptions, nuxt: Nuxt) => {
      const nuxtConfigSecurityHeaders = nuxt.options.security.headers

      if (
        typeof nuxtConfigSecurityHeaders !== 'boolean' &&
        nuxtConfigSecurityHeaders.contentSecurityPolicy
      ) {
        const csp = nuxtConfigSecurityHeaders.contentSecurityPolicy

        for (const [key, value] of Object.entries(csp)) {
          if (!Array.isArray(value)) continue

          const valueFiltered = value.filter((x) => x !== "'none'")

          if (valueFiltered.length) {
            ;(csp as Record<string, unknown>)[key] = [...new Set(valueFiltered)]
          }
        }
      }
    },
    'nuxt-security',
  ],
  nitro: {
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
    rollupConfig: {
      plugins: [vue()],
    },
  },
  routeRules: {
    '/**': {
      headers: { 'Document-Policy': 'js-profiling' }, // Sentry's browser profiling (currently supported for Chromium-based browsers)
    },
    '/api/model/event/ical': {
      security: {
        xssValidator: false, // TipTap's HTML is stored unescaped (is escaped when displayed) so api requests would trigger the xss protection here (https://github.com/maevsi/vibetype/issues/1603)
      },
    },
    '/api/service/traefik/authentication': {
      security: {
        xssValidator: false, // TipTap's HTML is stored unescaped (is escaped when displayed) so api requests would trigger the xss protection on forward authentication (https://github.com/maevsi/vibetype/issues/1603)
      },
    },
  },
  runtimeConfig: {
    private: {
      api: {
        notification: {
          secret: '',
        },
      },
      monday: {
        apiToken: undefined,
        board: {
          contact: {
            column: {
              consentId: undefined,
              emailAddressId: undefined,
              nameId: undefined,
              messageId: undefined,
            },
            id: undefined,
            groupId: undefined,
          },
          earlyBird: {
            column: {
              agreementId: undefined,
              emailAddressId: undefined,
              nameId: undefined,
            },
            id: undefined,
            groupId: undefined,
          },
        },
      },
      openai: {
        apiKey: '',
      },
    },
    public: {
      [SITE_NAME]: {
        email: {
          limit24h: '150',
        },
      },
      i18n: {
        baseUrl: SITE_URL,
      },
      sentry: {
        host: NUXT_PUBLIC_SENTRY_HOST,
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
      turnstile: {
        siteKey: '0x4AAAAAAABtEW1Hc8mcgWcZ',
      },
      vio: {
        auth: {
          jwt: {
            publicKey: '',
          },
        },
        environment: NUXT_PUBLIC_VIO_ENVIRONMENT, // || 'development'
        isTesting: false, // NUXT_PUBLIC_VIO_IS_TESTING,
        stagingHost:
          process.env.NODE_ENV !== 'production' &&
          !process.env.NUXT_PUBLIC_SITE_URL
            ? PRODUCTION_HOST
            : undefined,
      },
    },
  },
  sourcemap: true,
  typescript: {
    nodeTsConfig: {
      include: [resolve('../node'), resolve('../sentry.server.config.ts')],
    },
    tsConfig: {
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
        '@sentry/nuxt',
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
        '@urql/vue',
        '@vee-validate/zod',
        '@vuelidate/core',
        '@vuelidate/validators',
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
        'lucide-vue-next',
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
        'vee-validate',
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
      {
        // This plugin suppresses false-positive sourcemap warnings from Tailwind's Vite plugin
        // TODO: remove once tailwind generates sourcemaps for their transforms (https://github.com/tailwindlabs/tailwindcss/discussions/16119)
        apply: 'build',
        name: 'vite-plugin-ignore-sourcemap-warnings',
        configResolved(config) {
          const originalOnWarn = config.build.rollupOptions.onwarn
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (
              warning.code === 'SOURCEMAP_BROKEN' &&
              warning.plugin === '@tailwindcss/vite:generate:build'
            ) {
              return
            }

            if (originalOnWarn) {
              originalOnWarn(warning, warn)
            } else {
              warn(warning)
            }
          }
        },
      },
    ],
  },
  ...modulesConfig,
  ...environmentsConfig,
})
