import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteContactByRowIdMutation = graphql(`
  mutation DeleteContactByRowId($id: UUID!) {
    deleteContactByRowId(input: { rowId: $id }) {
      clientMutationId
      contact {
        ...ContactItem
      }
    }
  }
`)

export const useDeleteContactByRowIdMutation = () =>
  useMutation(deleteContactByRowIdMutation)
