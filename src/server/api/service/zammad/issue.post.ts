export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormIssue })
  const { createTicket } = useZammad()

  await createTicket({
    body: `Description: ${body.itemDescription}\n\nName: ${body.userName || ''}\nEmail: ${body.userEmailAddress || ''}`,
    customerEmailAddress: body.userEmailAddress || 'anonymous@vibetype.app',
    title: `Bug Report: ${body.itemDescription.substring(0, 100)}`,
  })
})
