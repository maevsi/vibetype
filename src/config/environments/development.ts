import type { DefineNuxtConfig } from 'nuxt/config'

import { IS_IN_STACK, SITE_NAME } from '../../node/static'

// matches `.config/certificates/mkcert.sh`
const CERTIFICATE_SUFFIX = process.env.CI ? '-ci' : '-dev'

export const developmentConfig: ReturnType<DefineNuxtConfig> = {
  $development: {
    // the stack terminates tls in front of the container, while the e2e tests
    // reach the server directly; left unset, nuxt resolves the host to `{}`,
    // which crashes `nuxt dev`
    devServer:
      IS_IN_STACK && !process.env.NUXT_PUBLIC_VIO_IS_TESTING
        ? { host: '0.0.0.0' }
        : {
            host: 'app.localhost',
            https: {
              key: `./.config/certificates/ssl${CERTIFICATE_SUFFIX}.key`,
              cert: `./.config/certificates/ssl${CERTIFICATE_SUFFIX}.crt`,
            },
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
