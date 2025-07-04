export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormIssue })

  const { createItem: createMondayItem } = useMonday()
  return createMondayItem({
    board: 'issue',
    columns: {
      consent: body.consent,
      description: body.description,
      email: body.email || '',
      issueName: body.issueName,
      requestor: body.requestor || '',
    },
  })
})
