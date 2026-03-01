import type { Client, DocumentInput } from '@urql/core'
import type { H3Event, RequestHeaders } from 'h3'
import { getRequestHeaders } from 'h3'

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
  const headers = getRequestHeaders(event)
  const cookieHeaderValue = headers.cookie
  const csrfHeaderValue = headers[CSRF_HEADER_NAME]
  const turnstileHeaderValue = headers[TURNSTILE_HEADER_NAME]

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
