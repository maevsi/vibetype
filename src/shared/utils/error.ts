import { createError } from 'h3'
import type { NuxtError } from 'nuxt/app'

export type AppErrorInput = Partial<NuxtError> &
  Required<Pick<NuxtError, 'status'>> & {
    data?: { vibetype?: string }
  }

export const createAppError = (
  error: Partial<NuxtError> & Required<Pick<NuxtError, 'status'>>,
) =>
  createError({
    ...error,
    fatal: true,
  })
