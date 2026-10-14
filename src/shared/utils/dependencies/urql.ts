import type { Client, DocumentInput } from '@urql/core'
import type { H3Event } from 'h3'

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
}) => {
  const headers = event.headers
  const cookieHeaderValue = headers.get('cookie')
  const csrfHeaderValue = headers.get(CSRF_HEADER_NAME)
  const turnstileHeaderValue = headers.get(TURNSTILE_HEADER_NAME)

  return await event.context.$urql.value
    .mutation(urql.mutation, urql.variables, {
      fetchOptions: () => ({
        headers: {
          ...(cookieHeaderValue ? { cookie: cookieHeaderValue } : {}),
          ...(csrfHeaderValue ? { [CSRF_HEADER_NAME]: csrfHeaderValue } : {}),
          ...(turnstileHeaderValue
            ? { [TURNSTILE_HEADER_NAME]: turnstileHeaderValue }
            : {}),
        },
      }),
    })
    .toPromise()
}
