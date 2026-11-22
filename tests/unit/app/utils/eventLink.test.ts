import { describe, expect, test } from 'vitest'

import { getEventLinkHeaderValue } from '#src/app/utils/eventLink'

describe('getEventLinkHeaderValue', () => {
  test('derives the link from event view routes and their children', () => {
    const params = { event_name: 'party', username: 'jane' }

    expect(
      getEventLinkHeaderValue({
        name: 'event-view-username-event_name___en',
        params,
      }),
    ).toBe('jane/party')
    expect(
      getEventLinkHeaderValue({
        name: 'event-view-username-event_name-guest___de',
        params,
      }),
    ).toBe('jane/party')
  })

  test('ignores other routes and invalid params', () => {
    expect(
      getEventLinkHeaderValue({
        name: 'index___en',
        params: { event_name: 'party', username: 'jane' },
      }),
    ).toBeUndefined()
    expect(
      getEventLinkHeaderValue({
        name: 'event-view-username-event_name___en',
        params: { event_name: 'a/b', username: 'jane' },
      }),
    ).toBeUndefined()
  })
})
