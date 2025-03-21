import { consola } from 'consola'
import { MIMES } from 'h3'
import { z } from 'zod'

const tusdPostBodySchema = z.object({
  Type: z.string(),
  Event: z.object({
    Upload: z.object({
      ID: z.string(),
      MetaData: z.object({
        maevsiUploadUuid: z.string(),
      }),
    }),
  }),
})

export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: tusdPostBodySchema })

  switch (body.Type) {
    case 'pre-create': {
      consola.log('tusd/pre-create')

      const queryResult = await executeQuery(
        uploadExists({ id: body.Event.Upload.MetaData.maevsiUploadUuid }),
      )

      if (!queryResult[0]?.exists) {
        return throwError({
          code: 500,
          message: 'Upload id does not exist!',
        })
      }

      await send(event, JSON.stringify({}), MIMES.json)

      break
    }
    case 'pre-finish': {
      consola.log('tusd/pre-finish: ' + body.Event.Upload.ID)

      await executeQuery(
        uploadUpdate({
          id: body.Event.Upload.MetaData.maevsiUploadUuid,
          storageKey: body.Event.Upload.ID,
        }),
      )

      await send(event, JSON.stringify({}), MIMES.json)

      break
    }
    case 'post-terminate': {
      consola.log('tusd/post-terminate: ' + body.Event.Upload.ID)
      await deleteUpload(event, body.Event.Upload.MetaData.maevsiUploadUuid)

      break
    }
    default:
      return throwError({
        code: 500,
        message: 'Invalid hook name header.',
      })
  }
})
