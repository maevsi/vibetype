/// <reference lib="WebWorker" />
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'
import * as navigationPreload from '@vite-pwa/workbox-swkit/navigation-preload'
import {
  cleanupOutdatedCaches,
  precacheAndRoute,
  PrecacheFallbackPlugin,
} from '@vite-pwa/workbox-swkit/precaching'
import { NavigationRoute, registerRoute } from '@vite-pwa/workbox-swkit/routing'
import { NetworkOnly } from '@vite-pwa/workbox-swkit/strategies'

import {
  POSTER_SHARE_ACTION,
  POSTER_SHARE_CACHE_KEY,
  POSTER_SHARE_CACHE_NAME,
  POSTER_SHARE_FIELD_NAME,
  POSTER_SHARE_REDIRECT,
} from '../../shared/utils/posterShare'
import { initializeFirebaseClient } from '../utils/dependencies/firebase'

declare let self: ServiceWorkerGlobalScope

class CustomPushEvent extends Event {
  custom: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(data: any) {
    super('push')
    Object.assign(this, data)
    this.custom = true
  }
}

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST, {
  parallel: { concurrency: 5, enabled: true },
})

// lets the navigation request below start while the worker is still booting
navigationPreload.enable()

// the prerendered `/offline` route rule in `nuxt.config.ts`
registerRoute(
  new NavigationRoute(
    new NetworkOnly({
      plugins: [new PrecacheFallbackPlugin({ fallbackURL: '/offline' })],
    }),
  ),
)

// the page cannot read the share target's POST body, so the poster waits in the cache for the ingest page
registerRoute(
  ({ url }) => url.pathname === POSTER_SHARE_ACTION,
  async ({ request }) => {
    const poster = (await request.formData()).get(POSTER_SHARE_FIELD_NAME)

    if (poster instanceof File) {
      const cache = await caches.open(POSTER_SHARE_CACHE_NAME)

      await cache.put(
        POSTER_SHARE_CACHE_KEY,
        new Response(poster, { headers: { 'Content-Type': poster.type } }),
      )
    }

    return Response.redirect(POSTER_SHARE_REDIRECT, 303)
  },
  'POST',
)

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})

/*
  Receive a push message with the notification field set
  and move the notification data into the data field. 
  This way firebase doesn't show the notification by
  itself and we can implement the notification logic ourself.
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
self.addEventListener('push', (event: any) => {
  if (event.custom) return

  const customEvent = new CustomPushEvent({
    // Push event data
    data: {
      // Actual data field
      json() {
        return { data: { ...event.data.json().notification } }
      },
    },
    waitUntil: event.waitUntil.bind(event),
  })
  event.stopImmediatePropagation()

  dispatchEvent(customEvent)
})

const firebaseApp = initializeFirebaseClient()
onBackgroundMessage(getMessaging(firebaseApp), (payload) => {
  if (!payload.data) return

  const { title, body } = payload.data

  if (!title) return

  return self.registration.showNotification(title, { body })
})
