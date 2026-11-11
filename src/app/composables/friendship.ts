import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import { FriendshipStatus } from '~~/gql/generated/graphcache'

// The friendship mutations of the signed in account with another account,
// shared by every place that offers them.
export const useFriendshipMutations = () => {
  const store = useStore()
  const createFriendshipMutation = useMutation(
    graphql(`
      mutation CreateFriendship($input: CreateFriendshipInput!) {
        createFriendship(input: $input) {
          clientMutationId
        }
      }
    `),
  )
  const deleteFriendshipMutation = useMutation(
    graphql(`
      mutation DeleteFriendshipByAccountAIdAndAccountBId(
        $input: DeleteFriendshipByAccountAIdAndAccountBIdInput!
      ) {
        deleteFriendshipByAccountAIdAndAccountBId(input: $input) {
          clientMutationId
        }
      }
    `),
  )
  const updateFriendshipMutation = useMutation(
    graphql(`
      mutation UpdateFriendshipByAccountAIdAndAccountBId(
        $input: UpdateFriendshipByAccountAIdAndAccountBIdInput!
      ) {
        updateFriendshipByAccountAIdAndAccountBId(input: $input) {
          clientMutationId
        }
      }
    `),
  )

  const getSignedInAccountId = () => {
    if (!store.signedInAccountId)
      throw new Error('Friendships require a signed in account')

    return store.signedInAccountId
  }

  return {
    acceptFriendship: (accountId: string) =>
      updateFriendshipMutation.executeMutation({
        input: {
          ...getFriendshipAccountIds(getSignedInAccountId(), accountId),
          friendshipPatch: { status: FriendshipStatus.Accepted },
        },
      }),
    createFriendship: (accountId: string) =>
      createFriendshipMutation.executeMutation({
        input: {
          friendship: {
            ...getFriendshipAccountIds(getSignedInAccountId(), accountId),
            createdBy: getSignedInAccountId(),
          },
        },
      }),
    deleteFriendship: (accountId: string) =>
      deleteFriendshipMutation.executeMutation({
        input: getFriendshipAccountIds(getSignedInAccountId(), accountId),
      }),
    isPending: computed(
      () =>
        createFriendshipMutation.fetching.value ||
        deleteFriendshipMutation.fetching.value ||
        updateFriendshipMutation.fetching.value,
    ),
  }
}
