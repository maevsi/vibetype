export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormContact })
  const { createItem: createMondayItem } = useMonday()

  return createMondayItem({
    board: 'contact',
    columns: {
      itemDescription: body.itemDescription,
      userConsent: body.userConsent,
      userEmailAddress: body.userEmailAddress,
      userName: body.userName || '',
    },
  })
})
