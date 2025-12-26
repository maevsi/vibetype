import type { OperationResult } from '@urql/core'
import type {
  AnyVariables,
  UseMutationResponse,
  UseQueryResponse,
} from '@urql/vue'

// TODO: account for errors in page setups
export const useApiData = async <
  T extends UseMutationResponse<S, V> | UseQueryResponse<S, V>,
  S,
  V extends AnyVariables = AnyVariables,
>(
  queriesInput: T[] = [],
) => {
  const queries = import.meta.server
    ? await Promise.all(queriesInput)
    : queriesInput

  const apiData = computed(() =>
    readonly({
      data: queries.reduce(
        (p, c) => (c.data.value ? { ...p, ...c.data.value } : p),
        {} as NonNullable<UnionToIntersection<NonNullable<T['data']['value']>>>,
      ),
      errors: queries.flatMap((query) =>
        query.error.value ? [query.error.value] : [],
      ),
      isFetching: queries.some((query) => query.fetching.value),
    }),
  )

  watch(
    () => apiData.value.errors,
    (current, previous) => {
      current
        .filter((error) => !previous.includes(error))
        .forEach((error) => console.error(error))
    },
  )

  return apiData
}

export const useExecuteUrqlRequest = () =>
  // api: Awaited<ReturnType<typeof useApiData>>,
  {
    const { t } = useI18n({ useScope: 'global' })
    const alertError = useAlertError()

    //   // TODO: details
    //   // const apiErrorMessages = computed(() =>
    //   //   getCombinedErrorMessages(api.value.errors),
    //   // )
    //   // apiErrorMessages.value.join('\n'),

    return async <S, V extends AnyVariables = AnyVariables>({
      errorMessageI18n,
      progress,
      request,
    }: {
      errorMessageI18n: string
      progress?: {
        id: string
        idArray: string[]
      } // TODO: evaluate turning this non-optional
      request: Promise<OperationResult<S, V>>
    }) => {
      if (progress) progress.idArray.push(progress.id)

      const result = await request

      if (progress)
        progress.idArray.splice(progress.idArray.indexOf(progress.id), 1)

      if (result.error) {
        alertError({
          error: result.error,
          messageI18n: errorMessageI18n,
        })
        return
      }

      if (!result.data) {
        alertError(t('globalErrorNoData'))
        return
      }

      return result
    }
  }
