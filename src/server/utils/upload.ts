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
        `http://tusd:8080/files/${payload.before.storage_key}`,
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
