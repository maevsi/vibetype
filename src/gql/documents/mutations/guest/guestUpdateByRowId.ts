import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateGuestByRowIdMutation = graphql(`
  mutation UpdateGuestByRowId($input: UpdateGuestByRowIdInput!) {
    updateGuestByRowId(input: $input) {
      guest {
        ...GuestItem
        contactByContactId {
          ...ContactItem
        }
      }
    }
  }
`)

export const useUpdateGuestByRowIdMutation = () =>
  useMutation(updateGuestByRowIdMutation)
