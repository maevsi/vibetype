import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteGuestByRowIdMutation = graphql(`
  mutation DeleteGuestByRowId($id: UUID!) {
    deleteGuestByRowId(input: { rowId: $id }) {
      clientMutationId
    }
  }
`)

export const useDeleteGuestByRowIdMutation = () =>
  useMutation(deleteGuestByRowIdMutation)
