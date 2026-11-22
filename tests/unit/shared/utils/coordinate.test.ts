import { describe, expect, test } from 'vitest'

import {
  reverseGeocodeQuerySchema,
  roundCoordinate,
} from '#src/shared/utils/coordinate'

describe('roundCoordinate', () => {
  test('rounds to 4 decimals', () => {
    expect(roundCoordinate(51.314464312)).toBe(51.3145)
    expect(roundCoordinate(-9.49578)).toBe(-9.4958)
  })
})

describe('reverseGeocodeQuerySchema', () => {
  test('coerces and rounds query strings', () => {
    expect(
      reverseGeocodeQuerySchema.parse({ lat: '51.31446', lon: '9.49578' }),
    ).toEqual({ lat: 51.3145, lon: 9.4958 })
  })

  test.each([
    { lat: '90.1', lon: '0' },
    { lat: '-90.1', lon: '0' },
    { lat: '0', lon: '180.1' },
    { lat: '0', lon: '-180.1' },
    { lat: 'abc', lon: '0' },
    { lon: '0' },
  ])('rejects %j', (query) => {
    expect(reverseGeocodeQuerySchema.safeParse(query).success).toBe(false)
  })
})
