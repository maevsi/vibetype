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
    security: {
      headers: {
        crossOriginEmbedderPolicy: 'credentialless', // OpenStreepMap
      },
    },
  },
}
