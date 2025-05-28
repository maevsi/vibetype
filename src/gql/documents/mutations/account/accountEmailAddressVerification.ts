import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useAccountEmailAddressVerificationMutation = () =>
  useMutation(
    graphql(`
      mutation AccountEmailAddressVerification($code: UUID!) {
        accountEmailAddressVerification(input: { code: $code }) {
          clientMutationId
        }
      }
    `),
  )
