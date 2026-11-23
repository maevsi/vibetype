export { getIsSecure } from '~~/node/static'
export {
  getHost,
  getResponseCookie,
  getRootHost,
  getServiceHref,
} from '~~/node/networking'

// `//host` and `/\host` start like paths, but browsers resolve them to other sites
export const getIsSitePath = (value: string) => /^\/(?![/\\])/.test(value)

const RATE_LIMIT_BACKOFF_BASE_MILLISECONDS = 500
const RATE_LIMIT_BACKOFF_JITTER_MILLISECONDS = 250
const RATE_LIMIT_RETRY_AFTER_MAXIMUM_MILLISECONDS = 10_000
const RATE_LIMIT_RETRY_COUNT = 3
const STATUS_TOO_MANY_REQUESTS = 429

const getRetryAfterMilliseconds = (value: string | null) => {
  if (value === null || value.trim() === '') return undefined

  const seconds = Number(value)
  const milliseconds = Number.isNaN(seconds)
    ? Date.parse(value) - Date.now()
    : seconds * 1000

  return Number.isNaN(milliseconds)
    ? undefined
    : Math.min(
        Math.max(milliseconds, 0),
        RATE_LIMIT_RETRY_AFTER_MAXIMUM_MILLISECONDS,
      )
}

const waitUnlessAborted = (milliseconds: number, signal?: AbortSignal | null) =>
  new Promise<void>((resolve, reject) => {
    if (signal?.aborted) return reject(signal.reason)

    const onAbort = () => {
      clearTimeout(timeout)
      reject(signal?.reason)
    }
    const timeout = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve()
    }, milliseconds)

    signal?.addEventListener('abort', onAbort, { once: true })
  })

export const getFetchRetryingRateLimit =
  (fetchImplementation: typeof fetch): typeof fetch =>
  async (input, init) => {
    for (let retry = 0; ; retry++) {
      const response = await fetchImplementation(input, init)

      if (
        response.status !== STATUS_TOO_MANY_REQUESTS ||
        retry === RATE_LIMIT_RETRY_COUNT
      )
        return response

      await response.body?.cancel()
      await waitUnlessAborted(
        getRetryAfterMilliseconds(response.headers.get('Retry-After')) ??
          RATE_LIMIT_BACKOFF_BASE_MILLISECONDS * 2 ** retry +
            Math.random() * RATE_LIMIT_BACKOFF_JITTER_MILLISECONDS,
        init?.signal,
      )
    }
  }
