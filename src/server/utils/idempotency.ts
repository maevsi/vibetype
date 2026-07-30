import type Redis from 'ioredis'

export const hasBeenProcessed = async (
  redis: Redis,
  key: string,
): Promise<boolean> => (await redis.get(key)) !== null

export const markProcessed = async (
  redis: Redis,
  key: string,
  ttlSeconds: number,
): Promise<void> => {
  await redis.set(key, '1', 'EX', ttlSeconds)
}
