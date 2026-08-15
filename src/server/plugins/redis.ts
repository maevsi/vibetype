export default defineNitroPlugin((nitroApp) => {
  if (!IS_IN_STACK) return

  const redis = getRedisClient()

  redis.on('error', (error: Error) =>
    console.error(`Redis connection error: ${error.message}`),
  )
  redis.on('connect', () => console.info('Redis connected'))

  nitroApp.hooks.hookOnce('close', async () => {
    await redis.quit()
  })
})
