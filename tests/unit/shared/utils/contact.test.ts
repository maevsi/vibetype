import { describe, expect, test } from 'vitest'

import {
  getContactCreationCandidate,
  getContactsSorted,
} from '#src/shared/utils/contact'

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

describe('getContactsSorted', () => {
  // The server can only order contacts by their primary key, so a contact without a name has to find its place through whatever else identifies it.
  const contactNamed = {
    accountByAccountId: null,
    emailAddress: null,
    firstName: 'Mia',
    lastName: 'Meyer',
    nickname: null,
  }
  const contactWithUsername = {
    accountByAccountId: { id: 'id', rowId: 'accountRowId', username: 'abcdee' },
    emailAddress: null,
    firstName: null,
    lastName: null,
    nickname: null,
  }
  const contactWithEmailAddress = {
    accountByAccountId: null,
    emailAddress: 'zoe@example.com',
    firstName: null,
    lastName: null,
    nickname: null,
  }

  test('places contacts without a name among the others', () => {
    const contactsSorted = getContactsSorted([
      contactWithEmailAddress,
      contactWithUsername,
      contactNamed,
    ])

    expect(contactsSorted.indexOf(contactNamed)).toBeLessThan(
      contactsSorted.indexOf(contactWithEmailAddress),
    )
    expect(contactsSorted).toContain(contactWithUsername)
  })

  test('leaves the given array untouched', () => {
    const contacts = [contactWithEmailAddress, contactNamed]
    getContactsSorted(contacts)

    expect(contacts[0]).toBe(contactWithEmailAddress)
  })
})
