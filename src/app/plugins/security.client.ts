/// <reference types="@types/trusted-types" />

import { sanitize } from 'isomorphic-dompurify'

export default defineNuxtPlugin({
  // module plugins like Nuxt DevTools' may inject scripts, which requires the default policy to exist already
  enforce: 'pre',
  setup() {
    if (import.meta.server) return

    const def = window.trustedTypes?.defaultPolicy // eslint-disable-line compat/compat

    if (window.trustedTypes && !def) {
      window.trustedTypes.createPolicy('default', {
        createHTML: (input) => sanitize(input),
        createScriptURL: (input) => {
          if (
            [
              '/dev-sw.js?dev-sw',
              'https://challenges.cloudflare.com/turnstile/v0/api.js',
              ...(import.meta.env.DEV ? ['/__devtools/embedded.js'] : []),
            ].includes(input)
          ) {
            return input
          }

          throw new Error(`Blocked untrusted script URL: ${input}`)
        },
        createScript: (input) => {
          throw new Error(`Creating scripts is not allowed: ${input}`)
        },
      })
    }
  },
})
