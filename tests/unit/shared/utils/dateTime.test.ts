import { describe, expect, test } from 'vitest'

import {
  getDuration,
  getEmailDateTimeFormatter,
} from '#src/shared/utils/dateTime'

describe('getDuration', () => {
  test('returns zero duration for same date', () => {
    const now = new Date('2023-01-01T00:00:00Z')
    const result = getDuration(now, now)
    expect(result).toEqual({
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
    })
  })

  test('handles simple duration under a month', () => {
    const from = new Date('2023-01-01T00:00:00Z')
    const to = new Date('2023-01-15T12:30:00Z')
    const result = getDuration(from, to)
    expect(result).toEqual({
      years: 0,
      months: 0,
      weeks: 2,
      days: 0,
      hours: 12,
      minutes: 30,
    })
  })

  test('handles full years and months', () => {
    const from = new Date('2020-01-01T00:00:00Z')
    const to = new Date('2023-04-01T00:00:00Z')
    const result = getDuration(from, to)
    expect(result).toEqual({
      years: 3,
      months: 3,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
    })
  })

  test('handles crossing year boundary with negative month diff', () => {
    const from = new Date('2022-12-01T00:00:00Z')
    const to = new Date('2023-02-01T00:00:00Z')
    const result = getDuration(from, to)
    expect(result).toEqual({
      years: 0,
      months: 2,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
    })
  })

  test('handles time difference with hours and minutes', () => {
    const from = new Date('2023-01-01T10:00:00Z')
    const to = new Date('2023-01-01T15:45:00Z')
    const result = getDuration(from, to)
    expect(result).toEqual({
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 5,
      minutes: 45,
    })
  })

  test('handles reverse dates (from > to)', () => {
    const to = new Date('2023-01-01T10:00:00Z')
    const from = new Date('2022-12-01T10:00:00Z')
    const result = getDuration(from, to)
    const reversedResult = getDuration(to, from)
    expect(result).toEqual(reversedResult)
  })

  test('handles duration with partial weeks and days', () => {
    const from = new Date('2023-01-01T00:00:00Z')
    const to = new Date('2023-01-12T00:00:00Z')
    const result = getDuration(from, to)
    expect(result).toEqual({
      years: 0,
      months: 0,
      weeks: 1,
      days: 4,
      hours: 0,
      minutes: 0,
    })
  })

  test('handles leap year difference correctly', () => {
    const from = new Date('2020-02-29T00:00:00Z')
    const to = new Date('2021-02-28T00:00:00Z')
    const result = getDuration(from, to)
    expect(result).toEqual({
      years: 0,
      months: 11,
      weeks: 4,
      days: 2,
      hours: 0,
      minutes: 0,
    })
  })
})

describe('getEmailDateTimeFormatter', () => {
  const testDate = new Date(Date.UTC(2023, 6, 10, 14, 30))

  test('should return a formatter instance of Intl.DateTimeFormat', () => {
    const formatter = getEmailDateTimeFormatter('en-US')
    expect(formatter).toBeInstanceOf(Intl.DateTimeFormat)
  })

  test('should format date correctly in en-US locale', () => {
    const formatter = getEmailDateTimeFormatter('en-US')
    const formatted = formatter.format(testDate)
    expect(formatted).toMatch(/Jul \d{1,2}, 2023,? \d{1,2}:\d{2} [AP]M UTC/)
  })

  test('should format date correctly in de-DE locale', () => {
    const formatter = getEmailDateTimeFormatter('de-DE')
    const formatted = formatter.format(testDate)
    expect(formatted).toMatch(/10. Juli 2023, \d{2}:\d{2} UTC/)
  })

  test('should use UTC time zone regardless of locale', () => {
    const enFormatter = getEmailDateTimeFormatter('en-US')
    const frFormatter = getEmailDateTimeFormatter('de-DE')

    const enFormatted = enFormatter.format(testDate)
    const frFormatted = frFormatter.format(testDate)

    expect(enFormatted).toContain('UTC')
    expect(frFormatted).toContain('UTC')
  })
})
