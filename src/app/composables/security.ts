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

export const useCsrfRequestFetch = () => {
  const { csrf } = useCsrf()
  const requestFetch = useRequestFetch()

  const csrfRequestFetch: typeof requestFetch = (
    url: Parameters<typeof requestFetch>[0],
    options?: Parameters<typeof requestFetch>[1],
  ) =>
    requestFetch(url, {
      ...options,
      headers: {
        ...(options?.headers || {}),
        [CSRF_HEADER_NAME]: csrf,
      },
    })

  return csrfRequestFetch
}
