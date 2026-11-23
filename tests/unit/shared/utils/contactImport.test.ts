import { describe, expect, test } from 'vitest'

import {
  getContactImportPhoneNumberParser,
  getContactImportRows,
  type ContactImportPhoneNumberParser,
} from '#src/shared/utils/contactImport'

const parsePhoneNumber: ContactImportPhoneNumberParser = (phoneNumber) =>
  phoneNumber.startsWith('+') ? phoneNumber.replaceAll(' ', '') : undefined

describe('getContactImportRows', () => {
  test('imports a contact with an email address', () => {
    expect(
      getContactImportRows({
        contacts: [
          {
            emailAddresses: [' ada@example.com ', 'other@example.com'],
            firstName: ' Ada ',
            lastName: 'Lovelace',
            phoneNumbers: ['+49 30 123456', '+1 555 0100'],
          },
        ],
        existingEmailAddresses: [],
        parsePhoneNumber,
      }),
    ).toEqual([
      {
        emailAddress: 'ada@example.com',
        firstName: 'Ada',
        isPhoneNumberDropped: false,
        lastName: 'Lovelace',
        phoneNumber: '+4930123456',
        status: 'importable',
      },
    ])
  })

  test('excludes contacts without an email address', () => {
    expect(
      getContactImportRows({
        contacts: [
          { emailAddresses: [], phoneNumbers: ['+4930123456'] },
          { emailAddresses: ['  '], phoneNumbers: [] },
        ],
        existingEmailAddresses: [],
        parsePhoneNumber,
      }).map(({ status }) => status),
    ).toEqual(['missingEmailAddress', 'missingEmailAddress'])
  })

  test('marks existing and earlier picked email addresses as duplicates', () => {
    expect(
      getContactImportRows({
        contacts: [
          { emailAddresses: ['GRACE@example.com'], phoneNumbers: [] },
          { emailAddresses: ['new@example.com'], phoneNumbers: [] },
          { emailAddresses: [' New@Example.com'], phoneNumbers: [] },
        ],
        existingEmailAddresses: ['grace@example.com '],
        parsePhoneNumber,
      }).map(({ status }) => status),
    ).toEqual(['duplicate', 'importable', 'duplicate'])
  })

  test('truncates names and turns empty ones into undefined', () => {
    const [row] = getContactImportRows({
      contacts: [
        {
          emailAddresses: ['a@example.com'],
          firstName: 'a'.repeat(120),
          lastName: '   ',
          phoneNumbers: [],
        },
      ],
      existingEmailAddresses: [],
      parsePhoneNumber,
    })

    expect(row?.firstName).toBe('a'.repeat(100))
    expect(row?.lastName).toBeUndefined()
  })

  test('drops an unparsable phone number but keeps the contact importable', () => {
    expect(
      getContactImportRows({
        contacts: [{ emailAddresses: ['a@example.com'], phoneNumbers: ['12'] }],
        existingEmailAddresses: [],
        parsePhoneNumber,
      }),
    ).toMatchObject([
      {
        isPhoneNumberDropped: true,
        phoneNumber: undefined,
        status: 'importable',
      },
    ])
  })
})

describe('getContactImportPhoneNumberParser', () => {
  test('formats local numbers with the language region', async () => {
    const parse = await getContactImportPhoneNumberParser('de-DE')

    expect(parse('030 123456')).toBe('+4930123456')
    expect(parse('+1 202 555 0100')).toBe('+12025550100')
  })

  test('rejects local numbers without a region', async () => {
    const parse = await getContactImportPhoneNumberParser('en')

    expect(parse('030 123456')).toBeUndefined()
  })

  test('rejects invalid numbers', async () => {
    const parse = await getContactImportPhoneNumberParser('de-DE')

    expect(parse('12')).toBeUndefined()
  })
})
