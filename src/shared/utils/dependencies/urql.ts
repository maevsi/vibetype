import type { Client, DocumentInput } from '@urql/core'
import type { H3Event } from 'h3'

// forwards the caller's cookie (and with it the JWT) so Postgraphile's row
// level security sees the same rows the caller could query itself
const getForwardedFetchOptions = (event: H3Event) => {
  const headers = event.headers
  const cookieHeaderValue = headers.get('cookie')
  const csrfHeaderValue = headers.get(CSRF_HEADER_NAME)
  const turnstileHeaderValue = headers.get(TURNSTILE_HEADER_NAME)

  return () => ({
    headers: {
      ...(cookieHeaderValue ? { cookie: cookieHeaderValue } : {}),
      ...(csrfHeaderValue ? { [CSRF_HEADER_NAME]: csrfHeaderValue } : {}),
      ...(turnstileHeaderValue
        ? { [TURNSTILE_HEADER_NAME]: turnstileHeaderValue }
        : {}),
    },
  })
}

export const urqlMutate = async <
  Data,
  Variables extends Parameters<Client['mutation']>[1],
>({
  event,
  urql,
}: {
  event: H3Event
  urql: {
    mutation: DocumentInput<Data, Variables>
    variables: Variables
  }
}) =>
  await event.context.$urql.value
    .mutation(urql.mutation, urql.variables, {
      fetchOptions: getForwardedFetchOptions(event),
    })
    .toPromise()

export const urqlQuery = async <
  Data,
  Variables extends Parameters<Client['query']>[1],
>({
  event,
  urql,
}: {
  event: H3Event
  urql: {
    query: DocumentInput<Data, Variables>
    variables: Variables
  }
}) =>
  await event.context.$urql.value
    .query(urql.query, urql.variables, {
      fetchOptions: getForwardedFetchOptions(event),
      requestPolicy: 'network-only',
    })
    .toPromise()
