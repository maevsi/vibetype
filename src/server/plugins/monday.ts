import { ApiClient } from '@mondaydotcomorg/api'
import { consola } from 'consola'

export default defineNitroPlugin((nitroApp) => {
  const runtimeConfigMonday = useRuntimeConfig().private.monday

  if (!runtimeConfigMonday.apiToken) {
    ;(import.meta.dev ? consola.warn : consola.error)(
      'Monday api token not set',
    )
    return
  }

  if (runtimeConfigMonday.apiToken === DARGSTACK_SECRET_UNUSED_THIRD_PARTY) {
    consola.warn('Monday api token not set in stack as provided by third party')
    return
  }

  const board = runtimeConfigMonday.board
  const missingFields = Object.entries({
    'board.contact.column.itemDescriptionId':
      board.contact.column.itemDescriptionId,
    'board.contact.column.userConsentId': board.contact.column.userConsentId,
    'board.contact.column.userEmailAddressId':
      board.contact.column.userEmailAddressId,
    'board.contact.column.userNameId': board.contact.column.userNameId,
    'board.contact.groupId': board.contact.groupId,
    'board.contact.id': board.contact.id,
    'board.earlyBird.column.userConsentId':
      board.earlyBird.column.userConsentId,
    'board.earlyBird.column.userEmailAddressId':
      board.earlyBird.column.userEmailAddressId,
    'board.earlyBird.column.userNameId': board.earlyBird.column.userNameId,
    'board.earlyBird.groupId': board.earlyBird.groupId,
    'board.earlyBird.id': board.earlyBird.id,
    'board.idea.column.itemDescriptionId': board.idea.column.itemDescriptionId,
    'board.idea.column.itemNameId': board.idea.column.itemNameId,
    'board.idea.column.itemUploadsId': board.idea.column.itemUploadsId,
    'board.idea.column.userConsentId': board.idea.column.userConsentId,
    'board.idea.column.userEmailAddressId':
      board.idea.column.userEmailAddressId,
    'board.idea.column.userNameId': board.idea.column.userNameId,
    'board.idea.groupId': board.idea.groupId,
    'board.idea.id': board.idea.id,
    'board.issue.column.itemDescriptionId':
      board.issue.column.itemDescriptionId,
    'board.issue.column.itemNameId': board.issue.column.itemNameId,
    'board.issue.column.itemUploadsId': board.issue.column.itemUploadsId,
    'board.issue.column.userConsentId': board.issue.column.userConsentId,
    'board.issue.column.userEmailAddressId':
      board.issue.column.userEmailAddressId,
    'board.issue.column.userNameId': board.issue.column.userNameId,
    'board.issue.groupId': board.issue.groupId,
    'board.issue.id': board.issue.id,
    'board.report.column.itemDescriptionId':
      board.report.column.itemDescriptionId,
    'board.report.column.userConsentAccuracyId':
      board.report.column.userConsentAccuracyId,
    'board.report.column.userConsentProcessingId':
      board.report.column.userConsentProcessingId,
    'board.report.column.userEmailAddressId':
      board.report.column.userEmailAddressId,
    'board.report.column.userNameId': board.report.column.userNameId,
    'board.report.groupId': board.report.groupId,
    'board.report.id': board.report.id,
  })
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (missingFields.length) {
    ;(import.meta.dev ? consola.warn : consola.error)(
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
