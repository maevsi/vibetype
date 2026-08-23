import { browserProfilingIntegration, replayIntegration } from '@sentry/nuxt'

// `browserProfilingIntegration` and `replayIntegration` are the heaviest Sentry integrations.
// This module only exists so `sentry.client.config.ts` can reach them through a dynamic `import()`, keeping their code out of the eagerly loaded chunk and fetching it lazily instead.
export const getDeferredSentryIntegrations = () => [
  browserProfilingIntegration(),
  replayIntegration(),
]
