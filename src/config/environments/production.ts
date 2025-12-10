import type { DefineNuxtConfig } from 'nuxt/config'

export const productionConfig: ReturnType<DefineNuxtConfig> = {
  $production: {
    runtimeConfig: {
      public: {
        vio: {
          isInProduction: true,
        },
      },
    },

    // modules
    gtag: {
      config: {
        cookie_flags: 'samesite=strict;secure',
      },
    },
    security: {
      headers: {
        crossOriginEmbedderPolicy: 'credentialless', // OpenStreepMap
      },
    },
    sentry: {
      enabled: true,
    },
  },
}
