import { defineEventHandler, getCookie, getRequestHeader } from 'nuxt/server'

export default defineEventHandler(async (event) => {
  const appPlatformHeader =
    getRequestHeader(event, `${SITE_NAME}_platform`) ||
    getRequestHeader(event, `${SITE_NAME}-platform`) // currently in use by maevsi/android
  const appPlatformCookie =
    getCookie(event, `${SITE_NAME}_platform`) ||
    getCookie(event, 'app-platform') // currently in use by maevsi/ios

  event.context.$platform = appPlatformHeader || appPlatformCookie
})

// the app's `ssrContext.event` still sees h3's context
declare module 'h3' {
  interface H3EventContext {
    $platform?: string
  }
}
