import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useAccountRegistrationRefreshMutation = () =>
  useMutation(
    graphql(`
      mutation AccountRegistrationRefresh(
        $accountId: UUID!
        $language: String!
      ) {
        accountRegistrationRefresh(
          input: { language: $language, accountId: $accountId }
        ) {
          clientMutationId
        }
      }
    `),
  )
