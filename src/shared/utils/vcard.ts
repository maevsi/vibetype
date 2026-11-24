import { getContactGroupNamesNormalized } from './contactGroup'
import { getContactNamesFromFullName } from './contactImport'
import type { ContactPicked } from './contactImport'
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

/** Splits at separators that are not escaped with a backslash. */
const getSplit = (value: string, separator: ',' | ';') =>
  value
    .replaceAll(/\\[\s\S]|[,;]/g, (match) =>
      match === separator ? '\u0000' : match,
    )
    .split('\u0000')

const getComponents = (value: string) => getSplit(value, ';')

const getContactFromCard = (card: string): ContactPicked | undefined => {
  const lines = card.split('\n')
  const contact: ContactPicked = {
    emailAddresses: [],
    groupNames: [],
    phoneNumbers: [],
  }
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

    if (!['CATEGORIES', 'EMAIL', 'FN', 'N', 'TEL'].includes(name)) continue

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

    if (name === 'CATEGORIES') {
      contact.groupNames.push(...getSplit(valueRaw, ',').map(getValue))
      continue
    }

    const value = getValue(valueRaw)

    if (!value) continue

    if (name === 'FN') names.full = value
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

  return {
    ...contact,
    groupNames: getContactGroupNamesNormalized(contact.groupNames),
    ...(firstName ? { firstName } : {}),
    ...(lastName ? { lastName } : {}),
  }
}

/** Reads the names, email addresses, phone numbers and categories of vCard 2.1, 3.0 and 4.0 files. */
export const getContactsFromVcard = (text: string): ContactPicked[] =>
  Array.from(
    text
      .replaceAll(/\r\n?/g, '\n')
      .replaceAll(/\n[ \t]/g, '')
      .matchAll(/^BEGIN:VCARD[ \t]*\n([\s\S]*?)^END:VCARD/gim),
    ([, card]) => getContactFromCard(card ?? ''),
  ).filter(isNeitherNullNorUndefined)
