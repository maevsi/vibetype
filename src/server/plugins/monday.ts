import { ApiClient } from '@mondaydotcomorg/api'

export default defineNitroPlugin((nitroApp) => {
  const runtimeConfigMonday = useRuntimeConfig().vibetype.monday

  if (!runtimeConfigMonday.apiToken) {
    ;(import.meta.dev ? console.warn : console.error)(
      'Monday api token not set',
    )
    return
  }

  if (runtimeConfigMonday.apiToken === DARGSTACK_SECRET_UNUSED_THIRD_PARTY) {
    console.warn('Monday api token not set in stack as provided by third party')
    return
  }

  const board = runtimeConfigMonday.board
  const missingFields = Object.entries({
    'board.contact.column.emailAddressId': board.contact.column.emailAddressId,
    'board.contact.column.messageId': board.contact.column.messageId,
    'board.contact.column.nameId': board.contact.column.nameId,
    'board.contact.id': board.contact.id,
    'board.contact.groupId': board.contact.groupId,
    'board.earlyBird.column.agreementId': board.earlyBird.column.agreementId,
    'board.earlyBird.column.emailAddressId':
      board.earlyBird.column.emailAddressId,
    'board.earlyBird.column.nameId': board.earlyBird.column.nameId,
    'board.earlyBird.id': board.earlyBird.id,
    'board.earlyBird.groupId': board.earlyBird.groupId,
  })
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (missingFields.length) {
    ;(import.meta.dev ? console.warn : console.error)(
      `Missing Monday board config values: ${missingFields.join(', ')}`,
    )
    return
  }

  const monday = new ApiClient({
    token: runtimeConfigMonday.apiToken,
  })

  nitroApp.hooks.hook('request', (event) => {
    event.context.$monday = monday
  })
})

declare module 'h3' {
  interface H3EventContext {
    $monday?: ApiClient
  }
}
