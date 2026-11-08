import { CalendarDateTime, toZoned } from '@internationalized/date'

const unescapeText = (value: string) =>
  value.replace(/\\([\\;,nN])/g, (_, character: string) =>
    character.toLowerCase() === 'n' ? '\n' : character,
  )

const parseDateTime = ({
  parameters,
  timeZone,
  value,
}: {
  parameters: Record<string, string>
  timeZone: string
  value: string
}) => {
  const match = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?$/.exec(
    value,
  )
  if (!match) return

  const [, year, month, day, hour = '0', minute = '0', second = '0', utc] =
    match
  const dateTime = new CalendarDateTime(
    Number(year),
    Number(month),
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  )

  if (utc) return toZoned(dateTime, 'UTC').toAbsoluteString()

  // floating and all-day values have no zone of their own, and a `TZID` may name a zone that `Intl` doesn't know, like Outlook's Windows zone names
  try {
    return toZoned(dateTime, parameters.TZID ?? timeZone).toAbsoluteString()
  } catch {
    return toZoned(dateTime, timeZone).toAbsoluteString()
  }
}

/**
 * Reads the first event of an iCalendar (RFC 5545) file into the fields the event form takes.
 *
 * @param ics - The file's content.
 * @param timeZone - The zone for times that carry none of their own.
 * @returns The event's fields, or `undefined` if the file contains no event.
 */
export const parseIcsEvent = ({
  ics,
  timeZone,
}: {
  ics: string
  timeZone: string
}) => {
  // long lines are folded by a line break followed by a space or tab
  const lines = ics.replace(/\r?\n[ \t]/g, '').split(/\r?\n/)
  const eventStart = lines.indexOf('BEGIN:VEVENT')
  if (eventStart === -1) return

  const properties: Record<
    string,
    { parameters: Record<string, string>; value: string }
  > = {}

  // components nested in the event, like an alarm, carry their own properties, e.g. its own `DESCRIPTION`
  let depth = 0

  for (const line of lines.slice(eventStart + 1)) {
    if (/^BEGIN:/i.test(line)) {
      depth += 1
      continue
    }
    if (/^END:/i.test(line)) {
      if (depth === 0) break
      depth -= 1
      continue
    }
    if (depth > 0) continue

    // a parameter's unquoted part excludes `;`, so each `;` can only start the next parameter, which keeps lines like `-;;;…` from backtracking exponentially
    const match = /^([A-Z-]+)((?:;[^:;"]*(?:"[^"]*"[^:;"]*)*)*):(.*)$/i.exec(
      line,
    )
    if (!match?.[1] || match[3] === undefined) continue

    properties[match[1].toUpperCase()] = {
      parameters: Object.fromEntries(
        (match[2] ?? '')
          .split(';')
          .filter(Boolean)
          .map((parameter) => {
            const [key = '', parameterValue = ''] = parameter.split('=')
            return [key.toUpperCase(), parameterValue.replace(/^"|"$/g, '')]
          }),
      ),
      value: match[3],
    }
  }

  const getText = (name: string) => {
    const property = properties[name]
    return property ? unescapeText(property.value).trim() : undefined
  }
  const getDateTime = (name: string) => {
    const property = properties[name]
    return property ? parseDateTime({ ...property, timeZone }) : undefined
  }

  const locationName = getText('LOCATION')

  return {
    description: getText('DESCRIPTION'),
    end: getDateTime('DTEND'),
    isInPerson: !!locationName,
    locationName,
    name: getText('SUMMARY'),
    start: getDateTime('DTSTART'),
    url: properties.URL?.value.trim(),
  }
}
