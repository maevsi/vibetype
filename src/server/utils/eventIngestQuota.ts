// deliberate shortcut: counted in memory, so it resets on restart and is not shared across replicas; the upgrade path is a persistent per-account cost quota
const createDailyQuota = ({
  limit,
  statusText,
}: {
  limit: number
  statusText: string
}) => {
  const requestCounts = new Map<string, number>()

  return (account: string) => {
    const day = new Date().toISOString().slice(0, 10)
    const requestCountKey = `${account}:${day}`
    const assertBelowLimit = () => {
      const requestCount = requestCounts.get(requestCountKey) ?? 0

      if (requestCount >= limit)
        throw createAppError({ status: 429, statusText })

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
}

/** One daily budget per account for every route that sends an import to OpenAI. */
export const useEventIngestQuota = createDailyQuota({
  limit: 10,
  statusText: 'The daily limit of poster readings has been reached.',
})

/** Bounds how many pages one account makes the server load per day, including those that never reach OpenAI. */
export const useEventIngestPageLoadQuota = createDailyQuota({
  limit: 50,
  statusText: 'The daily limit of loaded links has been reached.',
})
