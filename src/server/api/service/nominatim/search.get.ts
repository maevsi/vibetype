import { z } from 'zod'

const querySchema = z.object({
  'accept-language': z.enum(['de', 'en']).optional(),
  q: z.string().trim().min(2).max(200),
})

const search = defineCachedFunction(
  async (q: string, language: string | undefined) =>
    await fetchNominatim('search', {
      'accept-language': language,
      limit: 10,
      q,
    }),
  {
    getKey: (q, language) => `${language || ''}:${q}`,
    maxAge: NOMINATIM_CACHE_MAX_AGE_SECONDS,
    name: 'nominatim-search',
  },
)

export default defineEventHandler(async (event) => {
  await assertNominatimAccess()

  const query = await getQuerySafe({ event, schema: querySchema })

  return await search(
    query.q.toLowerCase().replaceAll(/\s+/g, ' '),
    query['accept-language'],
  )
})
