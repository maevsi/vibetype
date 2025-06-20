export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormIssue })

  const { createItem: createMondayItem } = useMonday()
  return createMondayItem({
    board: 'issue',
    columns: {
      consent: body.consent,
      email: body.email,
      requestor: body.requestor,
      issueName: body.issueName,
      description: body.description,
    },
  })
})
