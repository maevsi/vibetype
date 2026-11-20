import { getStringTruncated } from './text'

// Google rejects overly long template links, so a long description is cut
const GOOGLE_CALENDAR_DETAILS_LENGTH_MAXIMUM = 1000

const getGoogleCalendarDate = (date: string) =>
  new Date(date).toISOString().replace(/-|:|\.\d{3}/g, '')

/** Builds a link that opens Google Calendar with the event prefilled, ready to be saved. */
export const getGoogleCalendarUrl = ({
  description,
  end,
  location,
  name,
  start,
  url,
}: {
  description?: string
  end?: string | null
  location?: string
  name: string
  start: string
  url: string
}) => {
  const googleCalendarUrl = new URL(
    'https://calendar.google.com/calendar/render',
  )
  const details = [
    url,
    description &&
      getStringTruncated({
        string: description,
        limit: GOOGLE_CALENDAR_DETAILS_LENGTH_MAXIMUM,
        isLastWordIncluded: true,
      }),
  ]
    .filter(Boolean)
    .join('\n\n')

  googleCalendarUrl.searchParams.set('action', 'TEMPLATE')
  googleCalendarUrl.searchParams.set(
    'dates',
    `${getGoogleCalendarDate(start)}/${getGoogleCalendarDate(end ?? start)}`,
  )
  googleCalendarUrl.searchParams.set('details', details)
  if (location) googleCalendarUrl.searchParams.set('location', location)
  googleCalendarUrl.searchParams.set('text', name)

  return googleCalendarUrl.href
}
