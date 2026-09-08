export default defineNitroPlugin((nitroApp) => {
  if (!IS_IN_STACK) return

  const redis = getRedisClient()

  // ioredis retries indefinitely and emits 'error' on every failed attempt, so without this
  // guard a downed Redis logs the same connection error once per retry instead of once per outage.
  let hasLoggedConnectionError = false

  redis.on('error', (error: Error) => {
    if (hasLoggedConnectionError) return
    hasLoggedConnectionError = true
    console.error(`Redis connection error: ${error.message}`)
  })
  redis.on('connect', () => {
    hasLoggedConnectionError = false
    console.info('Redis connected')
  })

  nitroApp.hooks.hookOnce('close', async () => {
    await redis.quit()
  })
})
