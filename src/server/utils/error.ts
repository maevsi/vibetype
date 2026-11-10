import { createError } from 'nuxt/server'

import type { AppErrorFactory } from '~~/shared/utils/error'

// nitro logs fatal errors with their stack and strips their message and data from the response, which only server errors warrant
export const createAppError: AppErrorFactory = (error) =>
  createError({
    ...error,
    fatal: error.status >= 500,
  })
