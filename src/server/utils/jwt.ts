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

      return cookieAuthorization
    },
    getJwtFromHeader: () => {
      const headerAuthorization = getRequestHeader(event, 'authorization')

      if (!headerAuthorization) {
        return throwError({
          status: 401,
          statusText: 'The request header "Authorization" is missing!',
        })
      }

      return headerAuthorization.substring(7)
    },
    setJwtCookie: (jwt: string) => setJwtCookie({ event, jwt, runtimeConfig }),
    verifyJwt: async (jwt?: string) => {
      if (!jwt) return

      if (!jwtPublicKey) {
        return throwError({
          status: 500,
          statusText: 'Secret missing!',
        })
      }

      try {
        return (await verifyJwt({ jwt, jwtPublicKey })).payload
      } catch (error) {
        return throwError({
          status: 401,
          statusText: `JSON web token verification failed${error instanceof Error ? `: ${error.message}` : '.'}`,
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
