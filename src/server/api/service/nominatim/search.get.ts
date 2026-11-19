import { z } from 'zod'
import { SITE_URL } from '~~/node/static'

import packageJson from '../../../../package.json'

const NOMINATIM_RATE_LIMIT_MAX_WAIT_MS = 3000
const NOMINATIM_CACHE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7

const querySchema = z.object({
  'accept-language': z.enum(['de', 'en']).optional(),
  q: z.string().trim().min(2).max(200),
})

const search = defineCachedFunction(
  async (q: string, language: string | undefined) => {
    // the operator of the geocoding service may ask for a switch to another provider, which `NUXT_VIBETYPE_NOMINATIM_URL` allows without a release
    const { url } = useRuntimeConfig()[SITE_NAME].nominatim

    // after the cache lookup, so that cached answers do not consume slots of the policy's 1 request per second for the whole application
    try {
      await acquireRateLimitSlot({
        key: 'nominatim:rate',
        limit: 1,
        maxWaitMs: NOMINATIM_RATE_LIMIT_MAX_WAIT_MS,
        redis: getRedisClient(),
      })
    } catch {
      throw createAppError({
        status: 429,
        statusText: 'The address search is busy, please try again.',
      })
    }

    return await $fetch<unknown[]>(`${url}/search`, {
      headers: {
        'User-Agent': `${SITE_NAME}/${packageJson.version} (${SITE_URL})`,
      },
      query: {
        addressdetails: 1,
        'accept-language': language,
        format: 'json',
        limit: 10,
        q,
      },
      timeout: 5000,
    })
  },
  {
    getKey: (q, language) => `${language || ''}:${q}`,
    maxAge: NOMINATIM_CACHE_MAX_AGE_SECONDS,
    name: 'nominatim-search',
  },
)

export default defineEventHandler(async (event) => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwtPayload = await verifyJwt<Jwt>(getJwtFromCookie())

  // the address search is only offered to registered users, so this is no open relay
  if (!(jwtPayload?.role === `${SITE_NAME}_account`))
    throw createAppError({
      status: 403,
      statusText: 'This endpoint only available to registered users.',
    })

  const query = await getQuerySafe({ event, schema: querySchema })

  return await search(
    query.q.toLowerCase().replaceAll(/\s+/g, ' '),
    query['accept-language'],
  )
})
