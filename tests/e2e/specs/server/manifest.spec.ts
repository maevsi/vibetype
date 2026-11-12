import { test, expect } from '@playwright/test'

test.describe('manifest', () => {
  for (const { lang, path, startUrl } of [
    { lang: 'en', path: '/manifest.webmanifest', startUrl: '/?source=pwa' },
    {
      lang: 'de',
      path: '/de/manifest.webmanifest',
      startUrl: '/de?source=pwa',
    },
  ]) {
    test(`serves the ${lang} manifest`, async ({ request }) => {
      const response = await request.get(path)
      const manifest = await response.json()

      expect(response.status()).toBe(200)
      expect(manifest.lang).toBe(lang)
      expect(manifest.start_url).toBe(startUrl)
      // the browser only keeps the installed app across languages when the identity is shared
      expect(manifest.id).toBe('bbe5f2d7-4968-4cff-a9e8-16622ada2135')
    })
  }
})
