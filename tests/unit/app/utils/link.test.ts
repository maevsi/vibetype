import { describe, expect, test } from 'vitest'

import { getLinkNavigation } from '#src/app/utils/link'

const ORIGIN = 'https://vibetype.app'

describe('getLinkNavigation', () => {
  test('navigates same-origin links client-side', () => {
    expect(
      getLinkNavigation('https://vibetype.app/de/event?q=1#top', ORIGIN),
    ).toEqual({ path: '/de/event?q=1#top' })
    expect(getLinkNavigation('/de/event', ORIGIN)).toEqual({
      path: '/de/event',
    })
  })

  test('confirms links leaving the site', () => {
    expect(getLinkNavigation('https://example.com/a', ORIGIN)).toEqual({
      url: 'https://example.com/a',
    })
    expect(getLinkNavigation('https://app.vibetype.app/', ORIGIN)).toEqual({
      url: 'https://app.vibetype.app/',
    })
  })

  test('leaves other schemes native', () => {
    expect(getLinkNavigation('mailto:a@example.com', ORIGIN)).toBeUndefined()
    expect(getLinkNavigation('tel:+491234', ORIGIN)).toBeUndefined()
  })
})
