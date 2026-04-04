import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteContactByRowIdMutation = graphql(`
  mutation DeleteContactByRowId($input: DeleteContactByRowIdInput!) {
    deleteContactByRowId(input: $input) {
      clientMutationId
      contact {
        ...ContactItem
      }
    }
  }
`)

export const useDeleteContactByRowIdMutation = () =>
  useMutation(deleteContactByRowIdMutation)
