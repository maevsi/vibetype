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
