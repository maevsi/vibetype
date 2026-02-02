import { z } from 'zod'

const tusdPostBodySchema = z.object({
  Type: z.enum(['pre-create', 'pre-finish', 'pre-terminate']),
  Event: z.object({
    Upload: z.object({
      ID: z.string(),
      MetaData: z.object({
        id: z.string(),
      }),
      Size: z.number().nullable(),
      SizeIsDeferred: z.boolean(),
    }),
    HTTPRequest: z.object({
      Header: z.record(z.string(), z.any()),
    }),
  }),
})

export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: tusdPostBodySchema })

  switch (body.Type) {
    case 'pre-create': {
      console.debug(
        'tusd/pre-create',
        JSON.stringify({ id: body.Event.Upload.MetaData.id }),
      )

      if (body.Event.Upload.SizeIsDeferred || !body.Event.Upload.Size) {
        return throwError({
          status: 400,
          statusText: "Upload size must be given and can't be deferred",
        })
      }

      const queryResult = await executeQuery(
        sql`
          SELECT EXISTS(
            SELECT 1
              FROM vibetype.upload
              WHERE
                  id = ${body.Event.Upload.MetaData.id}
                AND
                  size_byte = ${body.Event.Upload.Size}
                AND
                  storage_key IS NULL)
        `,
      )

      if (!queryResult[0]?.exists) {
        return throwError({
          status: 404,
          statusText: 'Upload with the given id does not exist',
        })
      }

      return {}
    }
    case 'pre-finish': {
      console.debug(
        'tusd/pre-finish',
        JSON.stringify({
          id: body.Event.Upload.MetaData.id,
          storageKey: body.Event.Upload.ID,
        }),
      )

      // if this api endpoint was public, a check for file existence and size in the storage would be needed here

      await executeQuery(
        sql`
          UPDATE vibetype.upload
            SET storage_key = ${body.Event.Upload.ID}
            WHERE
                id = ${body.Event.Upload.MetaData.id}
              AND
                size_byte = ${body.Event.Upload.Size}
              AND
                storage_key IS NULL
        `,
      )

      return {}
    }
    case 'pre-terminate': {
      console.debug(
        'tusd/pre-terminate',
        JSON.stringify({
          id: body.Event.Upload.MetaData.id,
          storageKey: body.Event.Upload.ID,
        }),
      )

      const queryResult = await executeQuery(
        sql`
          SELECT EXISTS(
            SELECT 1
              FROM vibetype.upload
                WHERE id = ${body.Event.Upload.MetaData.id})
        `,
      )

      return {
        RejectTermination:
          queryResult[0] === undefined ? true : queryResult[0].exists,
      }
    }
    default:
      return throwError({
        status: 500,
        statusText: 'Invalid hook name header.',
      })
  }
})
