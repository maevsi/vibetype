import { consola } from 'consola'
import type { NuxtError } from 'nuxt/app'

export const throwError = (
  error: Partial<NuxtError> & Required<Pick<NuxtError, 'statusCode'>>,
) => {
  consola.error(error)
  throw createError({
    ...error,
    fatal: true,
  })
}
