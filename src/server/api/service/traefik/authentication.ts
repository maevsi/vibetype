import { consola } from 'consola'
import { parse } from 'graphql'
import type { H3Event } from 'h3'
import { z } from 'zod'

import { jwtCreateMutation } from '~~/gql/documents/mutations/jwt/jwtCreate'
import { accountRegistrationMutation } from '~~/gql/documents/mutations/account/accountRegistration'

const authProxyBodySchema = z.object({
  query: z.string().optional(),
  variables: z
    .object({
      password: z.string().optional(),
      username: z.string().optional(),
    })
    .optional()
    .nullable(),
})

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    consola.debug("Skipping auth proxy as request wasn't POSTed.")
    return
  }

  const body = await getBodySafe({ event, schema: authProxyBodySchema })

  if (!body.query) {
    consola.debug("Request's body is missing a query.")
    return
  }

  const ast = parse(body.query)

  if (
    // authentication
    jwtCreateMutation.definitions.length !== 1 ||
    !jwtCreateMutation.definitions[0] ||
    !('name' in jwtCreateMutation.definitions[0]) ||
    !jwtCreateMutation.definitions[0].name ||
    // account registration
    accountRegistrationMutation.definitions.length !== 1 ||
    !accountRegistrationMutation.definitions[0] ||
    !('name' in accountRegistrationMutation.definitions[0]) ||
    !accountRegistrationMutation.definitions[0].name
  )
    return throwError({
      statusCode: 500,
      statusMessage: 'Could not get name of mutation.',
    })

  for (const definition of ast.definitions) {
    if (definition.kind !== 'OperationDefinition' || !definition.name) continue

    switch (definition.name.value) {
      case jwtCreateMutation.definitions[0].name.value:
        // don't check captcha for anonymous authentication
        if (body.variables?.password === '' && body.variables.username === '')
          return

        await turnstileVerify(event)
        break
      case accountRegistrationMutation.definitions[0].name.value:
        await turnstileVerify(event)
        break
      default:
        return
    }
  }
})

const turnstileVerify = async (event: H3Event) => {
  const turnstileToken = getRequestHeader(
    event,
    TURNSTILE_HEADER_KEY.toLowerCase(),
  )

  if (Array.isArray(turnstileToken)) {
    return throwError({
      statusCode: 422,
      statusMessage: 'Turnstile token cannot be an array.',
    })
  }

  if (!turnstileToken) {
    return throwError({
      statusCode: 422,
      statusMessage: 'Turnstile token not provided.',
    })
  }

  const result = await verifyTurnstileToken(turnstileToken)

  if (!result.success) {
    return throwError({
      statusCode: 403,
      statusMessage: `Turnstile verification unsuccessful: ${result['error-codes'].join(', ')}`,
    })
  }

  consola.debug('Turnstile verification succeeded')
}
