import type { CombinedError } from '@urql/core'
import { consola } from 'consola'

export const getApiData = <
  S,
  T extends {
    data: Ref<S>
    error: Ref<CombinedError | undefined>
    fetching: Ref<boolean>
  },
>(
  queries?: Array<T | undefined>,
) => {
  const queriesSafe = queries ?? []
  const apiData = computed(() =>
    readonly({
      data: queriesSafe.reduce(
        (p, c) => ({ ...p, ...c?.data.value }),
        {} as NonNullable<
          UnionToIntersection<NonNullable<ArrayElement<T[]>['data']['value']>>
        >,
      ),
      errors: queriesSafe.flatMap((query) =>
        query?.error.value ? [query.error.value as BackendError] : [],
      ),
      isFetching: queriesSafe.some((query) => query?.fetching.value),
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
