export const getContactName = ({
  account,
  contact,
}: {
  account?: {
    username?: string | null
  }
  contact: {
    accountId?: string | null
    firstName?: string | null
    lastName?: string | null
    nickname?: string | null
  }
}) =>
  contact.nickname ||
  (contact.firstName
    ? contact.firstName + (contact.lastName ? ` ${contact.lastName}` : '')
    : account?.username)
