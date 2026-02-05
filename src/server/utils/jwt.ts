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

export const useJsonWebToken = async () => {
  const event = useEvent()
  const runtimeConfig = useRuntimeConfig()
  const jwtPublicKey = await useJwtPublicKey()
  const { siteUrlTyped: siteUrl } = useSiteUrl()

  return {
    getJwtFromCookie: () => {
      const jwtCookieName = getJwtName(siteUrl)
      const cookieAuthorization = getCookie(event, jwtCookieName)

      return cookieAuthorization
    },
    setJwtCookie: (jwt: string) => setJwtCookie({ event, jwt, runtimeConfig }),
    verifyJwt: async <T>(jwt?: string) => {
      if (!jwt) return

      if (!jwtPublicKey) {
        return throwError({
          status: 500,
          statusText: 'Secret missing!',
        })
      }

      try {
        return (await verifyJwt({ jwt, jwtPublicKey })).payload as T
      } catch (error) {
        return throwError({
          status: 401,
          statusText: `JSON web token verification failed${error instanceof Error ? `: ${error.message}` : '.'}`,
        })
      }
    },
  }
}

export const useJwtPublicKey = async () =>
  await getJwtPublicKey({ runtimeConfig: useRuntimeConfig() })
