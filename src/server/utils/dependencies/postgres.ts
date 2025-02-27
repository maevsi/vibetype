import postgres from 'postgres'

export const sql = postgres()

export const executeQuery = async <T>(query: Promise<T>): Promise<T> => {
  try {
    return await query
  } catch (error) {
    throw throwError({
      code: 500,
      message: (error as Error).message,
    })
  }
}

export const profilePictureDelete = async ({
  uploadId,
}: {
  uploadId: string
}) => sql`DELETE FROM maevsi.profile_picture WHERE upload_id = ${uploadId}`

export const uploadSelect = async ({ id }: { id: string }) =>
  sql`SELECT * FROM maevsi.upload WHERE id = ${id}`

export const uploadUpdate = async ({
  id,
  storageKey,
}: {
  id: string
  storageKey: string
}) => sql`UPDATE maevsi.upload SET storage_key = ${storageKey} WHERE id = ${id}`

export const uploadDelete = async ({ id }: { id: string }) =>
  sql`DELETE FROM maevsi.upload WHERE id = ${id}`

export const uploadExists = async ({ id }: { id: string }) =>
  sql`SELECT EXISTS(SELECT * FROM maevsi.upload WHERE id = ${id})`
