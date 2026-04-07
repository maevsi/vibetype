export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormEarlyBird })
  const { createTicket } = useZammad()

  await createTicket({
    body: `Name: ${body.userName}\nEmail: ${body.userEmailAddress}`,
    customerEmailAddress: body.userEmailAddress,
    title: `Early Bird: ${body.userName}`,
  })
})
