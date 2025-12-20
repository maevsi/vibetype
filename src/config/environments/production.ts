import type { DefineNuxtConfig } from 'nuxt/config'

export const productionConfig: ReturnType<DefineNuxtConfig> = {
  $production: {
    runtimeConfig: {
      public: {
        vio: {
          isInProduction: true,
          isTesting: process.env.NUXT_PUBLIC_VIO_IS_TESTING === 'true',
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
  },
}
