export const useAuth = async () => {
  const store = useStore()
  const authenticateAnonymous = useAuthenticateAnonymous()
  const jwtRefresh = useJwtRefresh()

  if (import.meta.server) {
    if (store.jwtDecoded?.id) {
      await jwtRefresh()
    } else {
      await authenticateAnonymous()
    }
  }
}

export const useAuthInfo = () => {
  const store = useStore()
  const isSignedIn = computed(
    () => store.jwtDecoded?.role === `${SITE_NAME}_account`,
  )

  return {
    isSignedIn,
  }
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

export const useJwtRefresh = () => {
  const { $urql, $urqlReset, ssrContext } = useNuxtApp()
  const runtimeConfig = useRuntimeConfig()
  const store = useStore()

  return async () =>
    await jwtRefresh({
      $urqlReset,
      client: $urql.value,
      event: ssrContext?.event,
      id: store.jwtDecoded?.id as string,
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
