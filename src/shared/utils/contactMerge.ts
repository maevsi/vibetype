import type { ContactInput, Language } from '~~/gql/generated/graphql'

export const CONTACT_MERGE_FIELDS = [
  'firstName',
  'lastName',
  'nickname',
  'phoneNumber',
  'url',
  'note',
] as const

export type ContactMergeChoices = Partial<
  Record<ContactMergeField, 'kept' | 'merged'>
>

export type ContactMergeField = (typeof CONTACT_MERGE_FIELDS)[number]

export interface ContactMergeSource {
  accountId?: string | null
  addressId?: string | null
  createdBy: string
  emailAddresses?: readonly (string | null | undefined)[] | null
  firstName?: string | null
  language?: Language | null
  lastName?: string | null
  nickname?: string | null
  note?: string | null
  phoneNumber?: string | null
  rowId: string
  timeZone?: string | null
  url?: string | null
}

export const getContactMergeConflicts = (
  kept: Pick<ContactMergeSource, ContactMergeField>,
  merged: Pick<ContactMergeSource, ContactMergeField>,
) =>
  CONTACT_MERGE_FIELDS.filter(
    (field) => kept[field] && merged[field] && kept[field] !== merged[field],
  )

export const getContactMergeEmailAddresses = (
  kept: Pick<ContactMergeSource, 'emailAddresses'>,
  merged: Pick<ContactMergeSource, 'emailAddresses'>,
) => {
  const keys = new Set<string>()

  return [...(kept.emailAddresses ?? []), ...(merged.emailAddresses ?? [])]
    .map((emailAddress) => emailAddress?.trim())
    .filter((emailAddress): emailAddress is string => {
      const key = emailAddress?.toLowerCase()

      if (!key || keys.has(key)) return false

      keys.add(key)
      return true
    })
}

export const getContactMergeInput = ({
  choices,
  emailAddresses,
  kept,
  merged,
}: {
  choices: ContactMergeChoices
  emailAddresses: readonly string[]
  kept: ContactMergeSource
  merged: ContactMergeSource
}): ContactInput => {
  const conflicts = getContactMergeConflicts(kept, merged)
  const fields = Object.fromEntries(
    CONTACT_MERGE_FIELDS.map((field) => [
      field,
      (conflicts.includes(field) && choices[field] === 'merged'
        ? merged[field]
        : (kept[field] ?? merged[field])) ?? null,
    ]),
  )

  return {
    ...fields,
    accountId: kept.accountId ?? merged.accountId ?? null,
    addressId: kept.addressId ?? merged.addressId ?? null,
    createdBy: kept.createdBy,
    emailAddresses: emailAddresses.length ? [...emailAddresses] : null,
    language: kept.language ?? merged.language ?? null,
    timeZone: kept.timeZone ?? merged.timeZone ?? null,
  }
}

export const isContactMergeCandidate = (
  kept: Pick<ContactMergeSource, 'accountId' | 'rowId'>,
  other: Pick<ContactMergeSource, 'accountId' | 'rowId'>,
  signedInAccountId?: string | null,
) =>
  other.rowId !== kept.rowId &&
  !(
    signedInAccountId &&
    (kept.accountId === signedInAccountId ||
      other.accountId === signedInAccountId)
  ) &&
  !(kept.accountId && other.accountId && kept.accountId !== other.accountId)
