import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const useCreateGuestMutation = () =>
  useMutation(
    graphql(`
      mutation createGuest($guestInput: GuestInput!) {
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
