import { createCipheriv, randomBytes } from 'node:crypto'

import { describe, expect, test } from 'vitest'

import { getCsrfEncryptSecret } from '#src/server/utils/csrf'

describe('getCsrfEncryptSecret', () => {
  test('stays the same across deployments sharing the app secret', () => {
    expect(getCsrfEncryptSecret('a'.repeat(32))).toBe(
      getCsrfEncryptSecret('a'.repeat(32)),
    )
    expect(getCsrfEncryptSecret('a'.repeat(32))).not.toBe(
      getCsrfEncryptSecret('b'.repeat(32)),
    )
  })

  test('is a valid key for uncsrf, which uses its bytes for AES-256', () => {
    expect(() =>
      createCipheriv(
        'aes-256-cbc',
        Buffer.from(getCsrfEncryptSecret('a'.repeat(32))),
        randomBytes(16),
      ),
    ).not.toThrow()
  })
})
