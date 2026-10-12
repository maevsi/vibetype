import { createError } from 'nuxt/server'

import type { AppErrorFactory } from '~~/shared/utils/error'

export const createAppError: AppErrorFactory = (error) =>
  createError({
    ...error,
    fatal: true,
  })
