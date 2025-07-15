import type { H3Event } from 'h3'
import type { ZodType, infer as Infer } from 'zod'

export const getBodySafe = async <T extends ZodType>({
  event,
  schema,
}: {
  event: H3Event
  schema: T
}) => getSafe({ event, schema, validator: readValidatedBody })

export const getQuerySafe = async <T extends ZodType>({
  event,
  schema,
}: {
  event: H3Event
  schema: T
}) => getSafe({ event, schema, validator: getValidatedQuery })

const getSafe = async <T extends ZodType>({
  event,
  schema,
  validator,
}: {
  event: H3Event
  schema: T
  validator: typeof getValidatedQuery | typeof readValidatedBody
}) => {
  const validationResult = await validator(event, (data) =>
    schema.safeParse(data),
  )
  if (!validationResult.success)
    return throwError({
      data: validationResult.error.issues,
      statusCode: 400,
      statusMessage: 'Validation Error',
    })
  return validationResult.data as Infer<T>
}
