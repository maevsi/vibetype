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

export const useJwtCookie = (
  options:
    | { options: CookieOptions & { readonly: false } }
    | undefined = undefined,
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
  const { csrfToken, csrfCookieValue } = useCsrfImmediately()
  const headers = requestEvent.headers
  const cookieHeaderValue = [
    ...(!headers.get('cookie')?.includes(`${CSRF_COOKIE_NAME}=`) &&
    csrfCookieValue
      ? [`${CSRF_COOKIE_NAME}=${csrfCookieValue}`]
      : []),
    ...(headers.get('cookie') ? [headers.get('cookie')] : []),
  ].join('; ')
  const csrfHeaderValue = headers.get(CSRF_HEADER_NAME) || csrfToken
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
      extract: (data) => data.jwtUpdateGuestAdd?.result,
      result,
    })
    jwtCookie.value = jwt

    return jwt
  }
}
