import { expect, test } from 'vitest'

import { getMapsUrl } from '#src/shared/utils/maps'

test('prefers the coordinates', () => {
  expect(
    getMapsUrl({
      location: { latitude: 51.3, longitude: 9.5 },
      text: 'Kassel',
    }),
  ).toBe('https://www.google.com/maps/search/?api=1&query=51.3,9.5')
})

test('falls back to the encoded text', () => {
  expect(getMapsUrl({ location: null, text: 'Café, Kassel' })).toBe(
    'https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%2C%20Kassel',
  )
})
