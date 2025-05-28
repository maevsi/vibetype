import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateGuestMutation = () =>
  useMutation(
    graphql(`
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
    `),
  )
