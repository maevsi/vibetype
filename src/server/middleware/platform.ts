export default defineEventHandler(async (event) => {
  const appPlatformHeader =
    getHeader(event, `${SITE_NAME}_platform`) ||
    getHeader(event, `${SITE_NAME}-platform`)
  const appPlatformCookie =
    getCookie(event, `${SITE_NAME}_platform`) ||
    getCookie(event, 'app-platform')

  if (appPlatformHeader || appPlatformCookie) {
    event.context.$platform = appPlatformHeader || appPlatformCookie
    return
  }
})
