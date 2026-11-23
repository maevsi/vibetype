import { describe, expect, test } from 'vitest'

import {
  getEventPublicationState,
  getEventState,
} from '#src/shared/utils/event'

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

describe('getEventPublicationState', () => {
  const now = new Date('2026-01-01T12:00:00Z')

  test('is a draft without a publication time', () => {
    expect(getEventPublicationState({ publishedAt: null }, now)).toBe('draft')
    expect(getEventPublicationState({}, now)).toBe('draft')
  })

  test('is scheduled for a future publication time', () => {
    expect(
      getEventPublicationState({ publishedAt: '2026-01-01T12:00:01Z' }, now),
    ).toBe('scheduled')
  })

  test('is published at or after the publication time', () => {
    expect(
      getEventPublicationState({ publishedAt: '2026-01-01T12:00:00Z' }, now),
    ).toBe('published')
    expect(
      getEventPublicationState({ publishedAt: '2020-01-01T00:00:00Z' }, now),
    ).toBe('published')
  })
})
