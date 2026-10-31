export default defineEventHandler(async (event) => {
  const { operationName } = getQuery(event)

  return await getTestingGraphqlResult({ operationName })
})
