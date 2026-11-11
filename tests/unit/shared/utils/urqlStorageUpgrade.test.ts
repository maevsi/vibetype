import 'fake-indexeddb/auto'

import { describe, expect, test } from 'vitest'

import { makeUrqlStorage } from '#src/shared/utils/urqlStorage'

const millisecondsPerDay = 24 * 60 * 60 * 1000
const dayKey = Math.floor(Date.now() / millisecondsPerDay)

// Simulates the database of a previous app version, which the default
// storage of `@urql/exchange-graphcache` created at version 1
const seedVersionOneDatabase = () =>
  new Promise<void>((resolve, reject) => {
    const request = indexedDB.open('graphcache-v4', 1)
    request.onupgradeneeded = () => {
      request.result.createObjectStore('entries')
      request.result.createObjectStore('metadata')
    }
    request.onerror = () => {
      reject(request.error)
    }
    request.onsuccess = () => {
      const database = request.result
      const transaction = database.transaction(
        ['entries', 'metadata'],
        'readwrite',
      )
      transaction
        .objectStore('entries')
        .put({ 'Event:1': '"stored"' }, dayKey - 1)
      transaction
        .objectStore('entries')
        .put({ 'Event:2': '"expired"' }, dayKey - 8)
      transaction
        .objectStore('metadata')
        .put([{ extensions: {}, query: 'mutation', variables: {} }], 'metadata')
      transaction.oncomplete = () => {
        database.close()
        resolve()
      }
      transaction.onerror = () => {
        reject(transaction.error)
      }
    }
  })

describe('makeUrqlStorage', () => {
  test('keeps the data of a complete version one database', async () => {
    await seedVersionOneDatabase()
    const storage = makeUrqlStorage()

    expect(await storage.readData()).toEqual({ 'Event:1': '"stored"' })
    expect(await storage.readMetadata()).toEqual([
      { extensions: {}, query: 'mutation', variables: {} },
    ])
  })

  test('keeps accepting new data after the version upgrade', async () => {
    const storage = makeUrqlStorage()
    await storage.writeData({ 'Event:3': '"written"' })

    expect(await storage.readData()).toEqual({
      'Event:1': '"stored"',
      'Event:3': '"written"',
    })
  })
})
