import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateContactMutation = () =>
  useMutation(
    graphql(`
      mutation CreateContact($contactInput: ContactInput!) {
        createContact(input: { contact: $contactInput }) {
          contact {
            ...ContactItem
          }
        }
      }
    `),
  )
