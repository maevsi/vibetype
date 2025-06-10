import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllAchievementsQueryVariables } from '~~/gql/generated/graphql'

export const allAchievementsQuery = graphql(`
  query AllAchievements($accountId: UUID) {
    allAchievements(condition: { accountId: $accountId }) {
      nodes {
        ...AchievementItem
      }
    }
  }
`)

export const useAllAchievementsQuery = (
  variables?: AllAchievementsQueryVariables,
) =>
  useQuery({
    query: allAchievementsQuery,
    variables,
  })
