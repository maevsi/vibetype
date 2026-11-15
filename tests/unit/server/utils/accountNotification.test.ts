import { beforeEach, describe, expect, test, vi } from 'vitest'

import { AppLocale, LocaleSchema } from '#src/server/utils/i18n'

const queryRows = new Map<string, unknown[]>()
const sqlMock = vi.fn((strings: TemplateStringsArray) => {
  const query = strings.join('$')
  const match = [...queryRows.keys()].find((key) => query.includes(key))
  return Promise.resolve(match ? queryRows.get(match) : [])
})
const sendMock = vi.fn()

vi.stubGlobal('AppLocale', AppLocale)
vi.stubGlobal('executeQuery', (query: Promise<unknown>) => query)
vi.stubGlobal('LOCALE_DEFAULT', 'en')
vi.stubGlobal('LocaleSchema', LocaleSchema)
vi.stubGlobal('sql', sqlMock)
vi.stubGlobal('useFirebase', () => ({
  // `getMessaging` resolves the messaging service through the app
  adminApp: { getOrInitService: () => ({ send: sendMock }) },
}))

// the module relies on Nitro auto-imports, stubbed above, that the type checker can't resolve outside of Nuxt either, so the import path is kept opaque to it
const MODULE_PATH = '#src/server/utils/accountNotification'
const {
  buildAccountNotificationMessage,
  sendAccountNotificationPush,
  sendPush,
} = (await import(MODULE_PATH)) as {
  buildAccountNotificationMessage: (options: Record<string, unknown>) => {
    body: string
    title: string
    url: string
  }
  sendAccountNotificationPush: (
    options: Record<string, unknown>,
  ) => Promise<unknown>
  sendPush: (options: Record<string, unknown>) => Promise<{
    failureCount: number
    successCount: number
  }>
}

const GUEST_ID = '00000000-0000-4000-8000-000000000003'
const payload = {
  actor_username: 'alice',
  changes: ['start', 'address'],
  event_creator_username: 'bob',
  event_name: 'Party',
  event_slug: 'party',
  feedback: 'accepted',
  guest_name: 'Carol',
}

const build = (type: string, language = 'en', guestId: string | null = null) =>
  buildAccountNotificationMessage({ guestId, language, payload, type })

describe('buildAccountNotificationMessage', () => {
  test.each([
    ['event_deleted', '/notification'],
    ['event_invitation', `/guest/view/${GUEST_ID}`],
    ['event_updated', '/event/view/bob/party'],
    ['friendship_accepted', '/account/view/alice'],
    ['friendship_requested', '/account/view/alice'],
    ['guest_feedback', '/event/view/bob/party'],
  ])('links %s to %s', (type, path) => {
    expect(build(type, 'en', GUEST_ID).url).toBe(path)
  })

  test('prefixes the locale unless it is the default', () => {
    expect(build('friendship_requested', 'de').url).toBe(
      '/de/account/view/alice',
    )
  })

  test('falls back to the inbox when link data is missing', () => {
    expect(build('event_invitation').url).toBe('/notification')
    expect(
      buildAccountNotificationMessage({
        guestId: null,
        language: 'en',
        payload: {},
        type: 'event_updated',
      }),
    ).toMatchObject({ body: 'an event was updated.', url: '/notification' })
  })

  test('localizes title and body', () => {
    expect(build('event_invitation')).toMatchObject({
      body: 'alice invited you to Party.',
      title: 'New invitation',
    })
    expect(build('event_invitation', 'de')).toMatchObject({
      body: 'alice hat dich zu Party eingeladen.',
      title: 'Neue Einladung',
    })
    expect(build('event_updated').body).toBe(
      'Party was updated: start, location.',
    )
    expect(build('guest_feedback').body).toBe(
      'Carol accepted the invitation to Party.',
    )
  })
})

describe('sendPush', () => {
  beforeEach(() => {
    queryRows.clear()
    sqlMock.mockClear()
    sendMock.mockReset()
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  test('sends the message with url, web push link and apns payload per token', async () => {
    sendMock.mockResolvedValue('id')

    const result = await sendPush({
      data: { url: '/de/notification' },
      notification: { body: 'b', title: 't' },
      siteUrl: 'https://example.com',
      tokens: ['a', 'b'],
    })

    expect(result).toEqual({ failureCount: 0, successCount: 2 })
    expect(sendMock).toHaveBeenCalledTimes(2)
    expect(sendMock).toHaveBeenCalledWith({
      apns: { payload: { aps: {}, url: '/de/notification' } },
      data: { url: '/de/notification' },
      notification: { body: 'b', title: 't' },
      token: 'a',
      webpush: { fcmOptions: { link: 'https://example.com/de/notification' } },
    })
  })

  test('looks up tokens by account when none are given', async () => {
    queryRows.set('SELECT fcm_token', [{ fcm_token: 'a' }, { fcm_token: null }])
    sendMock.mockResolvedValue('id')

    await sendPush({
      accountId: 'account',
      notification: { body: 'b', title: 't' },
    })

    expect(sendMock).toHaveBeenCalledTimes(1)
    expect(sendMock).toHaveBeenCalledWith({
      notification: { body: 'b', title: 't' },
      token: 'a',
    })
  })

  test('prunes stale tokens only and keeps sending to the others', async () => {
    sendMock
      .mockRejectedValueOnce({
        code: 'messaging/registration-token-not-registered',
      })
      .mockRejectedValueOnce({ code: 'messaging/invalid-registration-token' })
      .mockRejectedValueOnce({ code: 'messaging/internal-error' })
      .mockResolvedValueOnce('id')

    const result = await sendPush({
      notification: { body: 'b', title: 't' },
      tokens: ['a', 'b', 'c', 'd'],
    })

    expect(result).toEqual({ failureCount: 3, successCount: 1 })
    const deletes = sqlMock.mock.calls.filter(([strings]) =>
      strings.join('$').includes('DELETE FROM vibetype.device'),
    )
    expect(deletes.map(([, token]) => token)).toEqual(['a', 'b'])
  })

  test('does nothing without tokens', async () => {
    await sendPush({ notification: { body: 'b', title: 't' }, tokens: [] })

    expect(sendMock).not.toHaveBeenCalled()
  })
})

describe('sendAccountNotificationPush', () => {
  test('falls back to the default language and sends the resolved tokens', async () => {
    sendMock.mockReset()
    sendMock.mockResolvedValue('id')

    await sendAccountNotificationPush({
      notification: {
        account_id: 'account',
        fcm_tokens: ['a'],
        guest_id: GUEST_ID,
        language: null,
        payload,
        type: 'event_invitation',
      },
      siteUrl: 'https://example.com',
    })

    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        data: { url: `/guest/view/${GUEST_ID}` },
        notification: {
          body: 'alice invited you to Party.',
          title: 'New invitation',
        },
        token: 'a',
      }),
    )
  })
})
