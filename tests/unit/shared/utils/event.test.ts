import { describe, expect, test } from 'vitest'

import { getEventState } from '#src/shared/utils/event'

describe('getEventState', () => {
  const start = '2026-01-01T18:00:00Z'

  test('is upcoming before the start', () => {
    expect(getEventState({ start }, new Date('2026-01-01T17:59:00Z'))).toBe(
      'upcoming',
    )
  })

  test('is ongoing between start and end', () => {
    expect(
      getEventState(
        { end: '2026-01-01T20:00:00Z', start },
        new Date('2026-01-01T19:00:00Z'),
      ),
    ).toBe('ongoing')
  })

  test('is ended at the end', () => {
    expect(
      getEventState(
        { end: '2026-01-01T20:00:00Z', start },
        new Date('2026-01-01T20:00:00Z'),
      ),
    ).toBe('ended')
  })

  test('without an end, is ongoing within the grace period and ended after it', () => {
    expect(getEventState({ start }, new Date('2026-01-02T05:00:00Z'))).toBe(
      'ongoing',
    )
    expect(getEventState({ start }, new Date('2026-01-02T06:00:00Z'))).toBe(
      'ended',
    )
  })
})
