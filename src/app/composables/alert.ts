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

    console.error({ errorMessage, ...(error ? { error } : {}) })
    toast.error(t('globalError'), {
      ...(typeof options !== 'string' ? options.toastOptions || {} : {}),
      description: errorMessage,
    })
  }
}

export const useAlertErrorDetails = () => {
  const { t } = useI18n({ useScope: 'global' })
  const { copy } = useCopy()

  return ({
    errors,
    postgresErrorMap,
  }: {
    errors: Readonly<AppCombinedError[]>
    postgresErrorMap?: Record<string, string>
  }) => {
    const messages = getCombinedErrorMessages(errors, postgresErrorMap)
    const details = errors.flatMap((error) => {
      const requestId = error.response?.headers?.get('x-request-id')

      return [
        error.message,
        ...error.graphQLErrors.flatMap((graphqlError) => [
          ...(getGraphQLErrorCode(graphqlError)
            ? [`code: ${getGraphQLErrorCode(graphqlError)}`]
            : []),
          ...(graphqlError.extensions?.code
            ? [`extensions code: ${String(graphqlError.extensions.code)}`]
            : []),
        ]),
        ...(requestId ? [`request id: ${requestId}`] : []),
      ]
    })

    console.error({ errors })
    toast.error(messages.join(' ') || t('globalError'), {
      action: {
        label: t('globalErrorDetailsCopy'),
        onClick: async () => {
          if (await copy(details.join('\n'))) {
            toast.success(t('globalErrorDetailsCopySuccess'))
          }
        },
      },
    })
  }
}
