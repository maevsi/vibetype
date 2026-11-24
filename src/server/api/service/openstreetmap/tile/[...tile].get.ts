import { $fetch } from 'ofetch'
import { z } from 'zod'
import { SITE_URL } from '~~/node/static'

import packageJson from '../../../../../package.json'

// the tile usage policy asks for at least 7 days of caching
const TILE_CACHE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7
const TILE_RATE_LIMIT_MAX_WAIT_MS = 1000
const TILE_RATE_LIMIT_PER_SECOND = 50
const TILE_ZOOM_MAXIMUM = 19

const paramsSchema = z.object({
  tile: z
    .string()
    .regex(/^(\d{1,2})\/(\d{1,6})\/(\d{1,6})\.png$/)
    .transform((tile) => tile.slice(0, -'.png'.length).split('/').map(Number))
    .refine(
      ([zoom, x, y]) =>
        zoom! <= TILE_ZOOM_MAXIMUM && x! < 2 ** zoom! && y! < 2 ** zoom!,
    ),
})

const fetchTile = defineCachedFunction(
  async (zoom: number, x: number, y: number) => {
    // after the cache lookup, so that cached answers do not consume slots
    try {
      // fail open, as the limiter only keeps this endpoint from amplifying requests to the tile server
      await acquireRateLimitSlot({
        key: 'openstreetmap-tile:rate',
        limit: TILE_RATE_LIMIT_PER_SECOND,
        maxWaitMs: TILE_RATE_LIMIT_MAX_WAIT_MS,
        redis: getRedisClient(),
      })
    } catch {
      throw createAppError({
        status: 429,
        statusText: 'The map is busy, please try again.',
      })
    }

    // no client headers or cookies are forwarded, so OpenStreetMap only sees this server
    const response = await $fetch.raw(
      `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`,
      {
        headers: {
          'User-Agent': `${SITE_NAME}/${packageJson.version} (${SITE_URL})`,
        },
        ignoreResponseError: true,
        responseType: 'blob',
        timeout: 5000,
      },
    )

    if (!response.ok)
      throw createAppError({
        status: 502,
        statusText: 'The map tile could not be loaded.',
      })

    return Buffer.from(await response._data!.arrayBuffer()).toString('base64')
  },
  {
    getKey: (zoom, x, y) => `${zoom}/${x}/${y}`,
    maxAge: TILE_CACHE_MAX_AGE_SECONDS,
    name: 'openstreetmap-tile',
    // upstream failures throw and are therefore not cached
  },
)

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, (data) =>
    paramsSchema.safeParse(data),
  )
  if (!params.success)
    throw createAppError({ status: 400, statusText: 'Validation Error' })

  const [zoom, x, y] = params.data.tile

  const tile = await fetchTile(zoom!, x!, y!)

  setHeader(
    event,
    'Cache-Control',
    `public, max-age=${TILE_CACHE_MAX_AGE_SECONDS}`,
  )
  setHeader(event, 'Content-Type', 'image/png')

  return Buffer.from(tile, 'base64')
})
