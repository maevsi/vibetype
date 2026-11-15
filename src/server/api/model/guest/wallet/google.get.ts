import { z } from 'zod'

const walletGoogleQuerySchema = z.object({
  guestId: z.uuid(),
})

export default defineEventHandler(async (event) => {
  const config = getWalletConfigGoogle()

  if (!config) {
    throw createAppError({
      status: 503,
      statusText: 'Google Wallet unconfigured',
    })
  }

  const { guestId } = await getQuerySafe({
    event,
    schema: walletGoogleQuerySchema,
  })
  const ticket = await getWalletTicket({ event, guestId })

  setResponseHeader(event, 'Cache-Control', 'no-store')

  return sendRedirect(event, await getWalletSaveUrlGoogle({ config, ticket }))
})
