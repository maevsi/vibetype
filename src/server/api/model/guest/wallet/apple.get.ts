import { z } from 'zod'

const walletAppleQuerySchema = z.object({
  guestId: z.uuid(),
})

export default defineEventHandler(async (event) => {
  const config = getWalletConfigApple()

  if (!config) {
    throw createAppError({
      status: 503,
      statusText: 'Apple Wallet unconfigured',
    })
  }

  const { guestId } = await getQuerySafe({
    event,
    schema: walletAppleQuerySchema,
  })
  const ticket = await getWalletTicket({ event, guestId })
  const icon = await useStorage('assets:favicon').getItemRaw<Buffer>(
    'apple-touch-icon-180x180.png',
  )

  if (!icon) {
    throw createAppError({ status: 500, statusText: 'Wallet icon missing' })
  }

  setResponseHeaders(event, {
    'Cache-Control': 'no-store',
    'Content-Disposition': `inline; filename="${ticket.guestId}.pkpass"`,
    'Content-Type': 'application/vnd.apple.pkpass',
  })

  return getWalletPassApple({ config, icon, ticket }).getAsBuffer()
})
