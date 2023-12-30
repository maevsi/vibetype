import { useServerSeoMeta } from '@unhead/vue'

import { STYLE_DEFAULT_GRAY } from './utils/constants'

export default defineAppConfig({
  ui: {
    // primary: 'blue',
    gray: STYLE_DEFAULT_GRAY,
  },
  vio: {
    pages: undefined,
    seoMeta: {
      twitterSite: '@maev_si',
    },
    themeColor: '#1F2937',
  },
})

declare module 'nuxt/schema' {
  interface AppConfigInput {
    vio: {
      pages?: {
        legalNotice?: {
          contact: {
            email: string
          }
          responsibility: {
            address: {
              city: string
              name: string
              street: string
            }
          }
          tmg: {
            address: {
              city: string
              name: string
              street: string
            }
          }
        }
        privacyPolicy?: {
          hostingCdn?: {
            external: {
              address: {
                city: string
                name: string
                street: string
              }
            }
          }
          mandatoryInfo?: {
            responsible: {
              address: {
                city: string
                email: string
                name: string
                street: string
              }
            }
          }
        }
      }
      seoMeta?: Parameters<typeof useServerSeoMeta>[0]
      themeColor?: string
    }
  }
}
