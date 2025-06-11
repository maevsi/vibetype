import { consola } from 'consola'

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
      }) => {
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
      default:
        consola.error('Unexpected Monday board')
    }
  }

  return {
    client,
    createItem,
  }
}
