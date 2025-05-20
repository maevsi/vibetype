import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useAccountRegistrationMutation = () =>
  useMutation(
    graphql(`
      mutation AccountRegistration(
        $emailAddress: String!
        $password: String!
        $username: String!
        $language: String!
        $legalTermId: UUID!
      ) {
        accountRegistration(
          input: {
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
    `),
  )
