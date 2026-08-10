export default defineEventHandler(async (event) => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()

  const jwt = getJwtFromCookie()
  const jwtPayload = await verifyJwt<Jwt>(jwt)

  if (!(jwtPayload?.role === `${SITE_NAME}_account`))
    throw createAppError({
      status: 403,
      statusText: 'This endpoint is only available to registered users.',
    })

  const body = await getBodySafe({
    event,
    schema: schemaEventOutput,
  })
  const { createTicket } = useZammad()

  const ticketBody = [
    body.name && `Name: ${body.name}`,
    body.description && `Description: ${body.description}`,
    body.start && `Start: ${body.start}`,
    body.end && `End: ${body.end}`,
    body.location && `Location: ${body.location}`,
    body.url && `URL: ${body.url}`,
    `Is event: ${body.is_event}`,
    '',
    `Username: ${jwtPayload.username}`,
  ]
    .filter(Boolean)
    .join('\n')

  await createTicket({
    body: ticketBody,
    customerEmailAddress: `${jwtPayload.username}@vibetype.app`,
    title: `Event Ingest URL: ${(body.name ?? body.url ?? 'unknown').substring(0, 100)}`,
  })
})
