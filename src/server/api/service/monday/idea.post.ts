export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormIdea })
  const { createItem: createMondayItem } = useMonday()

  return await createMondayItem({
    board: 'idea',
    columns: {
      itemDescription: body.itemDescription,
      itemName: body.itemName || '',
      userConsent: body.userConsent,
      userEmailAddress: body.userEmailAddress || '',
      userName: body.userName || '',
    },
  })
})
