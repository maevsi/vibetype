import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const useDeleteContactByIdMutation = () =>
  useMutation(
    graphql(`
      mutation deleteContactById($id: UUID!) {
        deleteContactById(input: { id: $id }) {
          clientMutationId
          contact {
            ...ContactItem
          }
        }
      }
    `),
  )
