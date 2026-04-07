export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: schemaFormEarlyBird })
  const { createTicket } = useZammad()

  createTicket({
    body: `Name: ${body.name}\nEmail: ${body.emailAddress}\nAgreement: ${body.agreement}`,
    customerEmailAddress: body.emailAddress,
    title: `Early Bird: ${body.name}`,
  })
})
