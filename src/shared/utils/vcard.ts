import { getContactNamesFromFullName } from './contactImport'
import type { ContactPicked, ContactPickedLanguage } from './contactImport'
import { isNeitherNullNorUndefined } from './types'

const getDecodedQuotedPrintable = (value: string, charset?: string) => {
  const bytes = Uint8Array.from(
    value
      .replace(/=\r?\n/g, '')
      .replace(/=([0-9A-Fa-f]{2})|(.)/gs, (_, hex, other) =>
        hex ? String.fromCharCode(Number.parseInt(hex, 16)) : other,
      ),
    (character) => character.charCodeAt(0) & 0xff,
  )

  try {
    return new TextDecoder(charset || 'utf-8').decode(bytes)
  } catch {
    return new TextDecoder().decode(bytes)
  }
}

const getUnescaped = (value: string) =>
  value.replaceAll(/\\([,;nN\\])/g, (_, character: string) =>
    character === 'n' || character === 'N' ? '\n' : character,
  )

/** Splits at semicolons that are not escaped with a backslash. */
const getComponents = (value: string) =>
  value
    .replaceAll(/\\[\s\S]|;/g, (match) => (match === ';' ? '\u0000' : match))
    .split('\u0000')

const LANGUAGES: string[] = ['de', 'en']

/** Takes the primary language subtag, so `de-AT` is `de`, and drops languages the app does not support. */
const getLanguage = (value: string) => {
  const subtag = value.split('-')[0]?.toLowerCase()

  return subtag && LANGUAGES.includes(subtag)
    ? (subtag as ContactPickedLanguage)
    : undefined
}

const getContactFromCard = (card: string): ContactPicked | undefined => {
  const lines = card.split('\n')
  const contact: ContactPicked = { emailAddresses: [], phoneNumbers: [] }
  const languages: { language?: ContactPickedLanguage; preference: number }[] =
    []
  const names: { family?: string; full?: string; given?: string } = {}

  for (const [lineIndex, lineFirst] of lines.entries()) {
    // quoted-printable soft line breaks end in `=` and continue on the next line, which is skipped below
    if (lineFirst === undefined) continue

    const separatorIndex = lineFirst.indexOf(':')

    if (separatorIndex === -1) continue

    const [nameWithGroup = '', ...parameters] = getComponents(
      lineFirst.slice(0, separatorIndex),
    )
    const name = nameWithGroup
      .slice(nameWithGroup.lastIndexOf('.') + 1)
      .toUpperCase()

    if (!['EMAIL', 'FN', 'LANG', 'N', 'TEL'].includes(name)) continue

    const parametersUpper = parameters.map((parameter) =>
      parameter.toUpperCase(),
    )
    const isQuotedPrintable = parametersUpper.some((parameter) =>
      parameter.includes('QUOTED-PRINTABLE'),
    )
    const charset = parametersUpper
      .find((parameter) => parameter.startsWith('CHARSET='))
      ?.slice('CHARSET='.length)
    let valueRaw = lineFirst.slice(separatorIndex + 1)

    if (isQuotedPrintable) {
      for (
        let next = lineIndex + 1;
        valueRaw.endsWith('=') && next < lines.length;
        next++
      ) {
        valueRaw = valueRaw.slice(0, -1) + lines[next]
        lines[next] = ''
      }
    }

    const getValue = (raw: string) =>
      (isQuotedPrintable
        ? getDecodedQuotedPrintable(raw, charset)
        : getUnescaped(raw)
      ).trim()

    if (name === 'N') {
      const [family, given] = getComponents(valueRaw).map(getValue)

      names.family = family || undefined
      names.given = given || undefined
      continue
    }

    const value = getValue(valueRaw)

    if (!value) continue

    if (name === 'LANG') {
      const preference = Number.parseInt(
        parametersUpper
          .find((parameter) => parameter.startsWith('PREF='))
          ?.slice('PREF='.length) ?? '',
      )

      languages.push({
        language: getLanguage(value),
        preference: Number.isNaN(preference) ? Infinity : preference,
      })
    } else if (name === 'FN') names.full = value
    else if (name === 'EMAIL') contact.emailAddresses.push(value)
    else contact.phoneNumbers.push(value.replace(/^tel:/i, ''))
  }

  const { firstName, lastName } =
    names.family || names.given
      ? { firstName: names.given, lastName: names.family }
      : getContactNamesFromFullName(names.full)

  if (
    !contact.emailAddresses.length &&
    !contact.phoneNumbers.length &&
    !firstName
  )
    return undefined

  // the most preferred tag decides, even if it is unsupported; the sort is stable, so the first wins a tie
  const language = languages.toSorted((a, b) => a.preference - b.preference)[0]
    ?.language

  return {
    ...contact,
    ...(firstName ? { firstName } : {}),
    ...(language ? { language } : {}),
    ...(lastName ? { lastName } : {}),
  }
}

/** Reads the names, email addresses and phone numbers of vCard 2.1, 3.0 and 4.0 files. */
export const getContactsFromVcard = (text: string): ContactPicked[] =>
  Array.from(
    text
      .replaceAll(/\r\n?/g, '\n')
      .replaceAll(/\n[ \t]/g, '')
      .matchAll(/^BEGIN:VCARD[ \t]*\n([\s\S]*?)^END:VCARD/gim),
    ([, card]) => getContactFromCard(card ?? ''),
  ).filter(isNeitherNullNorUndefined)
