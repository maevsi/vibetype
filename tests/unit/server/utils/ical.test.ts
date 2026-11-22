import { afterEach, beforeEach, expect, test, vi } from 'vitest'

import { AppLocale } from '#src/server/utils/i18n'
import { getIcalString } from '#src/server/utils/ical'
import { EventVisibility } from '~/gql/generated/graphcache'

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date(0))
})

afterEach(() => {
  vi.useRealTimers()
})

test('gets ical string', () => {
  expect(
    getIcalString({
      event: {
        accountByCreatedBy: {
          username: 'authorUsername',
        },
        description: '<p>description</p>',
        end: new Date().toISOString(),
        // guestCountMaximum: 0,
        // isArchived: false,
        isInPerson: false,
        // isRemote: false,
        name: 'name',
        rowId: '1',
        slug: 'slug',
        start: new Date().toISOString(),
        visibility: EventVisibility.Private,
      },
      siteUrl: 'https://app.test',
    }),
  ).toBe(
    `BEGIN:VCALENDAR\r
VERSION:2.0\r
PRODID:-//sebbo.net//ical-generator//EN\r
METHOD:PUBLISH\r
BEGIN:VEVENT\r
UID:1\r
SEQUENCE:0\r
DTSTAMP:19700101T000000Z\r
DTSTART:19700101T000000Z\r
DTEND:19700101T000000Z\r
SUMMARY:name\r
DESCRIPTION:https://app.test/event/view/authorUsername/slug\\n\\ndescription\r
X-ALT-DESC;FMTTYPE=text/html:https://app.test/event/view/authorUsername/sl\r
 ug\\n<p>description</p>\r
ORGANIZER;CN="authorUsername":mailto:authorUsername@app.test\r
URL;VALUE=URI:https://app.test/event/view/authorUsername/slug\r
STATUS:CONFIRMED\r
CLASS:PRIVATE\r
END:VEVENT\r
END:VCALENDAR`,
  )
})

test('gets ical string with the language prefix', () => {
  expect(
    getIcalString({
      event: {
        accountByCreatedBy: {
          username: 'authorUsername',
        },
        description: '<p>description</p>',
        end: new Date().toISOString(),
        // guestCountMaximum: 0,
        // isArchived: false,
        isInPerson: false,
        // isRemote: false,
        name: 'name',
        rowId: '1',
        slug: 'slug',
        start: new Date().toISOString(),
        visibility: EventVisibility.Private,
      },
      language: AppLocale.DE,
      siteUrl: 'https://app.test',
    }),
  ).toBe(
    `BEGIN:VCALENDAR\r
VERSION:2.0\r
PRODID:-//sebbo.net//ical-generator//EN\r
METHOD:PUBLISH\r
BEGIN:VEVENT\r
UID:1\r
SEQUENCE:0\r
DTSTAMP:19700101T000000Z\r
DTSTART:19700101T000000Z\r
DTEND:19700101T000000Z\r
SUMMARY:name\r
DESCRIPTION:https://app.test/de/event/view/authorUsername/slug\\n\\ndescript\r
 ion\r
X-ALT-DESC;FMTTYPE=text/html:https://app.test/de/event/view/authorUsername\r
 /slug\\n<p>description</p>\r
ORGANIZER;CN="authorUsername":mailto:authorUsername@app.test\r
URL;VALUE=URI:https://app.test/de/event/view/authorUsername/slug\r
STATUS:CONFIRMED\r
CLASS:PRIVATE\r
END:VEVENT\r
END:VCALENDAR`,
  )
})

test('adds the location of in-person events', () => {
  const ical = getIcalString({
    event: {
      accountByCreatedBy: { username: 'authorUsername' },
      addressByAddressId: {
        city: 'Kassel',
        line1: 'Friedrichsplatz 5',
        location: { latitude: 51.3, longitude: 9.5 },
        name: 'Fridericianum',
        postalCode: '34117',
      },
      description: null,
      end: null,
      isInPerson: true,
      name: 'name',
      rowId: '1',
      slug: 'slug',
      start: new Date().toISOString(),
      visibility: EventVisibility.Private,
    },
    siteUrl: 'https://app.test',
  })

  expect(ical).toContain(
    'LOCATION:Fridericianum\\nFriedrichsplatz 5\\, 34117 Kassel',
  )
  expect(ical).toContain('GEO:51.3;9.5')
})
