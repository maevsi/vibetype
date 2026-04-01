import type { NuxtError } from 'nuxt/app'

export const useA11yError = () => {
  const { assertive } = useAnnouncer()
  const { t } = useI18n({ useScope: 'global' })

  return {
    createA11yError: (
      error: Omit<Partial<NuxtError>, 'fatal'> &
        Required<Pick<NuxtError, 'status'>>,
    ) => {
      assertive(error.message || t('globalErrorMessage'))
      return createAppError(error)
    },
  }
}
