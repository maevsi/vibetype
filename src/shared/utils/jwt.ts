import type { useRuntimeConfig } from 'nuxt/app'

import { JWT_COOKIE_NAME } from '~~/node/static'

import { COOKIE_SAME_SITE } from './constants'
import { getIsSecure } from './networking'

export { JWT_COOKIE_NAME } from '~~/node/static'

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

export const getJwtCookieParameters = ({
  jwt,
  runtimeConfig,
}: {
  jwt: string
  runtimeConfig: ReturnType<typeof useRuntimeConfig>
}) => {
  const jwtCookieName = JWT_COOKIE_NAME
  const dateInAMonth = new Date(Date.now() + 86400 * 1000 * 31) // TODO: read from jwt expiration claim
  const dateEpoch = new Date(0)
  const isSecure = getIsSecure({ runtimeConfig })

  return {
    name: jwtCookieName,
    value: jwt,
    options: {
      expires: jwt.length ? dateInAMonth : dateEpoch,
      httpOnly: true,
      sameSite: COOKIE_SAME_SITE,
      secure: isSecure,
    },
  }
}
