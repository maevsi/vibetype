import { describe, expect, test } from 'vitest'

import { getIsLockdownModeLikely } from '#src/app/utils/lockdown'

const IPHONE_USER_AGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 26_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1'
const MAC_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15'

const createGlobal = ({
  features = [],
  maxTouchPoints = 5,
  userAgent = IPHONE_USER_AGENT,
}: {
  features?: string[]
  maxTouchPoints?: number
  userAgent?: string
}) => ({
  ...Object.fromEntries(features.map((feature) => [feature, {}])),
  navigator: {
    maxTouchPoints,
    platform: userAgent.includes('Macintosh') ? 'MacIntel' : 'iPhone',
    userAgent,
  },
})

describe('getIsLockdownModeLikely', () => {
  test('detects an iPhone lacking IndexedDB and WebGL', () => {
    expect(getIsLockdownModeLikely(createGlobal({}))).toBe(true)
  })

  test('detects an iPad reporting itself as a Mac', () => {
    expect(
      getIsLockdownModeLikely(createGlobal({ userAgent: MAC_USER_AGENT })),
    ).toBe(true)
  })

  test('ignores a Mac without touch support', () => {
    expect(
      getIsLockdownModeLikely(
        createGlobal({ maxTouchPoints: 0, userAgent: MAC_USER_AGENT }),
      ),
    ).toBe(false)
  })

  test.each([['indexedDB'], ['WebGLRenderingContext']])(
    'ignores an iPhone still having %s',
    (feature) => {
      expect(
        getIsLockdownModeLikely(createGlobal({ features: [feature] })),
      ).toBe(false)
    },
  )
})
