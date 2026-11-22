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
        const message = event.data.json()

        return { data: { ...message.data, ...message.notification } }
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

  const { title, body, url } = payload.data

  if (!title) return

  return self.registration.showNotification(title, { body, data: { url } })
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  const target = new URL(
    event.notification.data?.url || '/',
    self.location.origin,
  )
  // a link to another origin would turn a notification into an open redirect
  const path =
    target.origin === self.location.origin
      ? target.pathname + target.search + target.hash
      : '/'

  event.waitUntil(
    (async () => {
      const windowClients = await self.clients.matchAll({
        includeUncontrolled: true,
        type: 'window',
      })
      const windowClient = windowClients.find(
        (client) => new URL(client.url).origin === self.location.origin,
      )

      if (!windowClient) {
        await self.clients.openWindow(path)
        return
      }

      await windowClient.focus()
      windowClient.postMessage({ type: 'notification-click', url: path })
    })(),
  )
})
