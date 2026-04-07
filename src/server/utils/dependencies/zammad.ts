export const useZammad = () => {
  const event = useEvent()

  if (!event.context.$zammad)
    throw createAppError({
      status: 500,
      statusText: 'Event context is missing Zammad data',
    })

  const { apiToken, url } = event.context.$zammad

  const createTicket = async ({
    body,
    customerEmailAddress,
    title,
  }: {
    body: string
    customerEmailAddress: string
    title: string
  }) => {
    const response = await $fetch(new URL('/api/v1/tickets', url).toString(), {
      body: {
        article: {
          body,
          internal: false,
          subject: title,
          type: 'note',
        },
        customer: `guess:${customerEmailAddress}`,
        title,
      },
      headers: {
        Authorization: `Token token=${apiToken}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    return response
  }

  return {
    createTicket,
  }
}
