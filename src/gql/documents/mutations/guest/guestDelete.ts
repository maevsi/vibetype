import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useDeleteGuestByIdMutation = () =>
  useMutation(
    graphql(`
      mutation DeleteGuestById($id: UUID!) {
        deleteGuestById(input: { id: $id }) {
          clientMutationId
        }
      }
    `),
  )
