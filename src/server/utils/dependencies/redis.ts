import Redis from 'ioredis'

let _redisClient: Redis | undefined

export const getRedisClient = (): Redis => {
  if (!_redisClient) {
    const runtimeConfig = useRuntimeConfig()
    _redisClient = new Redis(runtimeConfig[SITE_NAME].redis.url)
  }

  return _redisClient
}
