import { describe, expect, test } from 'vitest'

import { getRedirectPath } from '#src/app/utils/redirect'

const FALLBACK = '/contact'

describe('getRedirectPath', () => {
  test('keeps paths on this site', () => {
    expect(getRedirectPath('/de/event?q=1#top', FALLBACK)).toBe(
      '/de/event?q=1#top',
    )
    expect(getRedirectPath('/', FALLBACK)).toBe('/')
  })

  test('falls back for anything else', () => {
    for (const redirect of [
      '//example.com',
      '/\\example.com',
      'https://example.com',
      'event',
      '',
      ['/event'],
      undefined,
      null,
      1,
    ])
      expect(getRedirectPath(redirect, FALLBACK)).toBe(FALLBACK)
  })
})
