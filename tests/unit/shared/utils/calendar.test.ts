import { describe, expect, test } from 'vitest'

import { getGoogleCalendarUrl } from '#src/shared/utils/calendar'

describe('getGoogleCalendarUrl', () => {
  test('prefills the event', () => {
    const { searchParams } = new URL(
      getGoogleCalendarUrl({
        description: 'Bring snacks.',
        end: '2026-11-20T22:00:00.000+01:00',
        location: 'Fridericianum, Friedrichsplatz 5, 34117 Kassel',
        name: 'Party',
        start: '2026-11-20T19:30:00+01:00',
        url: 'https://vibetype.app/guest/view/1',
      }),
    )

    expect(Object.fromEntries(searchParams)).toEqual({
      action: 'TEMPLATE',
      dates: '20261120T183000Z/20261120T210000Z',
      details: 'https://vibetype.app/guest/view/1\n\nBring snacks.',
      location: 'Fridericianum, Friedrichsplatz 5, 34117 Kassel',
      text: 'Party',
    })
  })

  test('ends at the start without an end and leaves out what is missing', () => {
    const { searchParams } = new URL(
      getGoogleCalendarUrl({
        name: 'Party',
        start: '2026-11-20T18:30:00Z',
        url: 'https://vibetype.app',
      }),
    )

    expect(searchParams.get('dates')).toBe('20261120T183000Z/20261120T183000Z')
    expect(searchParams.get('details')).toBe('https://vibetype.app')
    expect(searchParams.has('location')).toBe(false)
  })

  test('cuts a long description', () => {
    const details = new URL(
      getGoogleCalendarUrl({
        description: 'word '.repeat(1000),
        name: 'Party',
        start: '2026-11-20T18:30:00Z',
        url: 'https://vibetype.app',
      }),
    ).searchParams.get('details')

    expect(details?.length).toBeLessThan(1100)
  })
})
