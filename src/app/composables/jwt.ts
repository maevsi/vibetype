import { useMutation } from '@urql/vue'

import type { CookieOptions } from '#app'

import { graphql } from '~~/gql/generated'
import type { uuid } from '~~/shared/types/model'

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

/** Sends visitors who are not signed in to the sign-in page, which returns them to the current page afterwards. */
export const useSignInRequired = async () => {
  const store = useStore()

  if (store.signedInUsername) return

  const localePath = useLocalePath()
  const route = useRoute()

  // without history, as the back button would return to the current page otherwise, which only redirects again
  await navigateTo(
    {
      path: localePath('session-create'),
      query: { to: route.fullPath },
    },
    { replace: true },
  )
}

export const useJwtCookie = (
  options:
    { options: CookieOptions & { readonly: false } } | undefined = undefined,
) => {
  const { siteUrlTyped: siteUrl } = useSiteUrl()
  const jwtCookieParameters = getJwtCookieParameters({
    siteUrl,
  })

  const cookie = useCookie(jwtCookieParameters.name, {
    ...jwtCookieParameters.options,
    ...(options?.options ? options.options : {}),
  })

  return cookie
}

export const useJwtDelete = () => {
  const { $csrfFetch, $urql, $urqlReset } = useNuxtApp()
  const store = useStore()
  const notificationStore = useNotificationStore()

  return async () => {
    // captured before `jwtDelete` clears `store.signedInAccountId`
    const signedInAccountId = store.signedInAccountId

    if (signedInAccountId) {
      // Best-effort: `unregisterDevice` reports its own errors and never
      // rejects on a GraphQL-level failure, so sign-out always proceeds
      // below even if the device couldn't be unregistered.
      await notificationStore.unregisterDevice($urql.value, signedInAccountId)
    }

    await jwtDelete({
      $urqlReset,
      requestFetch: $csrfFetch,
      store,
    })
  }
}

/** Deletes the session and sends the visitor to the home page. */
export const useSignOutToRoot = () => {
  const jwtDelete = useJwtDelete()
  const localePath = useLocalePath()

  return async () => {
    await jwtDelete()
    return navigateTo(
      localePath({
        name: 'index',
        query: {
          signOut: null,
        },
      }),
    )
  }
}

export const useJwtInitialize = async () => {
  const nuxtApp = useNuxtApp()
  const store = useStore()

  const { data: initialData } = await useFetch('/api/model/jwt')
  store.jwtSet(initialData.value?.jwtPayload)

  if (!store.jwtPayload) return

  const jwtId = store.jwtPayload.jti

  try {
    const { data: updatedData, error } = await nuxtApp.runWithContext(() =>
      useCsrfRequestFetch('/api/model/jwt', {
        body: { id: jwtId },
        method: 'PUT',
      }),
    )

    if (error.value) throw error.value

    if (!updatedData.value?.jwtPayload) {
      throw new Error('JWT update failed: no JWT returned')
    }

    store.jwtSet(updatedData.value.jwtPayload)
    // no $urqlReset necessary as authorization is not expected to change
  } catch (error) {
    console.error('JWT update failed:', error)
  }

  return syncLocaleCookieToTokenLanguage({ nuxtApp, store })
}

export const useJwtUpdateGuestAdd = ({ guestId }: { guestId: uuid }) => {
  const requestEvent = useRequestEvent()

  if (!requestEvent) {
    throw new Error('Request event is not available.')
  }

  const mutationJwtUpdateGuestAdd = graphql(`
    mutation JwtUpdateGuestAddGuest($input: JwtUpdateGuestAddInput!) {
      jwtUpdateGuestAdd(input: $input) {
        result
      }
    }
  `)
  const { csrfToken } = useCsrfImmediately()
  const cookieHeaderValue = useCsrfCookieHeader()
  const csrfHeaderValue =
    requestEvent.headers.get(CSRF_HEADER_NAME) || csrfToken
  const jwtUpdateGuestAddMutation = useMutation(mutationJwtUpdateGuestAdd)
  const jwtCookie = useJwtCookie()

  return async () => {
    const result = await jwtUpdateGuestAddMutation.executeMutation(
      {
        input: {
          guestId,
        },
      },
      {
        fetchOptions: () => ({
          headers: {
            ...(cookieHeaderValue ? { cookie: cookieHeaderValue } : {}),
            ...(csrfHeaderValue ? { [CSRF_HEADER_NAME]: csrfHeaderValue } : {}),
          },
        }),
      },
    )

    const jwt = getJwtFromResult({
      context: 'JWT guest add',
      createAppError,
      extract: (data) => data.jwtUpdateGuestAdd?.result,
      result,
    })
    jwtCookie.value = jwt

    return jwt
  }
}
