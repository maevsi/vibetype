import { browserProfilingIntegration, replayIntegration } from '@sentry/nuxt'

// `browserProfilingIntegration` and `replayIntegration` are the heaviest Sentry integrations.
// This module only exists so `sentry.client.config.ts` can reach them through a dynamic `import()`, keeping their code out of the eagerly loaded chunk and fetching it lazily instead.
// Hence the named imports: reaching the same integrations through the `Sentry` namespace object, as the rest of the client config does, would keep their code in the eager chunk, because that module is already reachable statically from there.
// `Sentry.lazyLoadIntegration` is not an alternative either, as it injects a `browser.sentry-cdn.com` script tag that the `nuxt-security` content security policy blocks.
export const getDeferredSentryIntegrations = () => [
  browserProfilingIntegration(),
  replayIntegration(),
]
