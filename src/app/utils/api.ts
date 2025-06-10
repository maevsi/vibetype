import { consola } from 'consola'

export const getApiData = <
  S,
  T extends {
    data: Ref<S>
    error: Ref<BackendError | undefined>
    fetching: Ref<boolean>
  },
>(
  queries: T[] = [],
) => {
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
