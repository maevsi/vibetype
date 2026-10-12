import type { NuxtError } from 'nuxt/app'

export type AppErrorInput = Partial<NuxtError> &
  Required<Pick<NuxtError, 'status'>> & {
    data?: { vibetype?: string }
  }

export type AppErrorCreateInput = Partial<NuxtError> &
  Required<Pick<NuxtError, 'status'>>

// `createError` differs between app and server and Nuxt allows importing neither in `shared/`, so callers pass their `createAppError` // TODO: import `createError` directly once Nuxt offers an isomorphic one for `shared/`
export type AppErrorFactory = (error: AppErrorCreateInput) => Error
