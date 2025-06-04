import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateAccountBirthDateMutation = graphql(`
  mutation UpdateAccountBirthDate($input: UpdateAccountBirthDateInput!) {
    updateAccountBirthDate(input: $input) {
      clientMutationId
    }
  }
`)

export const useUpdateAccountBirthDateMutation = () =>
  useMutation(updateAccountBirthDateMutation)
