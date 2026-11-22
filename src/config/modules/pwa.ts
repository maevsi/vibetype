import { randomUUID } from 'node:crypto'

import type { DefineNuxtConfig } from 'nuxt/config'

import { getPwaManifest } from '../../node/static/pwa'

export const pwaConfig: ReturnType<DefineNuxtConfig> = {
  hooks: {
    'pwa:beforeBuildServiceWorker': (options) => {
      // `@vite-pwa/nuxt` adds this pattern as soon as any route prerenders, but only pages emit payloads and no page prerenders here, so `globStrict` would fail the build
      if (!options.buildSW?.globPatterns) return

      options.buildSW.globPatterns = options.buildSW.globPatterns.filter(
        (pattern) => pattern !== '**/_payload.json',
      )
    },
  },
  pwa: {
    devOptions: {
      enabled: true,
      // the development precache defaults to `index.html`, which nuxt does not serve, so the worker would fail to install
      navigateFallback: '/offline',
      type: 'module', // must be developed in Chrome
    },
    client: {
      periodicSyncForUpdates: 3600,
      installPrompt: true,
    },
    // the `/offline` route rule's shell is rendered per request, so its csp carries the runtime site url, and it references this build's entry chunk
    additionalManifestEntries: [{ revision: randomUUID(), url: '/offline' }],
    buildSW: {
      // `@vite-pwa/nuxt` seeds `globPatterns` with only its build manifest json, which drops workbox's default
      globPatterns: ['**/*.{css,js,woff2}', '_i18n/**/messages.json'],
      swSrc: '~/service-worker/sw.ts',
    },
    // the plugin writes this to the build for the default locale; the `de` server route serves the same manifest in german
    manifest: getPwaManifest({ locale: 'en' }),
    strategies: 'buildSW',
  },
}
