import { expect, test } from 'vitest'

import { getMapsUrl } from '#src/shared/utils/maps'

test('prefers the geo link built from the coordinates', () => {
  expect(
    getMapsUrl({
      location: { latitude: 51.3, longitude: 9.5 },
      text: 'Kassel',
    }),
  ).toBe('geo:51.3,9.5?z=16')
})

test('falls back to the encoded OpenStreetMap search', () => {
  expect(getMapsUrl({ location: null, text: 'Café, Kassel' })).toBe(
    'https://www.openstreetmap.org/search?query=Caf%C3%A9%2C%20Kassel',
  )
})

test('returns nothing without coordinates or text', () => {
  expect(getMapsUrl({ location: null, text: null })).toBeUndefined()
})
