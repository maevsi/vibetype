import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const updateContactByIdMutation = graphql(`
  mutation UpdateContactById($id: UUID!, $contactPatch: ContactPatch!) {
    updateContactById(input: { id: $id, contactPatch: $contactPatch }) {
      contact {
        ...ContactItem
      }
    }
  }
`)

export const useUpdateContactByIdMutation = () =>
  useMutation(updateContactByIdMutation)
