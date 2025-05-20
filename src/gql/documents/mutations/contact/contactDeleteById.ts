import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useDeleteContactByIdMutation = () =>
  useMutation(
    graphql(`
      mutation DeleteContactById($id: UUID!) {
        deleteContactById(input: { id: $id }) {
          clientMutationId
          contact {
            ...ContactItem
          }
        }
      }
    `),
  )
