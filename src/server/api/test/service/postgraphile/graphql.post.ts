export default defineEventHandler(async (event) => {
  const { operationName, variables } = await readBody(event)

  return await getTestingGraphqlResult({ operationName, variables })
})
