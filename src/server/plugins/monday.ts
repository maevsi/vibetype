import { consola } from 'consola'
import { ApiClient } from '@mondaydotcomorg/api'

export default defineNitroPlugin((nitroApp) => {
  const runtimeConfigMonday = useRuntimeConfig().private.monday

  if (!runtimeConfigMonday?.apiToken) {
    ;(import.meta.dev ? consola.warn : consola.error)(
      'Monday api token not set',
    )
    return
  }

  if (runtimeConfigMonday?.apiToken === DARGSTACK_SECRET_UNUSED_THIRD_PARTY) {
    consola.warn('Monday api token not set in stack as provided by third party')
    return
  }

  const board = runtimeConfigMonday?.board
  const missingFields = Object.entries({
    'board.contact.column.emailAddressId':
      board?.contact?.column?.emailAddressId,
    'board.contact.column.messageId': board?.contact?.column?.messageId,
    'board.contact.column.nameId': board?.contact?.column?.nameId,
    'board.contact.groupId': board?.contact?.groupId,
    'board.contact.id': board?.contact?.id,
    'board.earlyBird.column.agreementId': board?.earlyBird?.column?.agreementId,
    'board.earlyBird.column.emailAddressId':
      board?.earlyBird?.column?.emailAddressId,
    'board.earlyBird.column.nameId': board?.earlyBird?.column?.nameId,
    'board.earlyBird.groupId': board?.earlyBird?.groupId,
    'board.earlyBird.id': board?.earlyBird?.id,
    'board.featureRequest.column.consentId':
      board?.featureRequest?.column?.consentId,
    'board.featureRequest.column.emailAddressId':
      board?.featureRequest?.column?.emailAddressId,
    'board.featureRequest.column.featureDescriptionId':
      board?.featureRequest?.column?.featureDescriptionId,
    'board.featureRequest.column.featureNameId':
      board?.featureRequest?.column?.featureNameId,
    'board.featureRequest.column.nameId': board?.featureRequest?.column?.nameId,
    'board.featureRequest.groupId': board?.featureRequest?.groupId,
    'board.featureRequest.id': board?.featureRequest?.id,
    'board.issue.column.consentId': board?.issue?.column?.consentId,
    'board.issue.column.emailAddressId': board?.issue?.column?.emailAddressId,
    'board.issue.column.descriptionId': board?.issue?.column?.descriptionId,
    'board.issue.column.issueNameId': board?.issue?.column?.issueNameId,
    'board.issue.column.requestorId': board?.issue?.column?.requestorId,
    'board.issue.groupId': board?.issue?.groupId,
    'board.issue.id': board?.issue?.id,
    'board.report.column.accuracyConfirmationId':
      board?.report?.column?.accuracyConfirmationId,
    'board.report.column.emailAddressId': board?.report?.column?.emailAddressId,
    'board.report.column.messageId': board?.report?.column?.messageId,
    'board.report.column.nameId': board?.report?.column?.nameId,
    'board.report.column.privacyConsentId':
      board?.report?.column?.privacyConsentId,
    'board.report.groupId': board?.report?.groupId,
    'board.report.id': board?.report?.id,
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
