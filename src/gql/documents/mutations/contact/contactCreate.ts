import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createContactMutation = graphql(`
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      contact {
        ...ContactItem
      }
    }
  }
`)

export const useCreateContactMutation = () => useMutation(createContactMutation)
