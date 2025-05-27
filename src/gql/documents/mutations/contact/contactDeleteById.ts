import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteContactByIdMutation = graphql(`
  mutation DeleteContactById($id: UUID!) {
    deleteContactById(input: { id: $id }) {
      clientMutationId
      contact {
        ...ContactItem
      }
    }
  }
`)

export const useDeleteContactByIdMutation = () =>
  useMutation(deleteContactByIdMutation)
