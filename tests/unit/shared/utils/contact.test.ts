import { describe, expect, test } from 'vitest'

import { getContactCreationCandidate } from '#src/shared/utils/contact'

const CONTACTS = [
  {
    accountByAccountId: { id: 'id', rowId: 'accountRowId', username: 'Ada' },
    emailAddress: null,
  },
  {
    accountByAccountId: null,
    emailAddress: 'Grace@example.com',
  },
]

describe('getContactCreationCandidate', () => {
  test('offers the searched email address', () => {
    expect(
      getContactCreationCandidate({
        contacts: CONTACTS,
        emailAddress: 'linus@example.com',
      }),
    ).toEqual({ emailAddress: 'linus@example.com' })
  })

  test('offers the account behind the searched username', () => {
    expect(
      getContactCreationCandidate({
        accountId: 'accountRowIdOther',
        contacts: CONTACTS,
        username: 'linus',
      }),
    ).toEqual({ accountId: 'accountRowIdOther', username: 'linus' })
  })

  test('offers nothing for a username without an account', () => {
    expect(
      getContactCreationCandidate({
        contacts: CONTACTS,
        username: 'linus',
      }),
    ).toBeUndefined()
  })

  test('offers nothing for contacts that exist, ignoring casing', () => {
    expect(
      getContactCreationCandidate({
        contacts: CONTACTS,
        emailAddress: 'grace@example.com',
      }),
    ).toBeUndefined()
    expect(
      getContactCreationCandidate({
        accountId: 'accountRowId',
        contacts: CONTACTS,
        username: 'ada',
      }),
    ).toBeUndefined()
  })
})
