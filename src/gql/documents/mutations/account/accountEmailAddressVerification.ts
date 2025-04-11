import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const useAccountEmailAddressVerificationMutation = () =>
  useMutation(
    graphql(`
      mutation accountEmailAddressVerification($code: UUID!) {
        accountEmailAddressVerification(input: { code: $code }) {
          clientMutationId
        }
      }
    `),
  )
