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
            emailAddresses: [
              ' ada@example.com ',
              'other@example.com',
              'ADA@example.com',
            ],
            firstName: ' Ada ',
            groupNames: [' Work ', 'work', ''],
            lastName: 'Lovelace',
            phoneNumbers: ['+49 30 123456', '+1 555 0100'],
          },
        ],
        existingContacts: [],
        parsePhoneNumber,
      }),
    ).toEqual([
      {
        emailAddresses: ['ada@example.com', 'other@example.com'],
        firstName: 'Ada',
        groupNames: ['Work'],
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
          { emailAddresses: [], groupNames: [], phoneNumbers: ['+4930123456'] },
          { emailAddresses: ['  '], groupNames: [], phoneNumbers: [] },
        ],
        existingContacts: [],
        parsePhoneNumber,
      }).map(({ status }) => status),
    ).toEqual(['missingEmailAddress', 'missingEmailAddress'])
  })

  test('marks existing and earlier picked email addresses as duplicates', () => {
    expect(
      getContactImportRows({
        contacts: [
          {
            emailAddresses: ['GRACE@example.com'],
            groupNames: [],
            phoneNumbers: [],
          },
          {
            emailAddresses: ['new@example.com'],
            groupNames: [],
            phoneNumbers: [],
          },
          {
            emailAddresses: [' New@Example.com'],
            groupNames: [],
            phoneNumbers: [],
          },
        ],
        existingContacts: [
          { emailAddresses: ['grace@example.com '], rowId: 'grace' },
        ],
        parsePhoneNumber,
      }).map(({ status }) => status),
    ).toEqual(['duplicate', 'importable', 'duplicate'])
  })

  test('marks a contact as mergeable when any of its email addresses exists', () => {
    expect(
      getContactImportRows({
        contacts: [
          {
            emailAddresses: ['new@example.com', 'grace@example.com'],
            groupNames: [],
            phoneNumbers: [],
          },
        ],
        existingContacts: [
          { emailAddresses: ['grace@example.com'], rowId: 'grace' },
        ],
        parsePhoneNumber,
      }).map(({ status }) => status),
    ).toEqual(['mergeable'])
  })

  test('marks a row that adds to an existing contact as mergeable', () => {
    expect(
      getContactImportRows({
        contacts: [
          {
            emailAddresses: ['GRACE@example.com', 'hopper@example.com'],
            firstName: 'Grace',
            groupNames: ['Work'],
            lastName: 'Hopper',
            phoneNumbers: ['+49 30 123456'],
          },
        ],
        existingContacts: [
          {
            emailAddresses: ['grace@example.com'],
            firstName: 'Gracie',
            lastName: null,
            phoneNumber: '',
            rowId: 'grace',
          },
        ],
        parsePhoneNumber,
      }),
    ).toMatchObject([
      {
        contactPatch: {
          emailAddresses: ['grace@example.com', 'hopper@example.com'],
          lastName: 'Hopper',
          phoneNumber: '+4930123456',
        },
        contactRowId: 'grace',
        status: 'mergeable',
      },
    ])
  })

  test('keeps a row as duplicate when the existing contact lacks nothing', () => {
    const [row] = getContactImportRows({
      contacts: [
        {
          emailAddresses: ['grace@example.com'],
          firstName: 'Grace',
          groupNames: [],
          phoneNumbers: [],
        },
      ],
      existingContacts: [
        {
          emailAddresses: ['grace@example.com'],
          firstName: 'Gracie',
          rowId: 'grace',
        },
      ],
      parsePhoneNumber,
    })

    expect(row?.status).toBe('duplicate')
    expect(row?.contactPatch).toEqual({})
  })

  test('caps the merged email addresses at 10', () => {
    const [row] = getContactImportRows({
      contacts: [
        {
          emailAddresses: [
            'grace@example.com',
            'a@example.com',
            'b@example.com',
          ],
          groupNames: [],
          phoneNumbers: [],
        },
      ],
      existingContacts: [
        {
          emailAddresses: Array.from(
            { length: 9 },
            (_, index) => `grace${index}@example.com`,
          ).concat('grace@example.com'),
          rowId: 'grace',
        },
      ],
      parsePhoneNumber,
    })

    expect(row?.status).toBe('duplicate')
  })

  test('adds only as many email addresses as fit below 10', () => {
    const [row] = getContactImportRows({
      contacts: [
        {
          emailAddresses: [
            'grace@example.com',
            'a@example.com',
            'b@example.com',
          ],
          groupNames: [],
          phoneNumbers: [],
        },
      ],
      existingContacts: [
        {
          emailAddresses: Array.from(
            { length: 8 },
            (_, index) => `grace${index}@example.com`,
          ).concat('grace@example.com'),
          rowId: 'grace',
        },
      ],
      parsePhoneNumber,
    })

    expect(row?.status).toBe('mergeable')
    expect(row?.contactPatch?.emailAddresses).toHaveLength(10)
  })

  test('keeps at most 10 email addresses', () => {
    expect(
      getContactImportRows({
        contacts: [
          {
            emailAddresses: Array.from(
              { length: 11 },
              (_, index) => `ada${index}@example.com`,
            ),
            groupNames: [],
            phoneNumbers: [],
          },
        ],
        existingContacts: [],
        parsePhoneNumber,
      })[0]?.emailAddresses,
    ).toHaveLength(10)
  })

  test('truncates names and turns empty ones into undefined', () => {
    const [row] = getContactImportRows({
      contacts: [
        {
          emailAddresses: ['a@example.com'],
          firstName: 'a'.repeat(120),
          groupNames: [],
          lastName: '   ',
          phoneNumbers: [],
        },
      ],
      existingContacts: [],
      parsePhoneNumber,
    })

    expect(row?.firstName).toBe('a'.repeat(100))
    expect(row?.lastName).toBeUndefined()
  })

  test('drops an unparsable phone number but keeps the contact importable', () => {
    expect(
      getContactImportRows({
        contacts: [
          {
            emailAddresses: ['a@example.com'],
            groupNames: [],
            phoneNumbers: ['12'],
          },
        ],
        existingContacts: [],
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
