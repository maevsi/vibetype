export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormEarlyBird })
  const { createItem: createMondayItem } = useMonday()

  return createMondayItem({
    board: 'earlyBird',
    columns: {
      agreement: body.agreement,
      emailAddress: body.emailAddress,
      name: body.name,
    },
  })
})
