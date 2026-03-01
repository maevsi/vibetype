import type { H3Event } from 'h3'
import type { H3Event$Fetch } from 'nitropack/types'
import type { FetchResponse } from 'ofetch'

export const useCsrfImmediately = () => {
  // get csrf token
  const { csrf: csrfToken } = useCsrf()

  // early return if csrf cookie is already available
  const csrfCookieByRequest = useCookie(CSRF_COOKIE_NAME)
  if (csrfCookieByRequest.value) {
    return {
      csrfToken,
      csrfCookieValue: csrfCookieByRequest.value,
    }
  }

  // if csrf cookie is not available in the request, it might be available in the response (e.g. just set by the server)
  const requestEvent = useRequestEvent()
  const csrfCookieByResponse = getResponseCookie({
    name: CSRF_COOKIE_NAME,
    requestEvent,
  })
  if (csrfCookieByResponse) {
    return {
      csrfToken,
      csrfCookieValue: csrfCookieByResponse.value,
    }
  }

  throw new Error(
    'CSRF cookie is not set. Is it expected to be set in the current context?',
  )
}

export const useCsrfRequestFetch = <T = unknown>(requestEvent: H3Event) => {
  const { csrf } = useCsrf()
  let resolveResponse: (value: FetchResponse<T>) => void
  const promise = new Promise<FetchResponse<T>>((resolve) => {
    resolveResponse = resolve
  })

  const csrfRequestFetch: H3Event$Fetch = (
    url: Parameters<H3Event$Fetch>[0],
    options: Parameters<H3Event$Fetch>[1],
  ) =>
    requestEvent.$fetch(url, {
      ...options,
      onResponse: (response) => {
        resolveResponse(response.response)
      },
      headers: {
        ...(options?.headers || {}),
        [CSRF_HEADER_NAME]: csrf,
      },
    }) satisfies ReturnType<H3Event$Fetch>

  return {
    csrfRequestFetch,
    response: promise,
  }
}
