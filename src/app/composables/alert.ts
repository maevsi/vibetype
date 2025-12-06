import { consola } from 'consola'

export const useAlertError = () => {
  const { t } = useI18n({ useScope: 'global' })

  return (
    options:
      | string
      | {
          error?: Error
          messageI18n: string
          toastOptions?: Parameters<typeof toast>[1]
        },
  ) => {
    const error =
      typeof options === 'string' ? new Error(options) : options.error
    const errorMessage =
      typeof options === 'string' ? options : options.messageI18n

    consola.error({ errorMessage, ...(error ? { error } : {}) })
    toast.error(t('globalError'), {
      ...(typeof options !== 'string' ? options.toastOptions || {} : {}),
      description: errorMessage,
    })
  }
}
