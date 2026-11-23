import { expect, test } from 'vitest'

import { getMapsUrl } from '#src/shared/utils/maps'

test('builds the geo link from the coordinates', () => {
  expect(getMapsUrl({ location: { latitude: 51.3, longitude: 9.5 } })).toBe(
    'geo:51.3,9.5?z=16',
  )
})

test('returns nothing without coordinates', () => {
  expect(getMapsUrl({ location: null })).toBeUndefined()
})
