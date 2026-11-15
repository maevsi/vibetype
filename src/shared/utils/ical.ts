import { CalendarDateTime, toZoned } from '@internationalized/date'
import ICAL from 'ical.js'

const getIsoString = ({
  time,
  timeZone,
  tzid,
}: {
  time: ICAL.Time
  timeZone: string
  tzid?: unknown
}) => {
  // utc and zones the file defines in a `VTIMEZONE`
  if (time.zone && time.zone.tzid !== 'floating')
    return time.toJSDate().toISOString()

  // floating and all-day values have no zone of their own, and a `TZID` without a `VTIMEZONE` may name a zone that `Intl` doesn't know, like Outlook's Windows zone names
  const dateTime = new CalendarDateTime(
    time.year,
    time.month,
    time.day,
    time.hour,
    time.minute,
    time.second,
  )

  try {
    return toZoned(
      dateTime,
      typeof tzid === 'string' ? tzid : timeZone,
    ).toAbsoluteString()
  } catch {
    return toZoned(dateTime, timeZone).toAbsoluteString()
  }
}

/**
 * Reads the first event of an iCalendar (RFC 5545) file into the fields the event form takes.
 *
 * @param ics - The file's content.
 * @param timeZone - The zone for times that carry none of their own.
 * @returns The event's fields, or `undefined` if the file is malformed or contains no event.
 */
export const parseIcsEvent = ({
  ics,
  timeZone,
}: {
  ics: string
  timeZone: string
}) => {
  let vevent: ICAL.Component | null

  try {
    vevent = new ICAL.Component(ICAL.parse(ics)).getFirstSubcomponent('vevent')
  } catch {
    return
  }

  if (!vevent) return

  const event = new ICAL.Event(vevent)
  const getText = (value: unknown) =>
    typeof value === 'string' ? value.trim() || undefined : undefined
  const locationName = getText(event.location)
  const startTzid = vevent.getFirstProperty('dtstart')?.getParameter('tzid')

  return {
    description: getText(event.description),
    // without either, ical.js derives an end from the start
    end:
      vevent.hasProperty('dtend') || vevent.hasProperty('duration')
        ? getIsoString({
            time: event.endDate,
            timeZone,
            tzid:
              vevent.getFirstProperty('dtend')?.getParameter('tzid') ??
              startTzid,
          })
        : undefined,
    isInPerson: !!locationName,
    locationName,
    name: getText(event.summary),
    start: vevent.hasProperty('dtstart')
      ? getIsoString({ time: event.startDate, timeZone, tzid: startTzid })
      : undefined,
    url: getText(vevent.getFirstPropertyValue('url')),
  }
}
