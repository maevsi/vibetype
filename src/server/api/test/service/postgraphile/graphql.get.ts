export default defineEventHandler(async (event) => {
  const { operationName, variables } = getQuery(event)

  return await getTestingGraphqlResult({
    operationName,
    variables:
      typeof variables === 'string' ? JSON.parse(variables) : undefined,
  })
})
