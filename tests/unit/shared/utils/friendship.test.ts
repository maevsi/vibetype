import { describe, expect, test } from 'vitest'

import {
  getFriendshipAccountIds,
  getFriendshipState,
} from '#src/shared/utils/friendship'

const ACCOUNT_ID = 'a3f8f6c2-6b1e-4b6a-9b9a-9f7d6a2e6c1a'
const ACCOUNT_ID_OTHER = 'F5A6B7C8-D9E0-4F1A-8B2C-3D4E5F6A7B8C'

describe('getFriendshipAccountIds', () => {
  test('orders the accounts by id regardless of the argument order', () => {
    const accountIds = {
      accountAId: ACCOUNT_ID,
      accountBId: ACCOUNT_ID_OTHER.toLowerCase(),
    }

    expect(getFriendshipAccountIds(ACCOUNT_ID, ACCOUNT_ID_OTHER)).toEqual(
      accountIds,
    )
    expect(getFriendshipAccountIds(ACCOUNT_ID_OTHER, ACCOUNT_ID)).toEqual(
      accountIds,
    )
  })

  test('rejects a friendship with oneself', () => {
    expect(() => getFriendshipAccountIds(ACCOUNT_ID, ACCOUNT_ID)).toThrow()
  })
})

describe('getFriendshipState', () => {
  test('knows no friendship without a row', () => {
    expect(getFriendshipState({ accountId: ACCOUNT_ID })).toBe('none')
    expect(
      getFriendshipState({ accountId: ACCOUNT_ID, friendship: null }),
    ).toBe('none')
  })

  test('tells a sent request from a received one', () => {
    expect(
      getFriendshipState({
        accountId: ACCOUNT_ID,
        friendship: { createdBy: ACCOUNT_ID, status: 'requested' },
      }),
    ).toBe('requestSent')
    expect(
      getFriendshipState({
        accountId: ACCOUNT_ID,
        friendship: { createdBy: ACCOUNT_ID_OTHER, status: 'requested' },
      }),
    ).toBe('requestReceived')
  })

  test('treats an accepted friendship alike for both accounts', () => {
    for (const createdBy of [ACCOUNT_ID, ACCOUNT_ID_OTHER])
      expect(
        getFriendshipState({
          accountId: ACCOUNT_ID,
          friendship: { createdBy, status: 'accepted' },
        }),
      ).toBe('accepted')
  })
})
