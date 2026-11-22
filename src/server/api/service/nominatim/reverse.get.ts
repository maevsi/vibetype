import { z } from 'zod'

const querySchema = reverseGeocodeQuerySchema.extend({
  'accept-language': z.enum(['de', 'en']).optional(),
})

const reverse = defineCachedFunction(
  async (lat: number, lon: number, language: string | undefined) =>
    await fetchNominatim('reverse', {
      'accept-language': language,
      lat,
      lon,
      zoom: 18,
    }),
  {
    getKey: (lat, lon, language) => `${language || ''}:${lat},${lon}`,
    maxAge: NOMINATIM_CACHE_MAX_AGE_SECONDS,
    name: 'nominatim-reverse',
  },
)

export default defineEventHandler(async (event) => {
  await assertNominatimAccess()

  const query = await getQuerySafe({ event, schema: querySchema })

  return await reverse(query.lat, query.lon, query['accept-language'])
})
