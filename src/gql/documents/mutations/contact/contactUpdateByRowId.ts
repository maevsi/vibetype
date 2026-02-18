import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateContactByRowIdMutation = graphql(`
  mutation UpdateContactByRowId($id: UUID!, $contactPatch: ContactPatch!) {
    updateContactByRowId(input: { rowId: $id, contactPatch: $contactPatch }) {
      contact {
        ...ContactItem
      }
    }
  }
`)

export const useUpdateContactByRowIdMutation = () =>
  useMutation(updateContactByRowIdMutation)
