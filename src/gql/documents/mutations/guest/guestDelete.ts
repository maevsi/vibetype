import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const useDeleteGuestByIdMutation = () =>
  useMutation(
    graphql(`
      mutation deleteGuestById($id: UUID!) {
        deleteGuestById(input: { id: $id }) {
          clientMutationId
        }
      }
    `),
  )
