import { consola } from 'consola'
import type { MultiPartData } from 'h3'

export const useMonday = () => {
  const event = useEvent()
  const runtimeConfig = useRuntimeConfig(event)

  if (!event.context.$monday)
    return throwError({
      statusCode: 500,
      statusMessage: 'Event context is missing Monday data',
    })

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
          itemDescription: string
          userConsent: boolean
          userEmailAddress: string
          userName: string
        }
      }
    | {
        board: 'earlyBird'
        columns: {
          userConsent: boolean
          userEmailAddress: string
          userName: string
        }
      }
    | {
        board: 'idea'
        columns: {
          itemDescription: string
          itemName: string
          userConsent: boolean
          userEmailAddress: string
          userName: string
        }
      }
    | {
        board: 'issue'
        columns: {
          itemDescription: string
          itemName: string
          userConsent: boolean
          userEmailAddress: string
          userName: string
        }
      }
    | {
        board: 'report'
        columns: {
          itemDescription: string
          userConsentAccuracy: boolean
          userConsentProcessing: boolean
          userEmailAddress: string
          userName: string
        }
      }): Promise<{ id: string; name: string } | undefined> => {
    const runtimeConfigBoard = runtimeConfig.private.monday.board

    switch (board) {
      case 'contact': {
        const boardContact = runtimeConfigBoard.contact

        return await client.request(queries.itemCreate, {
          boardId: boardContact.id,
          columnValues: JSON.stringify({
            [boardContact.column.itemDescriptionId]: columns.itemDescription,
            [boardContact.column.userConsentId]: {
              checked: columns.userConsent.toString(),
            },
            [boardContact.column.userEmailAddressId]: {
              email: columns.userEmailAddress,
              text: columns.userEmailAddress,
            },
            [boardContact.column.userNameId]: columns.userName,
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
            [boardEarlyBird.column.userConsentId]: {
              checked: columns.userConsent.toString(),
            },
            [boardEarlyBird.column.userEmailAddressId]: {
              email: columns.userEmailAddress,
              text: columns.userEmailAddress,
            },
            [boardEarlyBird.column.userNameId]: columns.userName,
          }),
          groupId: boardEarlyBird.groupId,
          itemName: new Date().toISOString(),
        })
      }
      case 'idea': {
        const boardIdea = runtimeConfigBoard.idea

        return await client.request(queries.itemCreate, {
          boardId: boardIdea.id,
          columnValues: JSON.stringify({
            [boardIdea.column.itemDescriptionId]: columns.itemDescription,
            [boardIdea.column.itemNameId]: columns.itemName,
            [boardIdea.column.userConsentId]: {
              checked: columns.userConsent.toString(),
            },
            [boardIdea.column.userEmailAddressId]: {
              email: columns.userEmailAddress,
              text: columns.userEmailAddress,
            },
            [boardIdea.column.userNameId]: columns.userName,
          }),
          groupId: boardIdea.groupId,
          itemName: columns.itemName || new Date().toISOString(),
        })
      }
      case 'issue': {
        const boardIssue = runtimeConfigBoard.issue

        return await client.request(queries.itemCreate, {
          boardId: boardIssue.id,
          columnValues: JSON.stringify({
            [boardIssue.column.itemDescriptionId]: columns.itemDescription,
            [boardIssue.column.itemNameId]: columns.itemName,
            [boardIssue.column.userConsentId]: {
              checked: columns.userConsent.toString(),
            },
            [boardIssue.column.userEmailAddressId]: {
              email: columns.userEmailAddress,
              text: columns.userEmailAddress,
            },
            [boardIssue.column.userNameId]: columns.userName,
          }),
          groupId: boardIssue.groupId,
          itemName: columns.itemName || new Date().toISOString(),
        })
      }
      case 'report': {
        const boardReport = runtimeConfigBoard.report

        return await client.request(queries.itemCreate, {
          boardId: boardReport.id,
          columnValues: JSON.stringify({
            [boardReport.column.itemDescriptionId]: columns.itemDescription,
            [boardReport.column.userConsentAccuracyId]: {
              checked: columns.userConsentAccuracy.toString(),
            },
            [boardReport.column.userConsentProcessingId]: {
              checked: columns.userConsentProcessing.toString(),
            },
            [boardReport.column.userEmailAddressId]: {
              email: columns.userEmailAddress,
              text: columns.userEmailAddress,
            },
            [boardReport.column.userNameId]: columns.userName,
          }),
          groupId: boardReport.groupId,
          itemName: new Date().toISOString(),
        })
      }
      default:
        consola.error('Unexpected Monday board')
    }
  }

  const uploadFile = async ({
    columnId,
    file,
    itemId,
  }: {
    columnId: string
    file: MultiPartData
    itemId: string
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
