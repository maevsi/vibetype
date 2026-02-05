import type { Client, DocumentInput, OperationContext } from '@urql/core'
import type { H3Event, RequestHeaders } from 'h3'

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
    fetchOptions?: Partial<OperationContext>
  }
}) => {
  const headers = getRequestHeaders(event)

  return await event.context.$urql.value
    .mutation(urql.mutation, urql.variables, {
      fetchOptions: {
        headers: toHeadersInit({
          cookie: headers.cookie,
          [CSRF_HEADER_NAME]: headers[CSRF_HEADER_NAME],
          'x-turnstile-key': headers['x-turnstile-key'],
        }),
        ...urql.fetchOptions,
      },
    })
    .toPromise()
}

export function toHeadersInit(requestHeaders: RequestHeaders): Headers {
  const headers = new Headers()

  for (const [key, value] of Object.entries(requestHeaders)) {
    if (Array.isArray(value)) {
      headers.set(key, value.join(', '))
    } else if (typeof value === 'string') {
      headers.set(key, value)
    }
  }

  return headers
}
