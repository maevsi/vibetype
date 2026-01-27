export const useAuthentication = () => {
  const store = useStore()

  const isSignedIn = computed(
    () => store.jwtPayload?.role === `${SITE_NAME}_account`,
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

export const useJwtDelete = async () => {
  const { $urqlReset } = useNuxtApp()
  const requestFetch = useRequestFetch()
  const store = useStore()

  return async () =>
    await jwtDelete({
      $urqlReset,
      requestFetch,
      store,
    })
}
