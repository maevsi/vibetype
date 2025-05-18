export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormContact })

  const { createItem: createMondayItem } = useMonday()
  return createMondayItem({
    board: 'contact',
    columns: {
      consent: body.consent,
      emailAddress: body.emailAddress,
      name: body.name,
      message: body.message,
    },
  })
})
