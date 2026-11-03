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

// a csrf cookie created for the current request exists only in the response,
// so server-side requests must add it to the forwarded cookies or the token
// mismatches
export const useCsrfCookieHeader = () => {
  const cookie = useRequestHeader('cookie')
  if (cookie?.includes(`${CSRF_COOKIE_NAME}=`)) return cookie

  const { csrfCookieValue } = useCsrfImmediately()
  return [
    `${CSRF_COOKIE_NAME}=${csrfCookieValue}`,
    ...(cookie ? [cookie] : []),
  ].join('; ')
}

export const useCsrfRequestFetch = createUseFetch((currentOptions) => {
  const { csrf } = useCsrf()
  return {
    headers: {
      ...toValue(currentOptions.headers),
      [CSRF_HEADER_NAME]: csrf,
      ...(import.meta.server ? { cookie: useCsrfCookieHeader() } : {}),
    },
  }
})
