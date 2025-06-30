import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountDescriptionUpdateMutation = graphql(`
  mutation AccountDescriptionUpdate(
    $username: String!
    $accountPatch: AccountPatch!
  ) {
    updateAccountByUsername(
      input: { username: $username, accountPatch: $accountPatch }
    ) {
      account {
        ...AccountItem
      }
    }
  }
`)

export const useAccountDescriptionUpdateMutation = () =>
  useMutation(accountDescriptionUpdateMutation)
