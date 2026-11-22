import { describe, expect, test } from 'vitest'

import { eventHasEnded } from '#src/shared/utils/event'

describe('eventHasEnded', () => {
  const now = new Date('2026-11-22T12:00:00Z')

  test('uses the end when set', () => {
    expect(
      eventHasEnded(
        { end: '2026-11-22T13:00:00Z', start: '2026-11-22T10:00:00Z' },
        now,
      ),
    ).toBe(false)
  })

  test('ends an event without an end at its start', () => {
    expect(eventHasEnded({ start: '2026-11-22T11:59:00Z' }, now)).toBe(true)
    expect(eventHasEnded({ start: '2026-11-22T12:01:00Z' }, now)).toBe(false)
  })
})
