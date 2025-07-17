import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteGuestByIdMutation = graphql(`
  mutation DeleteGuestById($id: UUID!) {
    deleteGuestById(input: { id: $id }) {
      clientMutationId
    }
  }
`)

export const useDeleteGuestByIdMutation = () =>
  useMutation(deleteGuestByIdMutation)
