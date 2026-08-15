import type Redis from 'ioredis'

type Upload = {
  id: string
  name?: string
  size_byte: number
  storage_key?: string
  type: 'image'
  created_at: string
  created_by: string
}

type Payload = {
  before: Upload | null
  after: Upload | null
}

export const processUpload = async ({
  payload,
  id,
}: {
  payload: Payload
  id: string
}) => {
  if (payload.before !== null && payload.after === null) {
    if (payload.before.storage_key !== null) {
      const response = await $fetch.raw(
        `${getServiceHref({ name: 'tusd' })}/files/${payload.before.storage_key}`,
        {
          headers: {
            'Tus-Resumable': '1.0.0',
          },
          ignoreResponseError: true, // handle response status below
          method: 'DELETE',
        },
      )

      switch (response.status) {
        case 204:
          console.debug(
            'Upload deleted',
            JSON.stringify({ id, storageKey: payload.before.storage_key }),
          )
          break
        case 404:
          console.warn(
            'Stored file could not be found for upload deletion',
            JSON.stringify({ id, storageKey: payload.before.storage_key }),
          )
          break
        default:
          console.warn('Unexpected tusd status code', response.status)
      }
    } else {
      console.debug(
        'Upload has no storage key, skipping deletion from file storage',
      )
    }
  }
}

export type UploadMessageKey = { payload: { id: string } }
export type UploadMessageValue = { payload: Payload } | null

export const processRawUpload = async ({
  key,
  redis,
  value,
}: {
  key: UploadMessageKey | null
  redis: Redis
  value: UploadMessageValue
}) => {
  if (!key) {
    throw new PermanentProcessingError('Upload message missing key')
  }

  // a null value is a Debezium delete tombstone, nothing to process
  if (!value) return

  const dedupeKey = `dedupe:upload:${key.payload.id}`
  if (await hasBeenProcessed(redis, dedupeKey)) {
    console.info(
      `Upload ${key.payload.id} already processed, skipping duplicate delivery`,
    )
    return
  }

  await processUpload({
    id: key.payload.id,
    payload: value.payload,
  })

  // best-effort: the upload was already fully processed above, so a failure
  // to record that shouldn't cause a (duplicate-deleting) retry
  try {
    await markProcessed(redis, dedupeKey, EVENT_STREAM_DEDUPE_TTL_SECONDS)
  } catch (error) {
    console.warn(
      `Failed to record upload ${key.payload.id} as processed: ${error}`,
    )
  }
}
