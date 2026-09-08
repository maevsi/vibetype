export const CHANNEL_NAME_UPLOAD = 'upload'

const TYPE_UPLOAD_DELETED = 'upload.deleted'

export const processUpload = async ({
  id,
  storageKey,
  type,
}: {
  id: string
  storageKey?: string | null
  type: string
}) => {
  // Uploads only ever publish deletions today, but the payload already carries a type discriminator (mirroring `vibetype.trigger_event_outbox()`).
  // Unrecognized types are ignored defensively instead of being treated as a deletion by default.
  if (type !== TYPE_UPLOAD_DELETED) {
    console.warn(`Unexpected upload event type, skipping: ${type}`)
    return
  }

  if (!storageKey) {
    console.debug(
      'Upload has no storage key, skipping deletion from file storage',
    )
    return
  }

  const response = await $fetch.raw(`http://tusd:8080/files/${storageKey}`, {
    headers: {
      'Tus-Resumable': '1.0.0',
    },
    ignoreResponseError: true, // handle response status below
    method: 'DELETE',
  })

  switch (response.status) {
    case 204:
      console.debug('Upload deleted', JSON.stringify({ id, storageKey }))
      break
    case 404:
      console.warn(
        'Stored file could not be found for upload deletion',
        JSON.stringify({ id, storageKey }),
      )
      break
    default:
      console.warn('Unexpected tusd status code', response.status)
  }
}
