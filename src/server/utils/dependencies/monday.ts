import { consola } from 'consola'
import type { MultiPartData } from 'h3'

export const useMonday = () => {
  const event = useEvent()
  const runtimeConfig = useRuntimeConfig(event)

  if (!event.context.$monday) throw createError('monday')

  const client = event.context.$monday
  const queries = {
    itemCreate: `
      mutation ($boardId: ID!, $columnValues: JSON!, $groupId: String!, $itemName: String!) {
        create_item (
          board_id: $boardId,
          column_values: $columnValues
          group_id: $groupId,
          item_name: $itemName,
        ) {
          id
          name
        }
      }`,
  }
  const createItem = async ({
    board,
    columns,
  }:
    | {
        board: 'contact'
        columns: {
          consent: boolean
          emailAddress: string
          name: string
          message: string
        }
      }
    | {
        board: 'earlyBird'
        columns: {
          agreement: boolean
          emailAddress: string
          name: string
        }
      }
    | {
        board: 'featureRequest'
        columns: {
          consent: boolean
          emailAddress: string
          featureDescription: string
          featureName: string
          name: string
        }
      }
    | {
        board: 'issue'
        columns: {
          consent: boolean
          description: string
          email: string
          issueName: string
          requestor: string
        }
      }
    | {
        board: 'report'
        columns: {
          accuracyConfirmation: boolean
          emailAddress: string
          message: string
          privacyConsent: boolean
          reportName: string
        }
      }): Promise<{ id: string; name: string }> => {
    const runtimeConfigBoard = runtimeConfig.private.monday.board

    switch (board) {
      case 'contact': {
        const boardContact = runtimeConfigBoard.contact

        return await client.request(queries.itemCreate, {
          boardId: boardContact.id,
          columnValues: JSON.stringify({
            [boardContact.column.consentId]: {
              checked: columns.consent.toString(),
            },
            [boardContact.column.emailAddressId]: {
              email: columns.emailAddress,
              text: columns.emailAddress,
            },
            [boardContact.column.nameId]: columns.name,
            [boardContact.column.messageId]: columns.message,
          }),
          groupId: boardContact.groupId,
          itemName: new Date().toISOString(),
        })
      }
      case 'earlyBird': {
        const boardEarlyBird = runtimeConfigBoard.earlyBird

        return await client.request(queries.itemCreate, {
          boardId: boardEarlyBird.id,
          columnValues: JSON.stringify({
            [boardEarlyBird.column.agreementId]: {
              checked: columns.agreement.toString(),
            },
            [boardEarlyBird.column.emailAddressId]: {
              email: columns.emailAddress,
              text: columns.emailAddress,
            },
            [boardEarlyBird.column.nameId]: columns.name,
          }),
          groupId: boardEarlyBird.groupId,
          itemName: new Date().toISOString(),
        })
      }
      case 'featureRequest': {
        const boardFeatureRequest = runtimeConfigBoard.featureRequest

        return await client.request(queries.itemCreate, {
          boardId: boardFeatureRequest.id,
          columnValues: JSON.stringify({
            [boardFeatureRequest.column.consentId]: {
              checked: columns.consent.toString(),
            },
            [boardFeatureRequest.column.emailAddressId]: {
              email: columns.emailAddress,
              text: columns.emailAddress,
            },
            [boardFeatureRequest.column.featureDescriptionId]:
              columns.featureDescription,
            [boardFeatureRequest.column.nameId]: columns.name,
          }),
          groupId: boardFeatureRequest.groupId,
          itemName: columns.featureName,
        })
      }
      case 'issue': {
        const boardIssue = runtimeConfigBoard.issue

        return await client.request(queries.itemCreate, {
          boardId: boardIssue.id,
          columnValues: JSON.stringify({
            [boardIssue.column.consentId]: {
              checked: columns.consent.toString(),
            },
            [boardIssue.column.descriptionId]: columns.description,
            [boardIssue.column.emailAddressId]: {
              email: columns.email,
              text: columns.email,
            },
            [boardIssue.column.requestorId]: columns.requestor,
          }),
          groupId: boardIssue.groupId,
          itemName: columns.issueName,
        })
      }
      case 'report': {
        const boardReport = runtimeConfigBoard.report

        return await client.request(queries.itemCreate, {
          boardId: boardReport.id,
          columnValues: JSON.stringify({
            [boardReport.column.accuracyConfirmationId]: {
              checked: columns.accuracyConfirmation.toString(),
            },
            [boardReport.column.emailAddressId]: {
              email: columns.emailAddress,
              text: columns.emailAddress,
            },
            [boardReport.column.messageId]: columns.message,
            [boardReport.column.privacyConsentId]: {
              checked: columns.privacyConsent.toString(),
            },
          }),
          groupId: boardReport.groupId,
          itemName: columns.reportName,
        })
      }
      default:
        consola.error('Unexpected Monday board')
        throw createError({
          statusCode: 500,
          statusMessage: 'Unexpected Monday board',
        })
    }
  }

  const uploadFile = async ({
    itemId,
    columnId,
    file,
  }: {
    itemId: string
    columnId: string
    file: MultiPartData
  }) => {
    const formData = new FormData()

    formData.append(
      'query',
      `
        mutation ($file: File!, $item_id: ID!, $column_id: String!) {
          add_file_to_column (
            file: $file,
            item_id: $item_id,
            column_id: $column_id
          ) {
            id
          }
        }`,
    )
    formData.append(
      'variables',
      JSON.stringify({
        item_id: itemId,
        column_id: columnId,
      }),
    )
    formData.append('map', '{"file":"variables.file"}')
    formData.append('file', new Blob([file.data]), file.filename || 'file')

    const response = await $fetch('https://api.monday.com/v2/file', {
      method: 'POST',
      headers: {
        Authorization: runtimeConfig.private.monday.apiToken,
      },
      body: formData,
    })

    return response
  }

  return {
    client,
    createItem,
    uploadFile,
  }
}
