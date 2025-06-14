import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const updateGuestByIdMutation = graphql(`
  mutation UpdateGuestById($id: UUID!, $guestPatch: GuestPatch!) {
    updateGuestById(input: { id: $id, guestPatch: $guestPatch }) {
      guest {
        ...GuestItem
        contactByContactId {
          ...ContactItem
        }
      }
    }
  }
`)

export const useUpdateGuestByIdMutation = () =>
  useMutation(updateGuestByIdMutation)
