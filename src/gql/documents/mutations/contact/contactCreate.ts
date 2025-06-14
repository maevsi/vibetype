import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const createContactMutation = graphql(`
  mutation CreateContact($contactInput: ContactInput!) {
    createContact(input: { contact: $contactInput }) {
      contact {
        ...ContactItem
      }
    }
  }
`)

export const useCreateContactMutation = () => useMutation(createContactMutation)
