import type {
  AnyVariables,
  UseMutationResponse,
  UseQueryResponse,
} from '@urql/vue'
import { consola } from 'consola'

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
        .forEach((error) => consola.error(error))
    },
  )

  return apiData
}
