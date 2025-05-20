import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useAccountPasswordResetRequestMutation = () =>
  useMutation(
    graphql(`
      mutation AccountPasswordResetRequest(
        $emailAddress: String!
        $language: String!
      ) {
        accountPasswordResetRequest(
          input: { emailAddress: $emailAddress, language: $language }
        ) {
          clientMutationId
        }
      }
    `),
  )
