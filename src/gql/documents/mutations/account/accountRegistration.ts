import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountRegistrationMutation = graphql(`
  mutation AccountRegistration(
    $birthDate: Date!
    $emailAddress: String!
    $password: String!
    $username: String!
    $language: String!
    $legalTermId: UUID!
  ) {
    accountRegistration(
      input: {
        birthDate: $birthDate
        emailAddress: $emailAddress
        password: $password
        username: $username
        language: $language
        legalTermId: $legalTermId
      }
    ) {
      clientMutationId
    }
  }
`)

export const useAccountRegistrationMutation = () =>
  useMutation(accountRegistrationMutation)
