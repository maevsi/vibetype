import { parse } from 'graphql'
import { z } from 'zod'

import { jwtCreateMutation } from '~~/server/api/model/jwt.post'
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
    console.debug("Skipping auth proxy as request wasn't POSTed.")
    return
  }

  const body = await getBodySafe({ event, schema: authProxyBodySchema })

  if (!body.query) {
    console.debug("Request's body is missing a query.")
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
    throw createAppError({
      status: 500,
      statusText: 'Could not get name of mutation.',
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
