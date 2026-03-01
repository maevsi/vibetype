export const useJsonWebToken = async () => {
  const event = useEvent()
  const runtimeConfig = useRuntimeConfig()
  const jwtPublicKey = await useJwtPublicKey()

  return {
    getJwtFromCookie: (options: { name: string } = { name: JWT_COOKIE_NAME }) =>
      getCookie(event, options.name),
    setJwtCookie: ({ expires, value }: { expires: number; value?: string }) => {
      const args = getJwtCookieParameters({
        runtimeConfig,
      })
      setCookie(event, args.name, value || '', {
        ...args.options,
        expires: new Date(expires),
      })
    },
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
