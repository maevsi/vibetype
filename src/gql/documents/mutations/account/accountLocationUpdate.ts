import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useUpdateAccountLocationMutation = () =>
  useMutation(
    graphql(`
      mutation UpdateAccountLocation($input: UpdateAccountLocationInput!) {
        updateAccountLocation(input: $input) {
          clientMutationId
        }
      }
    `),
  )
