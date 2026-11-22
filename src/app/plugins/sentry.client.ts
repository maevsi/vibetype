import * as Sentry from '@sentry/nuxt'

import { SENTRY_COOKIE_ID } from '~~/node/static'

export default defineNuxtPlugin(() => {
  const { features, replays } = useRuntimeConfig().public.sentry
  const isConsented = useIsCookieConsented(SENTRY_COOKIE_ID)

  // `Sentry.init` may not have run yet when this plugin starts, so the consent watcher waits for it
  onNuxtReady(() =>
    watch(
      isConsented,
      (isGranted) => {
        if (!Sentry.getClient()) return

        const replay = Sentry.getReplay()

        if (!isGranted) {
          replay?.stop()
          return
        }

        if (features.profiling) {
          Sentry.addIntegration(Sentry.browserProfilingIntegration())
        }

        if (!features.replay) return

        if (!replay) {
          Sentry.addIntegration(Sentry.replayIntegration())
        } else if (replays.session.sampleRate > 0) {
          replay.start()
        } else {
          replay.startBuffering()
        }
      },
      { immediate: true },
    ),
  )
})
