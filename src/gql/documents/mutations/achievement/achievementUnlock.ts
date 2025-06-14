import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const achievementUnlockMutation = graphql(`
  mutation AchievementUnlock($code: UUID!, $alias: String!) {
    achievementUnlock(input: { code: $code, alias: $alias }) {
      clientMutationId
      uuid
    }
  }
`)

export const useAchievementUnlockMutation = () =>
  useMutation(achievementUnlockMutation)
