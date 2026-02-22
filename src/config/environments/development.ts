import type { DefineNuxtConfig } from 'nuxt/config'

import { IS_IN_STACK, SITE_NAME } from '../../node/static'

export const developmentConfig: ReturnType<DefineNuxtConfig> = {
  $development: {
    devServer: {
      ...(IS_IN_STACK
        ? {}
        : {
            host: 'app.localhost',
            https: {
              key: './.config/certificates/ssl-dev.key',
              cert: './.config/certificates/ssl-dev.crt',
            },
          }),
    },
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
