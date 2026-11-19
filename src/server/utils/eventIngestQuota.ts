const REQUESTS_PER_ACCOUNT_PER_DAY = 10
// deliberate shortcut: counted in memory, so it resets on restart and is not shared across replicas; the upgrade path is a persistent per-account cost quota
const requestCounts = new Map<string, number>()

/** One daily budget per account for every route that sends an import to OpenAI. */
export const useEventIngestQuota = (account: string) => {
  const day = new Date().toISOString().slice(0, 10)
  const requestCountKey = `${account}:${day}`
  const assertBelowLimit = () => {
    const requestCount = requestCounts.get(requestCountKey) ?? 0

    if (requestCount >= REQUESTS_PER_ACCOUNT_PER_DAY)
      throw createAppError({
        status: 429,
        statusText: 'The daily limit of poster readings has been reached.',
      })

    return requestCount
  }
  // checks again, as parallel requests passed the first check while the caller was busy
  const count = () => {
    for (const key of requestCounts.keys())
      if (!key.endsWith(`:${day}`)) requestCounts.delete(key)

    requestCounts.set(requestCountKey, assertBelowLimit() + 1)
  }

  return { assertBelowLimit, count }
}
