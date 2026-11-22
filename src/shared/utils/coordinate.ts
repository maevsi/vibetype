import { z } from 'zod'

// 4 decimals are about 11 m, enough for an address and coarse enough to share cache entries
const COORDINATE_DECIMALS = 4

export const roundCoordinate = (value: number) =>
  Number(value.toFixed(COORDINATE_DECIMALS))

export const reverseGeocodeQuerySchema = z.object({
  lat: z.coerce.number().min(-90).max(90).transform(roundCoordinate),
  lon: z.coerce.number().min(-180).max(180).transform(roundCoordinate),
})
