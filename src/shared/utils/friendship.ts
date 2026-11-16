export type FriendshipState =
  'accepted' | 'none' | 'requestReceived' | 'requestSent'

// A friendship stores its two accounts ordered by id, the way the database
// compares them. Lowercase UUID strings sort the same.
export const getFriendshipAccountIds = (
  accountId: string,
  accountIdOther: string,
) => {
  const [accountAId, accountBId] = [
    accountId.toLowerCase(),
    accountIdOther.toLowerCase(),
  ].sort()

  if (!accountAId || !accountBId || accountAId === accountBId)
    throw new Error('A friendship needs two different accounts')

  return { accountAId, accountBId }
}

export const getFriendshipState = ({
  accountId,
  friendship,
}: {
  accountId: string
  friendship?: { createdBy: string; status: string } | null
}): FriendshipState => {
  if (!friendship) return 'none'
  if (friendship.status === 'accepted') return 'accepted'

  return friendship.createdBy === accountId ? 'requestSent' : 'requestReceived'
}
