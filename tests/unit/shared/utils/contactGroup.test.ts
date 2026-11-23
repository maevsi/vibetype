import { describe, expect, test } from 'vitest'

import {
  getContactGroupNamesNormalized,
  getContactsByGroupFilter,
} from '#src/shared/utils/contactGroup'

const contacts = [
  { rowId: 'ada' },
  { rowId: 'grace' },
  { rowId: 'linus' },
  { rowId: 'nobody' },
]
const groupIdsByContactId = new Map([
  ['ada', ['colleagues', 'university']],
  ['grace', ['colleagues']],
  ['linus', ['old']],
])

const getRowIds = (groupIdsExcluded: string[], groupIdsIncluded: string[]) =>
  getContactsByGroupFilter({
    contacts,
    groupIdsByContactId,
    groupIdsExcluded,
    groupIdsIncluded,
  }).map(({ rowId }) => rowId)

describe('getContactsByGroupFilter', () => {
  test('keeps all contacts without a filter', () => {
    expect(getRowIds([], [])).toEqual(['ada', 'grace', 'linus', 'nobody'])
  })

  test('keeps contacts in at least one included group', () => {
    expect(getRowIds([], ['colleagues'])).toEqual(['ada', 'grace'])
    expect(getRowIds([], ['old', 'university'])).toEqual(['ada', 'linus'])
  })

  test('drops contacts in any excluded group, keeping those without groups', () => {
    expect(getRowIds(['colleagues'], [])).toEqual(['linus', 'nobody'])
  })

  test('lets an exclusion win over an inclusion', () => {
    expect(getRowIds(['university'], ['colleagues'])).toEqual(['grace'])
  })
})

describe('getContactGroupNamesNormalized', () => {
  test('trims and drops empty names', () => {
    expect(getContactGroupNamesNormalized([' Work ', '', '   '])).toEqual([
      'Work',
    ])
  })

  test('cuts to 100 characters and trims again', () => {
    expect(getContactGroupNamesNormalized([`${'a'.repeat(99)} b`])).toEqual([
      'a'.repeat(99),
    ])
  })

  test('removes case-insensitive duplicates, keeping the first spelling', () => {
    expect(
      getContactGroupNamesNormalized([
        'Colleagues',
        'old',
        'colleagues ',
        'OLD',
      ]),
    ).toEqual(['Colleagues', 'old'])
  })
})
