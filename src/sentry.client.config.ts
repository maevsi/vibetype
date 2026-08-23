import * as Sentry from '@sentry/nuxt'

const runtimeConfig = useRuntimeConfig()
const sharedSentryConfig = useSharedSentryConfig()

if (sharedSentryConfig.dsn) {
  Sentry.init({
    ...sharedSentryConfig,
    integrations: [
      Sentry.captureConsoleIntegration(),
      Sentry.consoleLoggingIntegration(),
      Sentry.graphqlClientIntegration({ endpoints: [/\/graphql$/] }),
      Sentry.httpClientIntegration(),
      Sentry.piniaIntegration(usePinia()),
      Sentry.zodErrorsIntegration(),

      // // enable if more components or hooks should be tracked
      // Sentry.vueIntegration({
      //   tracingOptions: {
      //     trackComponents: true,
      //     hooks: ['activate', 'create', 'unmount', 'mount', 'update'],
      //   },
      // }),
    ],
    replaysOnErrorSampleRate:
      runtimeConfig.public.sentry.replays.onError.sampleRate,
    replaysSessionSampleRate:
      runtimeConfig.public.sentry.replays.session.sampleRate,
    tracePropagationTargets: [
      /^https:\/\/postgraphile\.(localhost|vibetype\.app)\/graphql/,
      /^https:\/\/(localhost|vibetype\.app)\/api/,
    ],

    // // TODO: enable when offline support is implemented
    // transport: Sentry.makeBrowserOfflineTransport(Sentry.makeFetchTransport),
  })

  // `browserProfilingIntegration` and `replayIntegration` are heavy (they pull in an rrweb-derived recorder and profiling code), so they are fetched via a dynamic import instead of being bundled into the chunk every visitor downloads upfront.
  // The import is kicked off immediately (not deferred to idle time) so it fetches in parallel with the rest of the app instead of blocking it, without leaving a window where an early pageload transaction goes unprofiled or an early error is replayed without lead-up context.
  import('./sentry.client.integrations')
    .then(({ getDeferredSentryIntegrations }) => {
      for (const integration of getDeferredSentryIntegrations()) {
        Sentry.addIntegration(integration)
      }
    })
    .catch((error: unknown) => {
      console.warn('Failed to load deferred Sentry integrations.', error)
    })
} else {
  console.warn(
    'Sentry configuration is incomplete, skipping Sentry initialization.',
  )
}
