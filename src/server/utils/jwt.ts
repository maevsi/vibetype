import { setCookie } from 'h3'
import type { H3Event } from 'h3'

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
      statusCode: 500,
      statusMessage: 'Site URL is not defined in the runtime configuration.',
    })
  }

  const siteUrl = new URL(runtimeConfig.public.i18n.baseUrl as string) // TODO: remove typecast in @nuxtjs/i18n v11
  const isHttps = siteUrl.protocol === 'https:'
  const jwtCookieName = JWT_NAME({ isHttps })

  setCookie(event, jwtCookieName, jwt, {
    domain: siteUrl.hostname,
    expires: jwt ? dateInAMonth : dateEpoch,
    httpOnly: true,
    // path: '/',
    sameSite: 'lax', // Cannot be 'strict' to allow authentications after clicking on links within webmailers.
    secure: isHttps,
  })
}

export const useJsonWebToken = async () => {
  const event = useEvent()
  const runtimeConfig = useRuntimeConfig()
  const jwtPublicKey = await useJwtPublicKey()

  return {
    // TODO: reevaluate name due to duplicate naming
    getJwtFromCookie: () => {
      const siteUrl = new URL(runtimeConfig.public.i18n.baseUrl as string) // TODO: remove typecast in @nuxtjs/i18n v11
      const isHttps = siteUrl.protocol === 'https:'
      const jwtCookieName = JWT_NAME({ isHttps })
      const cookieAuthorization = getCookie(event, jwtCookieName)

      if (!cookieAuthorization) {
        return throwError({
          statusCode: 401,
          statusMessage: 'The authorization cookie is missing',
        })
      }

      return cookieAuthorization
    },
    getJwtFromHeader: () => {
      const headerAuthorization = getRequestHeader(event, 'authorization')

      if (!headerAuthorization) {
        return throwError({
          statusCode: 401,
          statusMessage: 'The request header "Authorization" is missing!',
        })
      }

      return headerAuthorization.substring(7)
    },
    setJwtCookie: (jwt: string) => setJwtCookie({ event, jwt, runtimeConfig }),
    verifyJwt: async (jwt: string) => {
      if (!jwtPublicKey) {
        return throwError({
          statusCode: 500,
          statusMessage: 'Secret missing!',
        })
      }

      try {
        return (await verifyJwt({ jwt, jwtPublicKey })).payload
      } catch (error) {
        return throwError({
          statusCode: 401,
          statusMessage: `JSON web token verification failed${error instanceof Error ? `: ${error.message}` : '.'}`,
        })
      }
    },
  }
}

export const useJwtName = () => getJwtName(useSiteUrl().siteUrlTyped)

export const useJwtPublicKey = async () => {
  const runtimeConfig = useRuntimeConfig()

  if (runtimeConfig.public.vio.stagingHost) {
    return await $fetch<string>(
      `https://${runtimeConfig.public.vio.stagingHost}/api/service/postgraphile/jwt-public-key`,
    )
  } else {
    return runtimeConfig.public.vio.auth.jwt.publicKey
  }
}
