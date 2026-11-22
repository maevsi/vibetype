import { describe, expect, test } from 'vitest'

import { eventHasEnded, getEventState } from '#src/shared/utils/event'

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

  test('without an end, is ended from its start on', () => {
    expect(getEventState({ start }, new Date(start))).toBe('ended')
  })
})
