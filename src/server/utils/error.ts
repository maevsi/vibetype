import type { NuxtError } from 'nuxt/app'

export const throwError = (
  error: Partial<NuxtError> & Required<Pick<NuxtError, 'statusCode'>>,
) => {
  console.error(error)
  throw createError({
    ...error,
    fatal: true,
  })
}
