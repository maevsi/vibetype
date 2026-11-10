import { describe, expect, test } from 'vitest'

import { parseIcsEvent } from '#src/shared/utils/ical'

const getIcs = (...eventLines: string[]) =>
  [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//test//test//EN',
    'BEGIN:VEVENT',
    'UID:1',
    ...eventLines,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

describe('parseIcsEvent', () => {
  test('reads the event fields', () => {
    expect(
      parseIcsEvent({
        ics: getIcs(
          'SUMMARY:Community Meetup',
          'DTSTART:20300615T180000Z',
          'DTEND:20300615T210000Z',
          'LOCATION:Town Hall\\, Kassel',
          'DESCRIPTION:Bring snacks\\nand friends',
          'URL:https://example.com/meetup',
        ),
        timeZone: 'Europe/Berlin',
      }),
    ).toEqual({
      description: 'Bring snacks\nand friends',
      end: '2030-06-15T21:00:00.000Z',
      isInPerson: true,
      locationName: 'Town Hall, Kassel',
      name: 'Community Meetup',
      start: '2030-06-15T18:00:00.000Z',
      url: 'https://example.com/meetup',
    })
  })

  test('unfolds long lines', () => {
    expect(
      parseIcsEvent({
        ics: getIcs('SUMMARY:Community', '  Meetup'),
        timeZone: 'UTC',
      })?.name,
    ).toBe('Community Meetup')
  })

  test('reads times in their own zone', () => {
    expect(
      parseIcsEvent({
        ics: getIcs('DTSTART;TZID=America/New_York:20300615T180000'),
        timeZone: 'Europe/Berlin',
      })?.start,
    ).toBe('2030-06-15T22:00:00.000Z')
  })

  test('reads floating times, all-day dates and unknown zones in the given zone', () => {
    const event = parseIcsEvent({
      ics: getIcs(
        'DTSTART;VALUE=DATE:20300615',
        'DTEND;TZID="W. Europe Standard Time":20300616T120000',
      ),
      timeZone: 'Europe/Berlin',
    })

    expect(event?.start).toBe('2030-06-14T22:00:00.000Z')
    expect(event?.end).toBe('2030-06-16T10:00:00.000Z')
  })

  test('ignores properties of nested components', () => {
    expect(
      parseIcsEvent({
        ics: getIcs(
          'BEGIN:VALARM',
          'DESCRIPTION:Alarm',
          'END:VALARM',
          'DESCRIPTION:Event',
        ),
        timeZone: 'UTC',
      })?.description,
    ).toBe('Event')
    expect(
      parseIcsEvent({
        ics: getIcs('BEGIN:VALARM', 'DESCRIPTION:Alarm', 'END:VALARM'),
        timeZone: 'UTC',
      })?.description,
    ).toBeUndefined()
  })

  test('returns nothing without an event', () => {
    expect(
      parseIcsEvent({
        ics: 'BEGIN:VCALENDAR\r\nEND:VCALENDAR',
        timeZone: 'UTC',
      }),
    ).toBeUndefined()
  })

  test('reads quoted parameters', () => {
    expect(
      parseIcsEvent({
        ics: getIcs('DTSTART;TZID="America/New_York";X-A=";":20300615T180000'),
        timeZone: 'UTC',
      })?.start,
    ).toBe('2030-06-15T22:00:00.000Z')
  })

  test('reads times in a zone the file defines', () => {
    expect(
      parseIcsEvent({
        ics: [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'PRODID:-//test//test//EN',
          'BEGIN:VTIMEZONE',
          'TZID:W. Europe Standard Time',
          'BEGIN:STANDARD',
          'DTSTART:16010101T030000',
          'TZOFFSETFROM:+0200',
          'TZOFFSETTO:+0100',
          'RRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=10',
          'END:STANDARD',
          'BEGIN:DAYLIGHT',
          'DTSTART:16010101T020000',
          'TZOFFSETFROM:+0100',
          'TZOFFSETTO:+0200',
          'RRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=3',
          'END:DAYLIGHT',
          'END:VTIMEZONE',
          'BEGIN:VEVENT',
          'UID:1',
          'DTSTART;TZID=W. Europe Standard Time:20300615T180000',
          'END:VEVENT',
          'END:VCALENDAR',
        ].join('\r\n'),
        timeZone: 'UTC',
      })?.start,
    ).toBe('2030-06-15T16:00:00.000Z')
  })

  test('returns nothing for malformed files', () => {
    expect(
      parseIcsEvent({ ics: 'not a calendar', timeZone: 'UTC' }),
    ).toBeUndefined()
  })
})
