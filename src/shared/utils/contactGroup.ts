import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

const GROUP_NAME_LENGTH_MAXIMUM = 100 // the `contact_group` table's limit for names

export const ContactGroupItem = graphql(`
  fragment ContactGroupItem on ContactGroup {
    id
    name
    rowId
  }
`)

export const getContactGroupItem = (
  fragment?: FragmentType<typeof ContactGroupItem> | null,
) => useFragment(ContactGroupItem, fragment)

/**
 * With any group included, a contact has to be in at least one of them.
 * A contact in any excluded group is dropped.
 */
export const getContactsByGroupFilter = <T extends { rowId: string }>({
  contacts,
  groupIdsByContactId,
  groupIdsExcluded,
  groupIdsIncluded,
}: {
  contacts: T[]
  groupIdsByContactId: Map<string, string[]>
  groupIdsExcluded: string[]
  groupIdsIncluded: string[]
}): T[] => {
  if (!groupIdsExcluded.length && !groupIdsIncluded.length) return contacts

  return contacts.filter(({ rowId }) => {
    const groupIds = groupIdsByContactId.get(rowId) ?? []

    return (
      (!groupIdsIncluded.length ||
        groupIds.some((groupId) => groupIdsIncluded.includes(groupId))) &&
      !groupIds.some((groupId) => groupIdsExcluded.includes(groupId))
    )
  })
}

/** Group names are unique ignoring case, so the first spelling of a name wins. */
export const getContactGroupNamesNormalized = (names: string[]): string[] => {
  const namesByKey = new Map<string, string>()

  for (const name of names) {
    const normalized = name.trim().slice(0, GROUP_NAME_LENGTH_MAXIMUM).trim()
    const key = normalized.toLowerCase()

    if (normalized && !namesByKey.has(key)) namesByKey.set(key, normalized)
  }

  return [...namesByKey.values()]
}
