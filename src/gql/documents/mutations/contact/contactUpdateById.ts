import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const useUpdateContactByIdMutation = () =>
  useMutation(
    graphql(`
      mutation updateContactById($id: UUID!, $contactPatch: ContactPatch!) {
        updateContactById(input: { id: $id, contactPatch: $contactPatch }) {
          contact {
            ...ContactItem
          }
        }
      }
    `),
  )
