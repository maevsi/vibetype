import type { DefineNuxtConfig } from 'nuxt/config'

import { SITE_NAME } from '../../shared/utils/constants'

const HTTPS = {
  key: './.config/certificates/ssl.key',
  cert: './.config/certificates/ssl.crt',
}

export const developmentConfig: ReturnType<DefineNuxtConfig> = {
  $development: {
    build: {
      transpile: ['import-in-the-middle', 'semver'],
    },
    ...(process.env.NUXT_PUBLIC_SITE_URL // TODO: make more readable, find better naming ("enable https only in standalone mode, not when running inside the stack")
      ? {}
      : {
          devServer: {
            https: HTTPS,
          },
        }),
    devtools: {
      enabled: !process.env.NUXT_PUBLIC_VIO_IS_TESTING,
    },
    runtimeConfig: {
      public: {
        vio: {
          isInProduction: false,
          isTesting: process.env.NUXT_PUBLIC_VIO_IS_TESTING === 'true',
        },
      },
    },
    vite: {
      server: {
        allowedHosts: [SITE_NAME],
      },
    },

    // modules
    content: {
      watch: {
        ...(process.env.NUXT_PUBLIC_SITE_URL // TODO: make more readable, find better naming ("enable https only in standalone mode, not when running inside the stack")
          ? {
              hostname: '0.0.0.0',
            }
          : {
              https: HTTPS,
            }),
      },
    },
    gtag: {
      enabled: false,
    },
    security: {
      headers: {
        strictTransportSecurity: false, // prevent endless reload in Chrome
      },
    },
    site: {
      debug: true,
    },
  },
}
