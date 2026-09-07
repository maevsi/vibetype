import * as Sentry from '@sentry/nuxt'

const runtimeConfig = useRuntimeConfig()
const sharedSentryConfig = useSharedSentryConfig()

if (sharedSentryConfig.dsn) {
  Sentry.init({
    ...sharedSentryConfig,
    integrations: [
      Sentry.captureConsoleIntegration(),
      ...(runtimeConfig.public.sentry.logs.enable
        ? [Sentry.consoleLoggingIntegration()]
        : []),
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
  // The import is kicked off immediately (not deferred to idle time) so it fetches in parallel with the rest of the app instead of blocking it, which keeps the window in which these two integrations are not yet recording as short as the fetch allows.
  // That window cannot be closed entirely: the replay recorder only starts once `addIntegration` runs, so an error thrown during app boot can still produce a replay without lead-up context, or none at all.
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
