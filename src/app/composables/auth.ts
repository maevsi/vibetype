export const useAuth = async () => {
  const store = useStore()
  const jwtCreateAnonymous = useJwtCreateAnonymous()
  const jwtUpdate = useJwtUpdate()

  if (import.meta.server) {
    if (store.jwtDecoded?.jti) {
      await jwtUpdate()
    } else {
      await jwtCreateAnonymous()
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

export const useJwtCreateAnonymous = () => {
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

export const useJwtUpdate = () => {
  const { $urql, $urqlReset, ssrContext } = useNuxtApp()
  const runtimeConfig = useRuntimeConfig()
  const store = useStore()

  return async () =>
    await jwtUpdate({
      $urqlReset,
      client: $urql.value,
      event: ssrContext?.event,
      id: store.jwtDecoded?.jti as string,
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
