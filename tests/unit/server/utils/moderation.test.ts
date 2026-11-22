import { expect, test } from 'vitest'

import { getModerationTexts } from '#src/server/utils/moderation'

test('collects event text from variables', () => {
  expect(
    getModerationTexts(
      JSON.stringify({
        query:
          'mutation CreateEvent($input: CreateEventInput!) { createEvent(input: $input) { event { id } } }',
        variables: {
          input: {
            event: { description: 'Bring friends', name: 'Party', slug: 'p' },
          },
        },
      }),
    ),
  ).toEqual(['Bring friends', 'Party'])
})

test('collects account text from inline values', () => {
  expect(
    getModerationTexts(
      JSON.stringify({
        query:
          'mutation { updateAccountByRowId(input: { rowId: "1", accountPatch: { displayName: "Ann" } }) { clientMutationId } }',
      }),
    ),
  ).toEqual(['Ann'])
})

test('collects text from a fragment on the mutation type', () => {
  expect(
    getModerationTexts(
      JSON.stringify({
        query:
          'mutation { ...Create } fragment Create on Mutation { updateEvent(input: { id: "1", eventPatch: { name: "Concert" } }) { clientMutationId } }',
      }),
    ),
  ).toEqual(['Concert'])
})

test('ignores other mutations, queries and invalid bodies', () => {
  expect(
    getModerationTexts(
      JSON.stringify({
        query:
          'mutation { createAddress(input: { address: { name: "Home" } }) { clientMutationId } }',
      }),
    ),
  ).toEqual([])
  expect(
    getModerationTexts(
      JSON.stringify({ query: '{ allEvents { nodes { name } } }' }),
    ),
  ).toEqual([])
  expect(getModerationTexts('not json')).toEqual([])
  expect(getModerationTexts(JSON.stringify({ query: 'mutation {' }))).toEqual(
    [],
  )
})
