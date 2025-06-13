import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const accountEmailAddressVerificationMutation = graphql(`
  mutation AccountEmailAddressVerification($code: UUID!) {
    accountEmailAddressVerification(input: { code: $code }) {
      clientMutationId
    }
  }
`)

export const useAccountEmailAddressVerificationMutation = () =>
  useMutation(accountEmailAddressVerificationMutation)
