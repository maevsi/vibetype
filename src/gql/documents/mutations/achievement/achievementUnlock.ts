import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const useAchievementUnlockMutation = () =>
  useMutation(
    graphql(`
      mutation achievementUnlock($code: UUID!, $alias: String!) {
        achievementUnlock(input: { code: $code, alias: $alias }) {
          clientMutationId
          uuid
        }
      }
    `),
  )
