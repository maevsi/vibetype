import type { OperationResult } from '@urql/core'
import type { AnyVariables } from '@urql/vue'

export const useMutationConfirmation = () => {
  const { t } = useI18n({ useScope: 'global' })
  const error = ref<Error>()

  const confirm = async <S, V extends AnyVariables = AnyVariables>(
    mutation: Promise<OperationResult<S, V>>,
  ) => {
    const result = await mutation

    if (!getResultData(result)) {
      error.value = result.error ?? new Error(t('globalErrorNoData'))
      return
    }

    return result
  }
  const restart = () => {
    error.value = undefined
  }

  return { confirm, error, restart }
}
