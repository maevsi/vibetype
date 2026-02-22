import { type H3Event, setCookie } from 'h3'

export const getJwtName = (siteUrl: URL) =>
  JWT_NAME({ isHttps: siteUrl.protocol === 'https:' })

export const setJwtCookie = ({
  event,
  jwt,
  runtimeConfig,
}: {
  event: H3Event
  jwt: string
  runtimeConfig: ReturnType<typeof useRuntimeConfig>
}) => {
  const dateEpoch = new Date(0)
  const dateInAMonth = new Date(Date.now() + 86400 * 1000 * 31) // TODO: read from jwt expiration claim

  if (!runtimeConfig.public.i18n.baseUrl) {
    return throwError({
      status: 500,
      statusText: 'Site URL is not defined in the runtime configuration.',
    })
  }

  const siteUrl = getSiteUrl(runtimeConfig.public.i18n.baseUrl).siteUrlTyped
  const isSecure = getIsSecure({ siteUrl })
  const jwtCookieName = JWT_NAME({ isHttps: isSecure })

  setCookie(event, jwtCookieName, jwt, {
    domain: siteUrl.hostname,
    expires: jwt ? dateInAMonth : dateEpoch,
    httpOnly: true,
    // path: '/',
    sameSite: COOKIE_SAME_SITE,
    secure: isSecure,
  })
}
