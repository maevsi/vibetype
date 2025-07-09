export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormEarlyBird })
  const { createItem: createMondayItem } = useMonday()

  return createMondayItem({
    board: 'earlyBird',
    columns: {
      userConsent: body.userConsent,
      userEmailAddress: body.userEmailAddress,
      userName: body.userName,
    },
  })
})
