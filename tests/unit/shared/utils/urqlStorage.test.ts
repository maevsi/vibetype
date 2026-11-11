import 'fake-indexeddb/auto'

import { describe, expect, test } from 'vitest'

import { makeUrqlStorage } from '#src/shared/utils/urqlStorage'

const getMetadata = () => [
  {
    extensions: {},
    query: 'mutation',
    variables: {},
  },
]

describe('makeUrqlStorage', () => {
  test('round-trips the entries and merges the deltas', async () => {
    const storage = makeUrqlStorage()
    await storage.writeData({ 'Event:1': '"one"' })
    await storage.writeData({ 'Event:2': '"two"' })

    expect(await storage.readData()).toEqual({
      'Event:1': '"one"',
      'Event:2': '"two"',
    })
  })

  test('round-trips the metadata', async () => {
    const storage = makeUrqlStorage()
    const metadata = getMetadata()
    await storage.writeMetadata(metadata)

    expect(await storage.readMetadata()).toEqual(metadata)
  })

  test('clears the entries and the metadata', async () => {
    const storage = makeUrqlStorage()
    await storage.writeData({ 'Event:3': '"three"' })
    await storage.writeMetadata(getMetadata())
    await storage.clear()

    expect(await storage.readData()).toEqual({})
    expect(await storage.readMetadata()).toBeNull()
  })
})
