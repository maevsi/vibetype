export default defineEventHandler(async (event) => {
  const key = `${SITE_NAME}_platform`
  const appPlatformHeader = getHeader(event, key)
  const appPlatformCookie = getCookie(event, key)

  event.context.$platform = appPlatformHeader || appPlatformCookie
})

declare module 'h3' {
  interface H3EventContext {
    $platform?: string
  }
}
