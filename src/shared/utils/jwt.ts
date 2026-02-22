import { type H3Event, setCookie } from 'h3'
import type { useRuntimeConfig } from 'nuxt/app'

import { COOKIE_SAME_SITE } from './constants'
import { throwError } from './error'
import { getIsSecure } from './networking'
import { getSiteUrl } from './vio'

export const getJwtName = (siteUrl: URL) =>
  `${getIsSecure({ siteUrl }) ? '__Host-' : ''}jwt-v3`

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

  const { siteUrlTyped: siteUrl } = getSiteUrl(
    runtimeConfig.public.i18n.baseUrl,
  )
  const jwtCookieName = getJwtName(siteUrl)
  const isSecure = getIsSecure({ runtimeConfig })

  setCookie(event, jwtCookieName, jwt, {
    expires: jwt.length ? dateInAMonth : dateEpoch,
    httpOnly: true,
    sameSite: COOKIE_SAME_SITE,
    secure: isSecure,
  })
}

export const getJwtPublicKey = async ({
  runtimeConfig,
}: {
  runtimeConfig: ReturnType<typeof useRuntimeConfig>
}) => {
  if (runtimeConfig.public.vio.stagingHost) {
    return await $fetch<string>(
      `https://${runtimeConfig.public.vio.stagingHost}/api/service/postgraphile/jwt-public-key`,
    )
  }

  return runtimeConfig.public.vio.auth.jwt.publicKey
}
