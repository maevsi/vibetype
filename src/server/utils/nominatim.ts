import { $fetch } from 'ofetch'
import { SITE_URL } from '~~/node/static'

import packageJson from '../../package.json'

export const NOMINATIM_CACHE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7
const NOMINATIM_RATE_LIMIT_MAX_WAIT_MS = 3000

/** Rejects everyone but signed-in accounts, so the Nominatim routes are no open relay. */
export const assertNominatimAccess = async () => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwtPayload = await verifyJwt<Jwt>(getJwtFromCookie())

  if (!(jwtPayload?.role === `${SITE_NAME}_account`))
    throw createAppError({
      status: 403,
      statusText: 'This endpoint is only available to registered users.',
    })
}

/** Requests Nominatim under its usage policy, to be called after the cache lookup so that cached answers consume no slot. */
export const fetchNominatim = async (
  path: 'reverse' | 'search',
  query: Record<string, number | string | undefined>,
): Promise<unknown> => {
  // the operator of the geocoding service may ask for a switch to another provider, which `NUXT_VIBETYPE_NOMINATIM_URL` allows without a release
  const { url } = useRuntimeConfig()[SITE_NAME].nominatim

  // search and reverse share one slot, as the policy allows 1 request per second for the whole application
  try {
    // fail closed, as an unavailable limiter could otherwise let several instances exceed the policy's limit together
    await acquireRateLimitSlot({
      isFailOpen: false,
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

  return await $fetch<unknown>(`${url}/${path}`, {
    headers: {
      'User-Agent': `${SITE_NAME}/${packageJson.version} (${SITE_URL})`,
    },
    query: {
      addressdetails: 1,
      format: 'json',
      ...query,
    },
    timeout: 5000,
  })
}
