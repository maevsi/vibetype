import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createGuestMutation = graphql(`
  mutation CreateGuest($guestInput: GuestInput!) {
    createGuest(input: { guest: $guestInput }) {
      guest {
        contactByContactId {
          ...ContactItem
        }
        id
      }
    }
  }
`)

export const useCreateGuestMutation = () => useMutation(createGuestMutation)
