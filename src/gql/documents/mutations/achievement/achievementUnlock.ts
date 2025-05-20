import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useAchievementUnlockMutation = () =>
  useMutation(
    graphql(`
      mutation AchievementUnlock($code: UUID!, $alias: String!) {
        achievementUnlock(input: { code: $code, alias: $alias }) {
          clientMutationId
          uuid
        }
      }
    `),
  )
