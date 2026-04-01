import { createError } from 'h3'
import type { NuxtError } from 'nuxt/app'

export const createAppError = (
  error: Partial<NuxtError> & Required<Pick<NuxtError, 'status'>>,
) =>
  createError({
    ...error,
    fatal: true,
  })
