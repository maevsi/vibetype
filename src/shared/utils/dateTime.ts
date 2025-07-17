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
 * Returns a date-time formatter function for use in emails which don't support targeted locales yet.
 *
 * The formatter uses the specified locale and a fixed UTC time zone.
 *
 * @param {string} locale - A BCP 47 language tag (e.g., "en-US", "fr-FR") used to format the date/time.
 * @returns {Intl.DateTimeFormat} A formatter instance that formats dates in the specified locale and UTC time zone.
 *
 * @example
 * const format = getEmailDateTimeFormatter('en-US')
 * format.format(new Date('2025-07-15T18:00:00Z'))
 * // → "Jul 15, 2025, 6:00 PM UTC"
 */
export const getEmailDateTimeFormatter = (
  locale: string,
): Intl.DateTimeFormat =>
  Intl.DateTimeFormat(locale, {
    ...dateTimeFormatOptions,
    timeZone: 'UTC',
  })
