import { describe, expect, test } from 'vitest'

import {
  getDistanceKilometers,
  getDistanceKilometersNearest,
} from '#src/shared/utils/distance'

const BERLIN = { latitude: 52.52, longitude: 13.405 }
const HAMBURG = { latitude: 53.5511, longitude: 9.9937 }
const MUNICH = { latitude: 48.1351, longitude: 11.582 }

describe('getDistanceKilometers', () => {
  test('is zero for identical points', () => {
    expect(getDistanceKilometers(BERLIN, BERLIN)).toBe(0)
  })

  test('matches the known great circle distance between Berlin and Hamburg', () => {
    expect(getDistanceKilometers(BERLIN, HAMBURG)).toBeCloseTo(255, -1)
  })

  test('is symmetric', () => {
    expect(getDistanceKilometers(BERLIN, MUNICH)).toBeCloseTo(
      getDistanceKilometers(MUNICH, BERLIN),
      6,
    )
  })
})

describe('getDistanceKilometersNearest', () => {
  test('picks the closest origin', () => {
    expect(getDistanceKilometersNearest([MUNICH, HAMBURG], BERLIN)).toBeCloseTo(
      getDistanceKilometers(HAMBURG, BERLIN),
      6,
    )
  })

  test('is undefined without origins', () => {
    expect(getDistanceKilometersNearest([], BERLIN)).toBeUndefined()
  })
})
