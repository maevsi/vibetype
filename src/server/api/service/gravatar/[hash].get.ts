import { z } from 'zod'
import { SITE_URL } from '~~/node/static'

import packageJson from '../../../../package.json'

const GRAVATAR_CACHE_MAX_AGE_SECONDS = 60 * 60 * 24
const GRAVATAR_RATE_LIMIT_MAX_WAIT_MS = 1000
const GRAVATAR_RATE_LIMIT_PER_SECOND = 50

// Gravatar accepts the MD5 and the SHA-256 hash of the email address
const paramsSchema = z.object({
  hash: z.string().regex(/^(?:[0-9a-f]{32}|[0-9a-f]{64})$/),
})
const querySchema = z.object({
  s: z.coerce.number().int().min(16).max(512),
})

const fetchAvatar = defineCachedFunction(
  async (hash: string, size: number) => {
    // after the cache lookup, so that cached answers do not consume slots
    try {
      // fail open, as the limiter only keeps this endpoint from amplifying requests to Gravatar
      await acquireRateLimitSlot({
        key: 'gravatar:rate',
        limit: GRAVATAR_RATE_LIMIT_PER_SECOND,
        maxWaitMs: GRAVATAR_RATE_LIMIT_MAX_WAIT_MS,
        redis: getRedisClient(),
      })
    } catch {
      throw createAppError({
        status: 429,
        statusText: 'Profile pictures are busy, please try again.',
      })
    }

    // no client headers or cookies are forwarded, so Gravatar only sees this server
    const response = await $fetch.raw<Blob>(
      `https://www.gravatar.com/avatar/${hash}`,
      {
        headers: {
          'User-Agent': `${SITE_NAME}/${packageJson.version} (${SITE_URL})`,
        },
        ignoreResponseError: true,
        query: { d: 'mp', s: size },
        responseType: 'blob',
        timeout: 5000,
      },
    )

    if (response.status === 404) return { isFound: false as const }

    if (!response.ok)
      throw createAppError({
        status: 502,
        statusText: 'The profile picture could not be loaded.',
      })

    return {
      contentType: response.headers.get('content-type') || 'image/png',
      data: Buffer.from(await response._data!.arrayBuffer()).toString('base64'),
      isFound: true as const,
    }
  },
  {
    getKey: (hash, size) => `${hash}:${size}`,
    maxAge: GRAVATAR_CACHE_MAX_AGE_SECONDS,
    name: 'gravatar-avatar',
    // upstream failures throw and are therefore not cached
  },
)

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, (data) =>
    paramsSchema.safeParse(data),
  )
  if (!params.success)
    throw createAppError({ status: 400, statusText: 'Validation Error' })

  const query = await getQuerySafe({ event, schema: querySchema })

  const avatar = await fetchAvatar(params.data.hash, query.s)

  setHeader(
    event,
    'Cache-Control',
    `public, max-age=${GRAVATAR_CACHE_MAX_AGE_SECONDS}`,
  )

  if (!avatar.isFound)
    throw createAppError({ status: 404, statusText: 'Not Found' })

  setHeader(event, 'Content-Type', avatar.contentType)

  return Buffer.from(avatar.data, 'base64')
})
