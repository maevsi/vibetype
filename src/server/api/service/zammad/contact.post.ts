export default defineEventHandler(async (event) => {
  await turnstileVerify(event)
  const body = await getBodySafe({ event, schema: schemaFormContact })
  const { createTicket } = useZammad()

  await createTicket({
    body: `Message: ${body.itemDescription}\n\nName: ${body.userName || ''}\nEmail: ${body.userEmailAddress}`,
    customerEmailAddress: body.userEmailAddress,
    title: `Contact: ${body.userName || body.userEmailAddress}`,
  })
})
