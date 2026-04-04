import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteGuestByRowIdMutation = graphql(`
  mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {
    deleteGuestByRowId(input: $input) {
      clientMutationId
    }
  }
`)

export const useDeleteGuestByRowIdMutation = () =>
  useMutation(deleteGuestByRowIdMutation)
