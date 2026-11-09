import { defineEventHandler, getCookie, getRequestHeader } from 'nuxt/server'

export default defineEventHandler(async (event) => {
  const key = `${SITE_NAME}_platform`
  const appPlatformHeader = getRequestHeader(event, key)
  const appPlatformCookie = getCookie(event, key)

  event.context.$platform = appPlatformHeader || appPlatformCookie
})

// the app's `ssrContext.event` still sees h3's context
declare module 'h3' {
  interface H3EventContext {
    $platform?: string
  }
}
