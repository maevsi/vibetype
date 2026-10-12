import type { NuxtError } from 'nuxt/app'

export type AppErrorInput = Partial<NuxtError> &
  Required<Pick<NuxtError, 'status'>> & {
    data?: { vibetype?: string }
  }

export type AppErrorCreateInput = Partial<NuxtError> &
  Required<Pick<NuxtError, 'status'>>

// `createError` differs between app and server and `shared/` may import neither (https://nuxt.com/docs/directory-structure/shared), so callers pass their `createAppError`
export type AppErrorFactory = (error: AppErrorCreateInput) => Error
