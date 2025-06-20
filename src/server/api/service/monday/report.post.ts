export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormReport })

  const { createItem: createMondayItem } = useMonday()

  return createMondayItem({
    board: 'report',
    columns: {
      emailAddress: body.emailAddress || '',
      message: body.message,
      privacyConsent: body.privacyConsent,
      accuracyConfirmation: body.accuracyConfirmation,
      reportName: body.name,
    },
  })
})
