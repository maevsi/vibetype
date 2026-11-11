/// <reference lib="dom" />
import type {
  SerializedEntries,
  SerializedRequest,
  StorageAdapter,
} from '@urql/exchange-graphcache'

// Like `makeDefaultStorage` of `@urql/exchange-graphcache`, but opens the
// database at version 2. Graphcache only creates the `entries` and
// `metadata` object stores for brand-new databases, so a database whose
// stores were never created - or were lost - can never be used: every
// transaction on `metadata` throws a `NotFoundError`, the cache never
// hydrates, and the error surfaces as an unhandled rejection. Bumping the
// version runs the version change for every existing database and repairs
// it: the missing stores are created, and a database that needed the repair
// is cleared, since its data cannot be trusted. A database that already has
// both stores keeps its data.

const databaseName = 'graphcache-v4'
const databaseVersion = 2
const entriesStoreName = 'entries'
const metadataStoreName = 'metadata'
const maxAgeInDays = 7
const millisecondsPerDay = 24 * 60 * 60 * 1000

interface UrqlStorage extends StorageAdapter {
  clear(): Promise<void>
  readMetadata(): Promise<null | SerializedRequest[]>
  writeMetadata(metadata: SerializedRequest[]): Promise<void>
}

const getSuccessPromise = <T>(request: IDBRequest<T>) =>
  new Promise<T>((resolve, reject) => {
    request.onerror = () => {
      reject(request.error)
    }
    request.onsuccess = () => {
      resolve(request.result)
    }
  })

const getCompletePromise = (transaction: IDBTransaction) =>
  new Promise<void>((resolve, reject) => {
    transaction.onerror = () => {
      reject(transaction.error)
    }
    transaction.oncomplete = () => {
      resolve()
    }
  })

export const makeUrqlStorage = (): UrqlStorage => {
  const dayKey = Math.floor(Date.now() / millisecondsPerDay)
  const minDayKey = dayKey - maxAgeInDays
  let entries: SerializedEntries = {}
  let onlineListener: (() => void) | undefined

  const openDatabase = new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(databaseName, databaseVersion)
    request.onupgradeneeded = () => {
      const database = request.result
      const isComplete =
        database.objectStoreNames.contains(entriesStoreName) &&
        database.objectStoreNames.contains(metadataStoreName)
      if (isComplete) return
      // A database that is missing either store cannot hold valid data, so
      // both stores are recreated empty
      if (database.objectStoreNames.contains(entriesStoreName))
        database.deleteObjectStore(entriesStoreName)
      if (database.objectStoreNames.contains(metadataStoreName))
        database.deleteObjectStore(metadataStoreName)
      database.createObjectStore(entriesStoreName)
      database.createObjectStore(metadataStoreName)
    }
    request.onerror = () => {
      reject(request.error)
    }
    request.onsuccess = () => {
      // Close the connection if another connection asks for a newer
      // database version, or the other connection's upgrade would stay
      // blocked until this tab closes
      request.result.onversionchange = () => {
        request.result.close()
      }
      resolve(request.result)
    }
  })

  return {
    clear: () =>
      openDatabase.then((database) => {
        const transaction = database.transaction(
          [entriesStoreName, metadataStoreName],
          'readwrite',
        )
        transaction.objectStore(entriesStoreName).clear()
        transaction.objectStore(metadataStoreName).clear()
        entries = {}
        return getCompletePromise(transaction)
      }),

    readData: () =>
      openDatabase
        .then((database) => {
          const collected: SerializedEntries = {}
          const transaction = database.transaction(
            entriesStoreName,
            'readwrite',
          )
          const store = transaction.objectStore(entriesStoreName)
          const cursorRequest = store.openCursor()
          cursorRequest.onsuccess = () => {
            const cursor = cursorRequest.result
            if (!cursor) return
            const key = cursor.key
            if (typeof key !== 'number' || key < minDayKey) {
              store.delete(key)
            } else {
              void getSuccessPromise<SerializedEntries | undefined>(
                store.get(key),
              )
                .then((dayEntries) => {
                  if (!dayEntries) return
                  if (key === dayKey) Object.assign(entries, dayEntries)
                  Object.assign(collected, dayEntries)
                })
                .catch(() => undefined)
            }
            cursor.continue()
          }
          return getCompletePromise(transaction).then(() => collected)
        })
        .catch(() => entries),

    readMetadata: () =>
      openDatabase.then(
        (database) =>
          getSuccessPromise<SerializedRequest[] | null>(
            database
              .transaction(metadataStoreName, 'readonly')
              .objectStore(metadataStoreName)
              .get(metadataStoreName),
          ).then((metadata) => metadata ?? null),
        () => null,
      ),

    writeData: (delta) => {
      Object.assign(entries, delta)
      return openDatabase
        .then((database) =>
          getSuccessPromise(
            database
              .transaction(entriesStoreName, 'readwrite')
              .objectStore(entriesStoreName)
              .put(entries, dayKey),
          ),
        )
        .catch(() => undefined)
    },

    writeMetadata: (metadata) =>
      openDatabase
        .then((database) => {
          const transaction = database.transaction(
            metadataStoreName,
            'readwrite',
          )
          transaction
            .objectStore(metadataStoreName)
            .put(metadata, metadataStoreName)
          return getCompletePromise(transaction)
        })
        .catch(() => undefined),

    onOnline: (callback) => {
      if (onlineListener) {
        window.removeEventListener('online', onlineListener)
      }
      window.addEventListener('online', (onlineListener = () => callback()))
    },
  }
}
