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
        // the content security policy's `script-src-elem` and `worker-src` already restrict which urls may load, and an exact list here broke scripts with dynamic urls like Google Analytics' `gtag/js?id=…`
        createScriptURL: (input) => input,
        createScript: (input) => {
          throw new Error(`Creating scripts is not allowed: ${input}`)
        },
      })
    }
  },
})
