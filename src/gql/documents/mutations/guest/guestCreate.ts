import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createGuestsMutation = graphql(`
  mutation CreateGuests($createGuestsInput: CreateGuestsInput!) {
    createGuests(input: $createGuestsInput) {
      guests {
        contactByContactId {
          ...ContactItem
        }
        id
      }
    }
  }
`)

export const useCreateGuestsMutation = () => useMutation(createGuestsMutation)
