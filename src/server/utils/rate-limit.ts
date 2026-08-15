import type Redis from 'ioredis'

const RATE_LIMIT_SCRIPT = `local c = redis.call('get', KEYS[1])
if c and tonumber(c) >= tonumber(ARGV[1]) then return 0 end
local n = redis.call('incr', KEYS[1])
redis.call('expire', KEYS[1], ARGV[2])
return n`

export const acquireRateLimitSlot = async ({
  key,
  limit,
  maxWaitMs,
  redis,
  windowSeconds = 1,
}: {
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
      const count = await redis.eval(
        RATE_LIMIT_SCRIPT,
        1,
        windowKey,
        String(limit),
        String(windowSeconds + 1),
      )

      if (Number(count) > 0) return

      const waitMs = windowMs - (Date.now() % windowMs)
      await new Promise<void>((resolve) => setTimeout(resolve, waitMs))
    } catch (error) {
      console.warn(
        `Rate limiting unavailable for "${key}", proceeding: ${error}`,
      )
      return
    }
  }

  throw new Error(
    `Rate limit slot for "${key}" could not be acquired within ${maxWaitMs}ms`,
  )
}
