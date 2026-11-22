import { describe, expect, test } from 'vitest'

import {
  getAddressFromNominatim,
  getAddressLines,
  getAddressText,
} from '#src/shared/utils/address'

describe('getAddressFromNominatim', () => {
  test('maps a german result with the road first', () => {
    expect(
      getAddressFromNominatim({
        address: {
          country: 'Deutschland',
          country_code: 'de',
          house_number: '5',
          postcode: '34117',
          road: 'Friedrichsplatz',
          state: 'Hessen',
          town: 'Kassel',
        },
        name: 'Fridericianum',
      }),
    ).toEqual({
      address: {
        city: 'Kassel',
        country: 'Deutschland',
        line1: 'Friedrichsplatz 5',
        postalCode: '34117',
        region: 'Hessen',
      },
      name: 'Fridericianum',
    })
  })

  test('puts the house number first where it is customary', () => {
    expect(
      getAddressFromNominatim({
        address: { country_code: 'us', house_number: '1', road: 'Main Street' },
      }).address.line1,
    ).toBe('1 Main Street')
  })

  test('limits the lengths and ignores blank values', () => {
    const { address } = getAddressFromNominatim({
      address: { city: '  ', postcode: '1'.repeat(30), road: 'r'.repeat(400) },
    })
    expect(address.city).toBeUndefined()
    expect(address.postalCode).toHaveLength(20)
    expect(address.line1).toHaveLength(300)
  })

  test('copes with a missing address', () => {
    expect(getAddressFromNominatim(undefined).address.line1).toBeUndefined()
  })
})

describe('getAddressLines', () => {
  const address = {
    city: 'Kassel',
    country: 'Deutschland',
    line1: 'Friedrichsplatz 5',
    postalCode: '34117',
    region: 'Hessen',
  }

  test('lists the lines of an address', () => {
    expect(getAddressLines(address)).toEqual([
      'Friedrichsplatz 5',
      '34117 Kassel',
      'Deutschland',
    ])
    expect(getAddressText(address)).toBe(
      'Friedrichsplatz 5, 34117 Kassel, Deutschland',
    )
  })

  test('falls back to the region without a city', () => {
    expect(getAddressLines({ postalCode: '1', region: 'Hessen' })).toEqual([
      '1 Hessen',
    ])
  })

  test('is empty without an address', () => {
    expect(getAddressLines(null)).toEqual([])
  })
})
