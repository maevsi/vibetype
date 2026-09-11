import { describe, expect, test } from 'vitest'

import {
  calculatePasswordStrength,
  getPasswordStrengthScore,
  PASSWORD_STRENGTH_SCORE_MINIMUM,
} from '#src/app/utils/passwordStrength'

// A common, dictionary-listed password: must always score below the minimum, regardless of
// dictionary/config changes, or accountRegistration/accountPasswordReset/accountPasswordChange
// would silently start accepting it.
const WEAK_PASSWORD = 'password123'
// A long, high-entropy password: must always clear the minimum, or the strength check would
// start rejecting passwords that are clearly safe.
const STRONG_PASSWORD = 'kR7#vQ9xL2mZ8pT4nF6wA1'

describe('getPasswordStrengthScore', () => {
  test('scores a common password below the minimum', async () => {
    expect(await getPasswordStrengthScore(WEAK_PASSWORD)).toBeLessThan(
      PASSWORD_STRENGTH_SCORE_MINIMUM,
    )
  })

  test('scores a long, high-entropy password at or above the minimum', async () => {
    expect(
      await getPasswordStrengthScore(STRONG_PASSWORD),
    ).toBeGreaterThanOrEqual(PASSWORD_STRENGTH_SCORE_MINIMUM)
  })

  test('scores an empty password as 0 without invoking zxcvbn', async () => {
    expect(await getPasswordStrengthScore('')).toBe(0)
  })
})

describe('calculatePasswordStrength', () => {
  test('maps a weak password below the meter midpoint', async () => {
    expect(await calculatePasswordStrength(WEAK_PASSWORD)).toBeLessThan(50)
  })

  test('maps a strong password to the top of the meter', async () => {
    expect(await calculatePasswordStrength(STRONG_PASSWORD)).toBe(100)
  })
})
