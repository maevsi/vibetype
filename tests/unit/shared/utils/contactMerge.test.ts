import { describe, expect, test } from 'vitest'

import {
  getContactMergeConflicts,
  getContactMergeEmailAddresses,
  getContactMergeInput,
  isContactMergeCandidate,
} from '#src/shared/utils/contactMerge'

const KEPT = {
  accountId: null,
  addressId: 'addressKept',
  createdBy: 'createdBy',
  emailAddresses: ['ada@example.com', 'Work@example.com'],
  firstName: 'Ada',
  language: null,
  lastName: null,
  nickname: null,
  note: null,
  phoneNumber: '+4930123456',
  rowId: 'kept',
  timeZone: null,
  url: null,
}
const MERGED = {
  accountId: 'account',
  addressId: 'addressMerged',
  createdBy: 'createdBy',
  emailAddresses: [' work@example.com', 'grace@example.com'],
  firstName: 'Grace',
  language: 'de' as const,
  lastName: 'Hopper',
  nickname: null,
  note: null,
  phoneNumber: '+4930123456',
  rowId: 'merged',
  timeZone: 'Europe/Berlin',
  url: null,
}

describe('getContactMergeConflicts', () => {
  test('lists fields that both contacts set differently', () => {
    expect(getContactMergeConflicts(KEPT, MERGED)).toEqual(['firstName'])
  })

  test('ignores empty and equal values', () => {
    expect(
      getContactMergeConflicts(
        { ...KEPT, firstName: '' },
        { ...MERGED, phoneNumber: '+4930123456' },
      ),
    ).toEqual([])
  })
})

describe('getContactMergeEmailAddresses', () => {
  test('puts the kept addresses first and drops case-insensitive duplicates', () => {
    expect(getContactMergeEmailAddresses(KEPT, MERGED)).toEqual([
      'ada@example.com',
      'Work@example.com',
      'grace@example.com',
    ])
  })

  test('handles missing addresses', () => {
    expect(
      getContactMergeEmailAddresses(
        { emailAddresses: null },
        { emailAddresses: undefined },
      ),
    ).toEqual([])
  })
})

describe('getContactMergeInput', () => {
  test('fills gaps and follows the choices for conflicts', () => {
    expect(
      getContactMergeInput({
        choices: { firstName: 'merged' },
        emailAddresses: ['ada@example.com'],
        kept: KEPT,
        merged: MERGED,
      }),
    ).toEqual({
      accountId: 'account',
      addressId: 'addressKept',
      createdBy: 'createdBy',
      emailAddresses: ['ada@example.com'],
      firstName: 'Grace',
      language: 'de',
      lastName: 'Hopper',
      nickname: null,
      note: null,
      phoneNumber: '+4930123456',
      timeZone: 'Europe/Berlin',
      url: null,
    })
  })

  test('keeps the kept value by default and sends null without addresses', () => {
    const input = getContactMergeInput({
      choices: {},
      emailAddresses: [],
      kept: KEPT,
      merged: MERGED,
    })

    expect(input.firstName).toBe('Ada')
    expect(input.emailAddresses).toBeNull()
  })
})

describe('isContactMergeCandidate', () => {
  test('excludes the kept contact itself', () => {
    expect(isContactMergeCandidate(KEPT, KEPT, 'me')).toBe(false)
  })

  test('excludes the signed-in account contact on either side', () => {
    expect(isContactMergeCandidate(KEPT, MERGED, 'account')).toBe(false)
    expect(isContactMergeCandidate(MERGED, KEPT, 'account')).toBe(false)
  })

  test('excludes contacts of two different accounts', () => {
    expect(
      isContactMergeCandidate({ ...KEPT, accountId: 'other' }, MERGED, 'me'),
    ).toBe(false)
  })

  test('accepts the remaining contacts', () => {
    expect(isContactMergeCandidate(KEPT, MERGED, 'me')).toBe(true)
  })
})
