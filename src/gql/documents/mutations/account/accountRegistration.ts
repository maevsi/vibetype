import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const accountRegistrationMutation = graphql(`
  mutation AccountRegistration(
    $birthDate: Date!
    $emailAddress: String!
    $language: String!
    $legalTermId: UUID!
    $password: String!
    $username: String!
  ) {
    accountRegistration(
      input: {
        birthDate: $birthDate
        emailAddress: $emailAddress
        language: $language
        legalTermId: $legalTermId
        password: $password
        username: $username
      }
    ) {
      clientMutationId
    }
  }
`)

export const useAccountRegistrationMutation = () =>
  useMutation(accountRegistrationMutation)
