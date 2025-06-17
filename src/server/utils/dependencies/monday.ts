import { consola } from 'consola'
import { fileUpload } from '~~/gql/documents/mutations/monday/mondayFileUpload'
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
          name: string
          featureName: string
          featureDescription: string
        }
      }
    | {
        board: 'issue'
        columns: {
          consent: boolean
          email: string
          requestor: string
          issueName: string
          description: string
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
            [boardEarlyBird.column.aggreementId]: {
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
            [boardFeatureRequest.column.nameId]: columns.name,
            [boardFeatureRequest.column.featureDescriptionId]:
              columns.featureDescription,
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
            [boardIssue.column.emailId]: {
              email: columns.email,
              text: columns.email,
            },
            [boardIssue.column.requestorId]: columns.requestor,
            [boardIssue.column.descriptionId]: columns.description,
          }),
          groupId: boardIssue.groupId,
          itemName: columns.issueName,
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

    formData.append('query', fileUpload)
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
