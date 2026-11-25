import { getContactGroupNamesNormalized } from './contactGroup'
import type { CountryCode } from 'libphonenumber-js/min'

const EMAIL_ADDRESSES_MAXIMUM = 10 // the `contact` table's limit
const NAME_LENGTH_MAXIMUM = 100 // the `contact` table's limit for first and last names

export type ContactImportPhoneNumberParser = (
  phoneNumber: string,
) => string | undefined

export interface ContactImportExisting {
  emailAddresses?: readonly string[] | null
  firstName?: string | null
  lastName?: string | null
  phoneNumber?: string | null
  rowId: string
}

export interface ContactImportPatch {
  emailAddresses?: string[]
  firstName?: string
  lastName?: string
  phoneNumber?: string
}

export interface ContactImportRow {
  contactPatch?: ContactImportPatch
  contactRowId?: string
  emailAddresses: string[]
  firstName?: string
  groupNames: string[]
  isPhoneNumberDropped: boolean
  lastName?: string
  phoneNumber?: string
  status: ContactImportRowStatus
}

export type ContactImportRowStatus =
  'duplicate' | 'importable' | 'mergeable' | 'missingEmailAddress'

export interface ContactPicked {
  emailAddresses: string[]
  firstName?: string
  groupNames: string[]
  lastName?: string
  phoneNumbers: string[]
}

const getFirstTrimmed = (values: string[]) =>
  values.map((value) => value.trim()).find(Boolean)

/** Trims, drops empty and case-insensitively repeated values and keeps the first ones up to the `contact` table's limit. */
const getEmailAddressesNormalized = (emailAddresses: string[]) => {
  const keys = new Set<string>()

  return emailAddresses
    .map((emailAddress) => emailAddress.trim())
    .filter((emailAddress) => {
      const key = emailAddress.toLowerCase()

      if (!key || keys.has(key)) return false

      keys.add(key)
      return true
    })
    .slice(0, EMAIL_ADDRESSES_MAXIMUM)
}

const getNameNormalized = (name?: string) =>
  name?.trim().slice(0, NAME_LENGTH_MAXIMUM).trim() || undefined

/** Splits a full name at the last whitespace, so that a single word is a first name only. */
export const getContactNamesFromFullName = (
  fullName?: string,
): Pick<ContactPicked, 'firstName' | 'lastName'> => {
  const name = fullName?.trim() ?? ''
  const separatorIndex = name.search(/\s\S*$/)

  if (separatorIndex === -1) return name ? { firstName: name } : {}

  return {
    firstName: name.slice(0, separatorIndex).trim(),
    lastName: name.slice(separatorIndex).trim(),
  }
}

/** Loads the phone number library on demand, so that it stays out of the main bundle. */
export const getContactImportPhoneNumberParser = async (
  language?: string,
): Promise<ContactImportPhoneNumberParser> => {
  const { isSupportedCountry, parsePhoneNumberFromString } =
    await import('libphonenumber-js/min')
  const region = getRegion(language)
  const defaultCountry: CountryCode | undefined =
    region && isSupportedCountry(region) ? region : undefined

  return (phoneNumber) => {
    const parsed = parsePhoneNumberFromString(phoneNumber, { defaultCountry })

    return parsed?.isValid() ? parsed.number : undefined
  }
}

/** Only what the existing contact lacks, so that an import never overwrites what is already there. */
const getContactPatch = ({
  emailAddresses,
  existing,
  firstName,
  lastName,
  phoneNumber,
}: {
  emailAddresses: string[]
  existing: ContactImportExisting
  firstName?: string
  lastName?: string
  phoneNumber?: string
}): ContactImportPatch => {
  const existingEmailAddresses = existing.emailAddresses ?? []
  const existingKeys = new Set(
    existingEmailAddresses.map((emailAddress) =>
      emailAddress.trim().toLowerCase(),
    ),
  )
  const emailAddressesMerged = getEmailAddressesNormalized([
    ...existingEmailAddresses,
    ...emailAddresses,
  ])
  const hasNewEmailAddress = emailAddressesMerged.some(
    (emailAddress) => !existingKeys.has(emailAddress.toLowerCase()),
  )

  return {
    ...(hasNewEmailAddress ? { emailAddresses: emailAddressesMerged } : {}),
    ...(firstName && !existing.firstName?.trim() ? { firstName } : {}),
    ...(lastName && !existing.lastName?.trim() ? { lastName } : {}),
    ...(phoneNumber && !existing.phoneNumber?.trim() ? { phoneNumber } : {}),
  }
}

export const getContactImportRows = ({
  contacts,
  existingContacts,
  parsePhoneNumber,
}: {
  contacts: ContactPicked[]
  existingContacts: ContactImportExisting[]
  parsePhoneNumber: ContactImportPhoneNumberParser
}): ContactImportRow[] => {
  const existingByEmailAddress = new Map<string, ContactImportExisting>()

  for (const existing of existingContacts)
    for (const emailAddress of existing.emailAddresses ?? []) {
      const key = emailAddress.trim().toLowerCase()

      if (!existingByEmailAddress.has(key))
        existingByEmailAddress.set(key, existing)
    }

  const knownEmailAddresses = new Set<string>()

  return contacts.map((contact) => {
    const emailAddresses = getEmailAddressesNormalized(contact.emailAddresses)
    const emailAddressKeys = emailAddresses.map((emailAddress) =>
      emailAddress.toLowerCase(),
    )
    const firstName = getNameNormalized(contact.firstName)
    const lastName = getNameNormalized(contact.lastName)
    const phoneNumberPicked = getFirstTrimmed(contact.phoneNumbers)
    const phoneNumber = phoneNumberPicked
      ? parsePhoneNumber(phoneNumberPicked)
      : undefined
    const existingKey = emailAddressKeys.find((key) =>
      existingByEmailAddress.has(key),
    )
    const existing = existingKey
      ? existingByEmailAddress.get(existingKey)
      : undefined
    const contactPatch = existing
      ? getContactPatch({
          emailAddresses,
          existing,
          firstName,
          lastName,
          phoneNumber,
        })
      : undefined
    const status: ContactImportRowStatus = !emailAddressKeys.length
      ? 'missingEmailAddress'
      : contactPatch
        ? Object.keys(contactPatch).length
          ? 'mergeable'
          : 'duplicate'
        : emailAddressKeys.some((key) => knownEmailAddresses.has(key))
          ? 'duplicate'
          : 'importable'

    for (const key of emailAddressKeys) knownEmailAddresses.add(key)

    return {
      ...(existing ? { contactPatch, contactRowId: existing.rowId } : {}),
      emailAddresses,
      firstName,
      groupNames: getContactGroupNamesNormalized(contact.groupNames),
      isPhoneNumberDropped: Boolean(phoneNumberPicked) && !phoneNumber,
      lastName,
      phoneNumber,
      status,
    }
  })
}

/** The region subtag of a language tag, like `DE` for `de-DE`. */
const getRegion = (language?: string) => {
  if (!language) return undefined

  try {
    return new Intl.Locale(language).region
  } catch {
    return undefined
  }
}
