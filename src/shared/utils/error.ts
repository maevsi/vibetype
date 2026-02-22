import { createError } from 'h3'
import type { NuxtError } from 'nuxt/app'

export const throwError = (
  error: Partial<NuxtError> & Required<Pick<NuxtError, 'status'>>,
) => {
  throw createError({
    ...error,
    fatal: true,
  })
}
