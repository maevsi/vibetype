import type { Client } from '@urql/vue'

export const jwtGet = async ({
  requestFetch,
  store,
}: {
  requestFetch: ReturnType<typeof useRequestFetch>
  store: ReturnType<typeof useStore>
}) => {
  const { jwtPayload } = await requestFetch('/api/model/jwt')
  store.jwtSet(jwtPayload)
  // no $urqlReset necessary as authorization is not expected to change
}

export const jwtDelete = async ({
  $urqlReset,
  requestFetch,
  store,
}: {
  $urqlReset: () => Client
  requestFetch: ReturnType<typeof useRequestFetch>
  store: ReturnType<typeof useStore>
}) => {
  await requestFetch('/api/model/jwt', {
    method: 'DELETE',
  })
  store.jwtSet()
  $urqlReset()
}
