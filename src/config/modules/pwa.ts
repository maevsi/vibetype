import { randomUUID } from 'node:crypto'

import type { DefineNuxtConfig } from 'nuxt/config'

import { getPwaManifest } from '../../node/static/pwa'

export const pwaConfig: ReturnType<DefineNuxtConfig> = {
  pwa: {
    devOptions: {
      enabled: true,
      type: 'module', // must be developed in Chrome
    },
    client: {
      periodicSyncForUpdates: 3600,
      installPrompt: true,
    },
    filename: 'sw.ts',
    injectManifest: {
      // the `/offline` route rule's shell is rendered per request, so its csp carries the runtime site url, and it references this build's entry chunk
      additionalManifestEntries: [{ revision: randomUUID(), url: '/offline' }],
      // `@vite-pwa/nuxt` seeds `globPatterns` with only its build manifest json, which drops workbox's default
      globPatterns: ['**/*.{css,js,woff2}', '_i18n/**/messages.json'],
    },
    // the plugin writes this to the build for the default locale; the `de` server route serves the same manifest in german
    manifest: getPwaManifest({ locale: 'en' }),
    srcDir: 'service-worker',
    strategies: 'injectManifest',
  },
}
