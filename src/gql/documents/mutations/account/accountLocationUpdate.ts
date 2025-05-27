import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateAccountLocationMutation = graphql(`
  mutation UpdateAccountLocation($input: UpdateAccountLocationInput!) {
    updateAccountLocation(input: $input) {
      clientMutationId
    }
  }
`)

export const useUpdateAccountLocationMutation = () =>
  useMutation(updateAccountLocationMutation)
