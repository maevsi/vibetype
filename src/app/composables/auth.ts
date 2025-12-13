export const useAuth = async () => {
  const jwtFromCookie = useJwtFromCookie()
  const authenticateAnonymous = useAuthenticateAnonymous()
  const jwtRefreshComposable = useJwtRefresh() // TODO: rename to just `jwtRefreshComposable` when Rolldown supports variable shadowing

  if (import.meta.server) {
    if (jwtFromCookie?.jwtDecoded?.id) {
      await jwtRefreshComposable()
    } else {
      await authenticateAnonymous()
    }
  }
}

export const useAuthentication = () => {
  const store = useStore()

  const isSignedIn = computed(
    () => store.jwtDecoded?.role === `${SITE_NAME}_account`,
  )
  const signedInAccountId = computed(() => store.signedInAccountId)

  return computed(() => {
    if (!isSignedIn.value) {
      return {
        isSignedIn: false as const,
      }
    }

    if (!signedInAccountId.value)
      throw new Error('Inconsistent auth state: signed in but no account ID')

    return {
      isSignedIn: true as const,
      signedInAccountId: signedInAccountId.value,
    }
  })
}

export const useAuthenticateAnonymous = () => {
  const { $urql, $urqlReset, ssrContext } = useNuxtApp()
  const runtimeConfig = useRuntimeConfig()
  const store = useStore()

  return async () =>
    await authenticationAnonymous({
      $urqlReset,
      client: $urql.value,
      event: ssrContext?.event,
      runtimeConfig,
      store,
    })
}

export const useCookieJwt = () => {
  const jwtName = useJwtName()
  return useCookie(jwtName)
}

export const useJwtFromCookie = () => {
  const cookie = useCookieJwt()
  return getJwtFromCookie({ cookie })
}

export const useJwtName = () => getJwtName(useSiteUrl().siteUrlTyped)

export const useJwtRefresh = () => {
  const { $urql, $urqlReset, ssrContext } = useNuxtApp()
  const jwtFromCookie = useJwtFromCookie()
  const runtimeConfig = useRuntimeConfig()
  const store = useStore()

  return async () =>
    await jwtRefresh({
      $urqlReset,
      client: $urql.value,
      event: ssrContext?.event,
      id: jwtFromCookie?.jwtDecoded.id as string,
      runtimeConfig,
      store,
    })
}

export const useJwtStore = async () => {
  const { $urqlReset, ssrContext } = useNuxtApp()
  const store = useStore()
  const runtimeConfig = useRuntimeConfig()

  return {
    jwtStore: async (jwt?: string) => {
      await jwtStore({
        $urqlReset,
        event: ssrContext?.event,
        jwt,
        runtimeConfig,
        store,
      })
    },
  }
}

export const useSignOut = async () => {
  const { $urql, $urqlReset, ssrContext } = useNuxtApp()
  const store = useStore()
  const runtimeConfig = useRuntimeConfig()

  return {
    async signOut() {
      await signOut({
        $urqlReset,
        client: $urql.value,
        event: ssrContext?.event,
        runtimeConfig,
        store,
      })
    },
  }
}
