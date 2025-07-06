import { setCookie } from 'h3'
import type { H3Event } from 'h3'

export const useJsonWebToken = async () => {
  const event = useEvent()
  const runtimeConfig = useRuntimeConfig()
  const jwtPublicKey = await useJwtPublicKey()

  return {
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
  const dateInAMonth = new Date(Date.now() + 86400 * 1000 * 31)
  const siteUrl = new URL(runtimeConfig.public.i18n.baseUrl)
  const isHttps = siteUrl.protocol === 'https:'
  const jwtCookieName = JWT_NAME({ isHttps })

  setCookie(event, jwtCookieName, jwt, {
    expires: jwt ? dateInAMonth : dateEpoch,
    httpOnly: true,
    // path: '/',
    sameSite: 'lax', // Cannot be 'strict' to allow authentications after clicking on links within webmailers.
    secure: isHttps,
  })
}
