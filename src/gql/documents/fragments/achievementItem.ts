import { type FragmentType, graphql, useFragment } from '~~/gql/generated/gql'

export const AchievementItem = graphql(`
  fragment AchievementItem on Achievement {
    nodeId
    id
    accountId
    achievement
    level
  }
`)

export const getAchievementItem = (
  fragment?: FragmentType<typeof AchievementItem> | null,
) => useFragment(AchievementItem, fragment)
