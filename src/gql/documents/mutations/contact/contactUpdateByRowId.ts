import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateContactByRowIdMutation = graphql(`
  mutation UpdateContactByRowId($input: UpdateContactByRowIdInput!) {
    updateContactByRowId(input: $input) {
      contact {
        ...ContactItem
      }
    }
  }
`)

export const useUpdateContactByRowIdMutation = () =>
  useMutation(updateContactByRowIdMutation)
