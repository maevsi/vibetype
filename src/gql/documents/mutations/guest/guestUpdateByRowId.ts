import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateGuestByRowIdMutation = graphql(`
  mutation UpdateGuestByRowId($id: UUID!, $guestPatch: GuestPatch!) {
    updateGuestByRowId(input: { rowId: $id, guestPatch: $guestPatch }) {
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
