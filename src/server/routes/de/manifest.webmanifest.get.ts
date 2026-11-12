import { getPwaManifest } from '~~/node/static/pwa'

// the pwa plugin only writes the manifest of the default locale to the build, so the german one is served from this route instead
export default defineEventHandler((h3Event) => {
  setResponseHeaders(h3Event, {
    'Content-Type': 'application/manifest+json',
    'Cache-Control': 'public, max-age=0, must-revalidate',
  })

  return getPwaManifest({ locale: 'de' })
})
