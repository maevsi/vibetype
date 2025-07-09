export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormReport })
  const { createItem: createMondayItem } = useMonday()

  return createMondayItem({
    board: 'report',
    columns: {
      itemDescription: body.itemDescription,
      userConsentAccuracy: body.userConsentAccuracy,
      userConsentProcessing: body.userConsentProcessing,
      userEmailAddress: body.userEmailAddress || '',
      userName: body.userName || '',
    },
  })
})
