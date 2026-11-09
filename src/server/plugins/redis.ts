export default defineNitroPlugin((nitroApp) => {
  if (!IS_IN_STACK) return

  const redis = getRedisClient()
  let hasLoggedConnectionError = false

  redis.on('error', (error: Error) => {
    console[hasLoggedConnectionError ? 'debug' : 'error'](
      `Redis connection error: ${error.message}`,
    )
    hasLoggedConnectionError = true
  })
  redis.on('connect', () => {
    hasLoggedConnectionError = false
    console.info('Redis connected')
  })

  nitroApp.hooks.hookOnce('close', async () => {
    await redis.quit()
  })
})
