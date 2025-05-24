import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useUpdateAccountBirthDateMutation = () =>
  useMutation(
    graphql(`
      mutation UpdateAccountBirthDate($input: UpdateAccountBirthDateInput!) {
        updateAccountBirthDate(input: $input) {
          clientMutationId
        }
      }
    `),
  )
