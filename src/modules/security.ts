import { defineNuxtModule } from 'nuxt/kit'

// nuxt-security: remove invalid `'none'`s and duplicates
export default defineNuxtModule({
  meta: {
    name: 'security',
  },
  async setup(_moduleOptions, nuxt) {
    const nuxtConfigSecurityHeaders = nuxt.options.security.headers

    if (
      typeof nuxtConfigSecurityHeaders !== 'boolean' &&
      nuxtConfigSecurityHeaders.contentSecurityPolicy
    ) {
      const csp = nuxtConfigSecurityHeaders.contentSecurityPolicy

      for (const [key, value] of Object.entries(csp)) {
        if (!Array.isArray(value)) continue

        const valueFiltered = value.filter((x) => x !== "'none'")

        if (valueFiltered.length) {
          ;(csp as Record<string, unknown>)[key] = [...new Set(valueFiltered)]
        }
      }
    }
  },
})
