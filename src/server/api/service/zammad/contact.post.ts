export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormContact })
  const { createTicket } = useZammad()

  createTicket({
    body: `Name: ${body.name}\nEmail: ${body.emailAddress}\nConsent: ${body.consent}\n\n${body.message}`,
    customerEmailAddress: body.emailAddress,
    title: `Contact: ${body.name}`,
  })
})
