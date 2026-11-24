import { describe, expect, test } from 'vitest'

import { getContactsFromVcard } from '#src/shared/utils/vcard'

describe('getContactsFromVcard', () => {
  test('reads vCard 2.1 with quoted-printable and soft line breaks', () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:2.1',
      'N;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:M=C3=BCller;J=C3=BCrgen;;;',
      'FN;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:J=C3=BCrgen M=C3=BCller',
      'TEL;CELL;PREF:030 123456',
      'EMAIL;HOME;ENCODING=QUOTED-PRINTABLE:j=C3=BCrgen=',
      '@example.com',
      'END:VCARD',
      '',
    ].join('\r\n')

    expect(getContactsFromVcard(vcard)).toEqual([
      {
        emailAddresses: ['jürgen@example.com'],
        firstName: 'Jürgen',
        groupNames: [],
        lastName: 'Müller',
        phoneNumbers: ['030 123456'],
      },
    ])
  })

  test('reads vCard 3.0 with folding, groups and escapes', () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Lovelace\\, Countess;Ada\\;B;;;',
      'item1.EMAIL;TYPE=INTERNET;TYPE=PREF:ada@exam',
      ' ple.com',
      'item2.EMAIL;type=WORK:work@example.com',
      'TEL;TYPE=CELL:+49 30 123456',
      'NOTE:ignored',
      'END:VCARD',
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Grace Brewster Hopper',
      'EMAIL:grace@example.com',
      'END:VCARD',
    ].join('\n')

    expect(getContactsFromVcard(vcard)).toEqual([
      {
        emailAddresses: ['ada@example.com', 'work@example.com'],
        firstName: 'Ada;B',
        groupNames: [],
        lastName: 'Lovelace, Countess',
        phoneNumbers: ['+49 30 123456'],
      },
      {
        emailAddresses: ['grace@example.com'],
        firstName: 'Grace Brewster',
        groupNames: [],
        lastName: 'Hopper',
        phoneNumbers: [],
      },
    ])
  })

  test('reads vCard 4.0 with tel uris and a single word name', () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:4.0',
      'FN:Cher',
      'TEL;VALUE=uri;PREF=1:tel:+1-202-555-0100',
      'EMAIL;PREF=1:cher@example.com',
      'END:VCARD',
    ].join('\r\n')

    expect(getContactsFromVcard(vcard)).toEqual([
      {
        emailAddresses: ['cher@example.com'],
        firstName: 'Cher',
        groupNames: [],
        phoneNumbers: ['+1-202-555-0100'],
      },
    ])
  })

  test('reads categories as group names', () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Cher',
      'EMAIL:cher@example.com',
      'CATEGORIES:Work, University,,work',
      'END:VCARD',
    ].join('\n')

    expect(getContactsFromVcard(vcard)).toMatchObject([
      { groupNames: ['Work', 'University'] },
    ])
  })

  test('keeps an escaped comma inside a group name', () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Cher',
      'EMAIL:cher@example.com',
      'item1.CATEGORIES:Friends\\, family,Club',
      'END:VCARD',
    ].join('\n')

    expect(getContactsFromVcard(vcard)).toMatchObject([
      { groupNames: ['Friends, family', 'Club'] },
    ])
  })

  test('reads quoted-printable categories', () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:2.1',
      'FN:Cher',
      'EMAIL:cher@example.com',
      'CATEGORIES;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:Universit=C3=A4t,Fam=',
      'ilie',
      'END:VCARD',
    ].join('\n')

    expect(getContactsFromVcard(vcard)).toMatchObject([
      { groupNames: ['Universität', 'Familie'] },
    ])
  })

  test('skips cards without data and text outside cards', () => {
    expect(
      getContactsFromVcard(
        'EMAIL:outside@example.com\nBEGIN:VCARD\nVERSION:3.0\nEND:VCARD',
      ),
    ).toEqual([])
  })
})
