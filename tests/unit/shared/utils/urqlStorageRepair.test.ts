import 'fake-indexeddb/auto'

import { describe, expect, test } from 'vitest'

import { makeUrqlStorage } from '#src/shared/utils/urqlStorage'

const millisecondsPerDay = 24 * 60 * 60 * 1000
const dayKey = Math.floor(Date.now() / millisecondsPerDay)

// Simulates a corrupted database that is missing the `metadata` store:
// graphcache only created the store it needed on the interrupted first run
const seedCorruptedDatabase = () =>
  new Promise<void>((resolve, reject) => {
    const request = indexedDB.open('graphcache-v4', 1)
    request.onupgradeneeded = () => {
      request.result.createObjectStore('entries')
    }
    request.onerror = () => {
      reject(request.error)
    }
    request.onsuccess = () => {
      const database = request.result
      const transaction = database.transaction('entries', 'readwrite')
      transaction
        .objectStore('entries')
        .put({ 'Event:1': '"untrusted"' }, dayKey)
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
  test('repairs a version one database that is missing the metadata store', async () => {
    await seedCorruptedDatabase()
    const storage = makeUrqlStorage()

    // The data of a database that needed the repair is not trusted
    expect(await storage.readData()).toEqual({})
    expect(await storage.readMetadata()).toBeNull()

    await storage.writeData({ 'Event:1': '"written"' })
    expect(await storage.readData()).toEqual({ 'Event:1': '"written"' })

    const database = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('graphcache-v4', 2)
      request.onsuccess = () => {
        resolve(request.result)
      }
      request.onerror = () => {
        reject(request.error)
      }
    })
    expect(database.objectStoreNames.contains('entries')).toBe(true)
    expect(database.objectStoreNames.contains('metadata')).toBe(true)
    database.close()
  })
})
