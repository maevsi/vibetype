import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountRegistrationMutation = graphql(`
  mutation AccountRegistration($input: AccountRegistrationInput!) {
    accountRegistration(input: $input) {
      clientMutationId
    }
  }
`)

export const useAccountRegistrationMutation = () =>
  useMutation(accountRegistrationMutation)
