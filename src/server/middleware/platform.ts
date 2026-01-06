export default defineEventHandler(async (event) => {
  const appPlatformHeader =
    getHeader(event, `${SITE_NAME}_platform`) ||
    getHeader(event, `${SITE_NAME}-platform`) // currently in use by maevsi/android
  const appPlatformCookie =
    getCookie(event, `${SITE_NAME}_platform`) ||
    getCookie(event, 'app-platform') // currently in use by maevsi/ios

  event.context.$platform = appPlatformHeader || appPlatformCookie
})

declare module 'h3' {
  interface H3EventContext {
    $platform?: string
  }
}
