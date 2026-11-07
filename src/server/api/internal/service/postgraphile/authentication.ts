import { BREAK, parse, visit } from 'graphql'
import { z } from 'zod'

import { jwtCreateMutation } from '~~/server/api/model/jwt.post'
import { accountRegistrationMutation } from '~~/shared/utils/account'

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

// the root fields, not the operation name, which the client picks freely
const PROTECTED_FIELD_NAMES = new Set(
  [jwtCreateMutation, accountRegistrationMutation].map((document) => {
    const definition = document.definitions[0]

    if (
      document.definitions.length !== 1 ||
      definition?.kind !== 'OperationDefinition' ||
      definition.selectionSet.selections.length !== 1 ||
      definition.selectionSet.selections[0]?.kind !== 'Field'
    )
      throw createAppError({
        status: 500,
        statusText: 'Could not get root field of mutation.',
      })

    return definition.selectionSet.selections[0].name.value
  }),
)

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

  // any field with a protected name counts, wherever it sits, so aliases, fragments and multiple operations can't hide it
  let isProtected = false
  visit(parse(body.query), {
    Field: (node) => {
      if (!PROTECTED_FIELD_NAMES.has(node.name.value)) return
      isProtected = true
      return BREAK
    },
  })

  if (isProtected) await turnstileVerify(event)
})
