import type { DefineNuxtConfig } from 'nuxt/config'

export const scriptsConfig: ReturnType<DefineNuxtConfig> = {
  scripts: {
    // applies to every proxied script's requests, not just `googleAnalytics`
    privacy: true, // fully anonymize ip, user agent, language, screen, timezone and hardware
    proxy: {
      alias: true, // hide third-party hostnames behind an opaque per-domain alias
    },
    registry: {
      googleAnalytics: {
        trigger: false, // infrastructure only, loading is driven by `useAppGtag`'s own consent-gated trigger
      },
    },
  },
}
