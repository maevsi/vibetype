import type { DefineNuxtConfig } from 'nuxt/config'

import { SITE_NAME } from '../../node/static'

const HTTPS = {
  key: './.config/certificates/ssl.key',
  cert: './.config/certificates/ssl.crt',
}

export const developmentConfig: ReturnType<DefineNuxtConfig> = {
  $development: {
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
        },
      },
    },
    vite: {
      server: {
        allowedHosts: [SITE_NAME],
      },
    },

    // modules
    gtag: {
      enabled: false,
    },
    security: {
      headers: {
        strictTransportSecurity: false, // prevent endless reload in Chrome
      },
    },
    sentry: {
      enabled: false,
    },
    site: {
      debug: true,
    },
  },
}
