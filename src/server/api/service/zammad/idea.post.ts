export default defineEventHandler(async (event) => {
  // await turnstileVerify(event)
  const body = await getBodySafe({ event, schema: schemaFormIdea })
  const { createTicket } = useZammad()

  await createTicket({
    body: `Description: ${body.itemDescription}\n\nName: ${body.userName || ''}\nEmail: ${body.userEmailAddress || ''}`,
    customerEmailAddress: body.userEmailAddress || 'anonymous@vibetype.app',
    title: `Feature Request: ${body.itemDescription.substring(0, 100)}`,
  })
})
