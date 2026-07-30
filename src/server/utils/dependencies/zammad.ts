const getZammadConfig = () => {
  const runtimeConfigZammad = useRuntimeConfig().vibetype.zammad

  if (!runtimeConfigZammad.apiToken) {
    ;(import.meta.dev ? console.warn : console.error)(
      'Zammad api token not set',
    )
    return
  }

  if (runtimeConfigZammad.apiToken === DARGSTACK_SECRET_UNUSED_THIRD_PARTY) {
    console.warn('Zammad api token not set in stack as provided by third party')
    return
  }

  if (!runtimeConfigZammad.url) {
    ;(import.meta.dev ? console.warn : console.error)('Zammad url not set')
    return
  }

  return {
    apiToken: runtimeConfigZammad.apiToken,
    url: runtimeConfigZammad.url,
  }
}

export const zammadConfig = getZammadConfig()

export const useZammad = () => {
  const runtimeConfig = useRuntimeConfig()

  if (!zammadConfig)
    throw createAppError({
      status: 500,
      statusText: 'Zammad uninitialized',
    })

  const { apiToken, url } = zammadConfig

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
        customer_id: `guess:${customerEmailAddress}`,
        group_id: runtimeConfig.vibetype.zammad.groupId,
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
