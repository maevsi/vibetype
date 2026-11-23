import type Redis from 'ioredis'

const RATE_LIMIT_SCRIPT = `local c = redis.call('get', KEYS[1])
if c and tonumber(c) >= tonumber(ARGV[1]) then return 0 end
local n = redis.call('incr', KEYS[1])
redis.call('expire', KEYS[1], ARGV[2])
return n`

// keys whose limiter fails open right now, so that an outage logs one warning per key instead of one per request
const unavailableKeys = new Set<string>()

// ioredis queues commands while disconnected and rejects them only after all its retries, which takes seconds
const withTimeout = async <T>(promise: Promise<T>, timeoutMs: number) => {
  let timeout: ReturnType<typeof setTimeout> | undefined

  try {
    return await Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        timeout = setTimeout(
          () => reject(new Error(`No answer within ${timeoutMs}ms`)),
          timeoutMs,
        )
      }),
    ])
  } finally {
    clearTimeout(timeout)
  }
}

export const acquireRateLimitSlot = async ({
  isFailOpen = true,
  key,
  limit,
  maxWaitMs,
  redis,
  windowSeconds = 1,
}: {
  isFailOpen?: boolean
  key: string
  limit: number
  maxWaitMs: number
  redis: Redis
  windowSeconds?: number
}): Promise<void> => {
  const startTime = Date.now()
  const windowMs = windowSeconds * 1000

  while (Date.now() - startTime < maxWaitMs) {
    try {
      const windowKey = `${key}:${Math.floor(Date.now() / windowMs)}`

      // Atomically increment only when under the limit to avoid inflating the
      // counter on failed acquisitions, which would reduce throughput further.
      const count = await withTimeout(
        redis.eval(
          RATE_LIMIT_SCRIPT,
          1,
          windowKey,
          String(limit),
          String(windowSeconds + 1),
        ),
        maxWaitMs - (Date.now() - startTime),
      )
      unavailableKeys.delete(key)

      if (Number(count) > 0) return

      const waitMs = windowMs - (Date.now() % windowMs)
      await new Promise<void>((resolve) => setTimeout(resolve, waitMs))
    } catch (error) {
      if (!isFailOpen) throw error

      console[unavailableKeys.has(key) ? 'debug' : 'warn'](
        `Rate limiting unavailable for "${key}", proceeding: ${error}`,
      )
      unavailableKeys.add(key)
      return
    }
  }

  throw new Error(
    `Rate limit slot for "${key}" could not be acquired within ${maxWaitMs}ms`,
  )
}
