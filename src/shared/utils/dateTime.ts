/**
 * Calculates the duration between two dates in terms of years, months, weeks, days, hours, and minutes.
 *
 * This utility is useful for displaying human-readable differences between two timestamps.
 * The returned object represents the absolute difference, regardless of the order of `from` and `to`.
 *
 * @param {Date} from - The starting date of the interval.
 * @param {Date} to - The ending date of the interval.
 * @returns {{ years: number, months: number, weeks: number, days: number, hours: number, minutes: number }}
 * An object representing the time difference between the two dates:
 * - `years`: Number of full years
 * - `months`: Remaining full months after accounting for years
 * - `weeks`: Remaining full weeks after accounting for months
 * - `days`: Remaining days after accounting for weeks
 * - `hours`: Remaining hours
 * - `minutes`: Remaining minutes
 *
 * @example
 * getDuration(new Date('2020-01-01'), new Date('2023-04-10'))
 * // returns: { years: 3, months: 3, weeks: 1, days: 2, hours: 0, minutes: 0 }
 */
export const getDuration = (
  from: Date,
  to: Date,
): {
  days: number
  hours: number
  minutes: number
  months: number
  weeks: number
  years: number
} => {
  const start = from > to ? to : from
  const end = from > to ? from : to

  let years = end.getUTCFullYear() - start.getUTCFullYear()
  let months = end.getUTCMonth() - start.getUTCMonth()
  let days = end.getUTCDate() - start.getUTCDate()
  let hours = end.getUTCHours() - start.getUTCHours()
  let minutes = end.getUTCMinutes() - start.getUTCMinutes()

  if (minutes < 0) {
    minutes += 60
    hours--
  }

  if (hours < 0) {
    hours += 24
    days--
  }

  if (days < 0) {
    const prevMonth = new Date(
      Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), 0),
    )
    days += prevMonth.getUTCDate()
    months--
  }

  if (months < 0) {
    months += 12
    years--
  }

  const weeks = Math.floor(days / 7)
  days = days % 7

  return {
    days,
    hours,
    minutes,
    months,
    weeks,
    years,
  }
}

/**
 * Default date-time formatting options used for displaying timestamps in a concise and readable format.
 *
 * Format includes:
 * - Day (numeric, e.g., "15")
 * - Month (short name, e.g., "Jul")
 * - Year (numeric, e.g., "2025")
 * - Hour and minute (numeric, 12/24-hour based on locale, e.g., "6:00 PM")
 * - Time zone name (short, e.g., "UTC", "PST")
 *
 * These options are intended to be used with `Intl.DateTimeFormat`.
 */
export const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  month: 'short',
  timeZoneName: 'short',
  year: 'numeric',
}

/**
 * Returns a date-time formatter function for use in emails.
 *
 * The formatter uses the specified locale and time zone, falling back to UTC when no time zone
 * is given, e.g. because the receiving contact hasn't set one, or when the given time zone isn't
 * a valid IANA time zone name.
 *
 * @param {string} locale - A BCP 47 language tag (e.g., "en-US", "fr-FR") used to format the date/time.
 * @param {string} [timeZone] - An IANA time zone name (e.g., "Europe/Berlin"); defaults to "UTC".
 * @returns {Intl.DateTimeFormat} A formatter instance that formats dates in the specified locale and time zone.
 *
 * @example
 * const format = getEmailDateTimeFormatter('en-US', 'America/New_York')
 * format.format(new Date('2025-07-15T18:00:00Z'))
 * // → "Jul 15, 2025, 2:00 PM EDT"
 */
export const getEmailDateTimeFormatter = (
  locale: string,
  timeZone = 'UTC',
): Intl.DateTimeFormat => {
  try {
    return Intl.DateTimeFormat(locale, {
      ...dateTimeFormatOptions,
      timeZone,
    })
  } catch (error) {
    if (error instanceof RangeError) {
      console.warn(`Invalid time zone "${timeZone}", falling back to UTC.`)
      return Intl.DateTimeFormat(locale, {
        ...dateTimeFormatOptions,
        timeZone: 'UTC',
      })
    }

    throw error
  }
}

// the calendar day in the given time zone as midnight UTC, so that days can be
// compared and counted without daylight saving time shifting them
const getDay = (date: Date, timeZone?: string) => {
  const parts = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'numeric',
    timeZone,
    year: 'numeric',
  }).formatToParts(date)
  const getPart = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value)

  return Date.UTC(getPart('year'), getPart('month') - 1, getPart('day'))
}

/**
 * Splits items into runs of consecutive items that fall on the same calendar day in the given time zone.
 *
 * The items keep their order, so a day that recurs later in the list starts a new group instead of joining the earlier one.
 *
 * @param {(item: T) => string} getDate - Returns an item's date as an ISO string.
 * @param {readonly T[]} items - The items to group, in display order.
 * @param {Date} now - The moment that "today" and "tomorrow" refer to.
 * @param {string} [timeZone] - An IANA time zone name; defaults to the runtime's time zone.
 * @returns The groups, each with its calendar day as midnight UTC, so that it is to be formatted in UTC.
 *
 * @example
 * groupByDay({ getDate: (event) => event.start, items: events, now, timeZone: 'Europe/Berlin' })
 * // → [{ day: Date, items: [...], relativeDay: 'today' }, { day: Date, items: [...] }]
 */
export const groupByDay = <T>({
  getDate,
  items,
  now,
  timeZone,
}: {
  getDate: (item: T) => string
  items: readonly T[]
  now: Date
  timeZone?: string
}) => {
  const today = getDay(now, timeZone)
  const tomorrow = today + 24 * 60 * 60 * 1000
  const groups: {
    day: Date
    items: T[]
    relativeDay?: 'today' | 'tomorrow'
  }[] = []

  for (const item of items) {
    const day = getDay(new Date(getDate(item)), timeZone)
    const groupLast = groups.at(-1)

    if (groupLast?.day.getTime() === day) {
      groupLast.items.push(item)
      continue
    }

    groups.push({
      day: new Date(day),
      items: [item],
      relativeDay:
        day === today ? 'today' : day === tomorrow ? 'tomorrow' : undefined,
    })
  }

  return groups
}
