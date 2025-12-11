/// <reference types="@types/trusted-types" />

import DOMPurify from 'isomorphic-dompurify'

export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  const def = window.trustedTypes?.defaultPolicy // eslint-disable-line compat/compat

  if (window.trustedTypes && !def) {
    window.trustedTypes.createPolicy('default', {
      createHTML: (input) => DOMPurify.sanitize(input),
      createScriptURL: (input) => {
        if (
          [
            '/dev-sw.js?dev-sw',
            'https://challenges.cloudflare.com/turnstile/v0/api.js',
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
})
