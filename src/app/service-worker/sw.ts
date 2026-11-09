/// <reference lib="WebWorker" />
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'
import * as navigationPreload from 'workbox-navigation-preload'
import {
  cleanupOutdatedCaches,
  precacheAndRoute,
  PrecacheFallbackPlugin,
} from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { NetworkOnly } from 'workbox-strategies'

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

precacheAndRoute(self.__WB_MANIFEST)

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
