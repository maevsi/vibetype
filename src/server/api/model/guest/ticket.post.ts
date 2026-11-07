import { z } from 'zod'

// The client sends texts it already localized. They grant nothing, as the
// check in validates the QR code's guest id against the database.
const ticketPostBodySchema = z.object({
  details: z
    .array(
      z.object({
        label: z.string().max(50),
        value: z.string().max(300),
      }),
    )
    .max(6),
  fileName: z.string().max(200),
  guestId: z.uuid(),
  hint: z.string().max(200),
  title: z.string().max(200),
})

export default defineEventHandler(async (h3Event) => {
  const { fileName, ...ticket } = await getBodySafe({
    event: h3Event,
    schema: ticketPostBodySchema,
  })

  setResponseHeaders(h3Event, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}`,
  })

  return Buffer.from(await getTicketPdf(ticket))
})
