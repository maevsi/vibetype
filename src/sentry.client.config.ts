import * as Sentry from '@sentry/nuxt'

const runtimeConfig = useRuntimeConfig()
const sharedSentryConfig = useSharedSentryConfig()
const sentryFeatures = runtimeConfig.public.sentry.features

if (sharedSentryConfig.dsn) {
  Sentry.init({
    ...sharedSentryConfig,
    integrations: [
      ...(sentryFeatures.profiling
        ? [Sentry.browserProfilingIntegration()]
        : []),
      ...(sentryFeatures.consoleCapture
        ? [Sentry.captureConsoleIntegration()]
        : []),
      ...(runtimeConfig.public.sentry.logs.enable
        ? [Sentry.consoleLoggingIntegration()]
        : []),
      Sentry.graphqlClientIntegration({ endpoints: [/\/graphql$/] }),
      Sentry.httpClientIntegration(),
      ...(sentryFeatures.pinia ? [Sentry.piniaIntegration(usePinia())] : []),
      ...(sentryFeatures.replay ? [Sentry.replayIntegration()] : []),
      Sentry.zodErrorsIntegration(),

      // // enable if more components or hooks should be tracked
      // Sentry.vueIntegration({
      //   tracingOptions: {
      //     trackComponents: true,
      //     hooks: ['activate', 'create', 'unmount', 'mount', 'update'],
      //   },
      // }),
    ],
    replaysOnErrorSampleRate: sentryFeatures.replay
      ? runtimeConfig.public.sentry.replays.onError.sampleRate
      : 0,
    replaysSessionSampleRate: sentryFeatures.replay
      ? runtimeConfig.public.sentry.replays.session.sampleRate
      : 0,
    tracePropagationTargets: [
      /^https:\/\/postgraphile\.(localhost|vibetype\.app)\/graphql/,
      /^https:\/\/(localhost|vibetype\.app)\/api/,
    ],

    // // TODO: enable when offline support is implemented
    // transport: Sentry.makeBrowserOfflineTransport(Sentry.makeFetchTransport),
  })
} else {
  console.warn(
    'Sentry configuration is incomplete, skipping Sentry initialization.',
  )
}
