import { test, expect } from '@playwright/test'

import { TESTING_COOKIE_NAME } from '#src/shared/utils/constants'

test.describe('headers middleware', () => {
  test('sets the correct headers', async ({ request }) => {
    if (process.env.VIO_SERVER === 'static') return // TODO: use single snapshot and all servers

    const HEADERS = {
      'access-control-allow-origin': '*',
      'Content-Security-Policy': `base-uri 'none'; default-src 'none'; connect-src blob: https://localhost:3001 https://postgraphile.localhost:3001 https://tusd.localhost:3001 https://cloudflareinsights.com https://*.analytics.google.com https://*.google-analytics.com https://*.googletagmanager.com https://o4507213726154752.ingest.de.sentry.io/api/4507213736837200/envelope/ 'self' https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com; font-src 'self' data:; form-action 'self'; frame-ancestors 'none'; frame-src https://challenges.cloudflare.com; img-src blob: https://tusd.localhost:3001 https://www.gravatar.com/avatar/ https://*.google-analytics.com https://*.googletagmanager.com 'self' data:; manifest-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'wasm-unsafe-eval'; worker-src http://localhost:3001/sw.js blob:; script-src-elem https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js https://static.cloudflareinsights.com http://localhost:3001/cdn-cgi/ https://challenges.cloudflare.com https://*.googletagmanager.com 'nonce' http://localhost:3001/_nuxt/;`,
      'content-type': 'text/html;charset=utf-8',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'same-origin',
      'Document-Policy': 'js-profiling',
      NEL: '\'{"report_to":"default","max_age":31536000,"include_subdomains":true}\'',
      'Origin-Agent-Cluster': '?1',
      'Permissions-Policy':
        'accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(self), usb=(), web-share=(), xr-spatial-tracking=()',
      'Referrer-Policy': 'no-referrer',
      'Report-To': `'{"group":"default","max_age":31536000,"endpoints":[{"url":"https://o4507213726154752.ingest.de.sentry.io/api/4507213736837200/security/?sentry_key=5e253cec6a72a9eea44531e7205016ba&sentry_environment=production&sentry_release=<VERSION>"}],"include_subdomains":true}'`,
      'Strict-Transport-Security':
        'max-age=31536000; includeSubDomains; preload;',
      'X-Content-Type-Options': 'nosniff',
      'X-DNS-Prefetch-Control': 'off',
      'X-Download-Options': 'noopen',
      'X-Frame-Options': 'DENY',
      'X-Permitted-Cross-Domain-Policies': 'none',
      'X-Robots-Tag':
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      'X-XSS-Protection': '1; mode=block',
    }

    const response = await request.get('/', {
      headers: {
        Cookie: `${TESTING_COOKIE_NAME}=true`,
      },
    })
    const responseHeaders = response.headers()

    for (const [key, expectedValue] of Object.entries(HEADERS)) {
      await test.step(`Header: ${key}`, () => {
        switch (key) {
          case 'Content-Security-Policy':
            expect(
              responseHeaders[key.toLowerCase()].replace(
                /nonce-[^']+/g,
                'nonce',
              ),
            ).toEqual(expectedValue)
            break
          case 'Report-To':
            expect(
              responseHeaders[key.toLowerCase()].replace(
                /sentry_release=[^"]+/g,
                'sentry_release=<VERSION>',
              ),
            ).toEqual(expectedValue)
            break
          default:
            expect(responseHeaders[key.toLowerCase()]).toEqual(expectedValue)
            break
        }
      })
    }
  })
})
