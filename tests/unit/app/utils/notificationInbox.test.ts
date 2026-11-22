import { describe, expect, test } from 'vitest'

import {
  getNotificationBadgeText,
  getNotificationTarget,
  isNotificationSoftAskDismissed,
  parseNotificationPayload,
} from '#src/app/utils/notificationInbox'

const DAY = 24 * 60 * 60 * 1000

describe('parseNotificationPayload', () => {
  test('maps known keys and drops everything else', () => {
    expect(
      parseNotificationPayload({
        actor_username: 'ada',
        changes: ['start', 'unknown', 'address'],
        event_name: 'Party',
        feedback: 'maybe',
        other: 1,
      }),
    ).toEqual({
      actorUsername: 'ada',
      changes: ['start', 'address'],
      eventCreatorUsername: undefined,
      eventName: 'Party',
      eventSlug: undefined,
      eventStart: undefined,
      feedback: undefined,
      guestName: undefined,
    })
  })

  test.each([null, undefined, 'text', 4, []])('tolerates %j', (payload) => {
    expect(parseNotificationPayload(payload).changes).toEqual([])
  })
})

describe('getNotificationTarget', () => {
  const payload = {
    actor_username: 'ada',
    event_creator_username: 'bob',
    event_slug: 'party',
  }

  test('links invitations to the guest page', () => {
    expect(
      getNotificationTarget({
        guestId: 'g1',
        payload,
        type: 'event_invitation',
      }),
    ).toEqual({ name: 'guest-view-id', params: { id: 'g1' } })
  })

  test('links event notifications to the event page', () => {
    expect(getNotificationTarget({ payload, type: 'guest_feedback' })).toEqual({
      name: 'event-view-username-event_name',
      params: { event_name: 'party', username: 'bob' },
    })
  })

  test('links friendships to the actor', () => {
    expect(
      getNotificationTarget({ payload, type: 'friendship_requested' }),
    ).toEqual({ name: 'account-view-username', params: { username: 'ada' } })
  })

  test('has no target for a deleted event or a snapshot without links', () => {
    expect(getNotificationTarget({ payload, type: 'event_deleted' })).toBe(
      undefined,
    )
    expect(getNotificationTarget({ payload: {}, type: 'event_updated' })).toBe(
      undefined,
    )
  })
})

describe('getNotificationBadgeText', () => {
  test.each([
    [1, '1'],
    [9, '9'],
    [10, '9+'],
  ])('%d reads %s', (count, text) => {
    expect(getNotificationBadgeText(count)).toBe(text)
  })
})

describe('isNotificationSoftAskDismissed', () => {
  const now = 100 * DAY

  test('holds for 30 days', () => {
    expect(isNotificationSoftAskDismissed(String(now - 29 * DAY), now)).toBe(
      true,
    )
    expect(isNotificationSoftAskDismissed(String(now - 30 * DAY), now)).toBe(
      false,
    )
  })

  test.each([null, undefined, '', 'garbage'])('ignores %j', (value) => {
    expect(isNotificationSoftAskDismissed(value, now)).toBe(false)
  })
})
