import type { NuxtError } from 'nuxt/app'

export const throwError = (
  error: Partial<NuxtError> & Required<Pick<NuxtError, 'statusCode'>>,
) => {
  throw createError({
    ...error,
    fatal: true,
  })
}
