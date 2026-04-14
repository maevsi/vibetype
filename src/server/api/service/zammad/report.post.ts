export default defineEventHandler(async (event) => {
  await turnstileVerify(event)
  const body = await getBodySafe({ event, schema: schemaFormReport })
  const { createTicket } = useZammad()

  await createTicket({
    body: `Description: ${body.itemDescription}\n\nName: ${body.userName || ''}\nEmail: ${body.userEmailAddress || ''}`,
    customerEmailAddress: body.userEmailAddress || 'anonymous@vibetype.app',
    title: `Content Report: ${body.itemDescription.substring(0, 100)}`,
  })
})
