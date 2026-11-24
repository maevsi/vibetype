import { beforeEach, describe, expect, test, vi } from 'vitest'

import { LocaleSchema } from '#src/server/utils/i18n'
import { PermanentProcessingError } from '#src/server/utils/retry'

const queryRows = new Map<string, unknown[]>()
const sqlMock = vi.fn((strings: TemplateStringsArray) => {
  const query = strings.join('$')
  const match = [...queryRows.keys()].find((key) => query.includes(key))
  return Promise.resolve(match ? queryRows.get(match) : [])
})
const sendEmailMock = vi.fn()

vi.stubGlobal('executeQuery', (query: Promise<unknown>) => query)
vi.stubGlobal('LOCALE_DEFAULT', 'en')
vi.stubGlobal('LocaleSchema', LocaleSchema)
vi.stubGlobal('MAEVSI_EMAIL_RATE_LIMIT_PER_DAY', 150)
vi.stubGlobal('MAEVSI_EMAIL_RATE_LIMIT_PER_SECOND', 14)
vi.stubGlobal('PermanentProcessingError', PermanentProcessingError)
vi.stubGlobal('SITE_NAME', 'vibetype')
vi.stubGlobal('sendEmail', sendEmailMock)
vi.stubGlobal('sql', sqlMock)

// the outbox module relies on Nitro auto-imports, stubbed above, that the type checker can't resolve outside of Nuxt either, so the import path is kept opaque to it
const OUTBOX_MODULE_PATH = '#src/server/utils/outbox'
const { outboxEnvelopeSchema, processOutboxMessage } = (await import(
  OUTBOX_MODULE_PATH
)) as {
  outboxEnvelopeSchema: { safeParse: (value: unknown) => { success: boolean } }
  processOutboxMessage: (options: Record<string, unknown>) => Promise<void>
}

const ACCOUNT_ID = '00000000-0000-4000-8000-000000000001'
const OUTBOX_ID = '00000000-0000-4000-8000-000000000002'

const createEnvelope = (overrides: Record<string, unknown> = {}) => ({
  aggregate_id: ACCOUNT_ID,
  aggregate_type: 'account',
  data: { account_id: ACCOUNT_ID, language: 'en' },
  id: OUTBOX_ID,
  occurred_at: '2026-11-10T12:00:00Z',
  type: 'account.registered',
  version: 1,
  ...overrides,
})

const processPayload = (payload: unknown) =>
  processOutboxMessage({
    payload,
    redis: {},
    runtimeConfig: {
      public: {
        vibetype: {
          email: { limit24h: '', rateLimit: { perDay: '', perSecond: '' } },
        },
      },
    },
    siteUrl: 'https://example.com',
    tusdFilesUrl: 'https://tusd.example.com/files/',
  })

const getQueries = () =>
  sqlMock.mock.calls.map(([strings]) => strings.join('$'))

describe('outboxEnvelopeSchema', () => {
  test('accepts a valid envelope', () => {
    expect(outboxEnvelopeSchema.safeParse(createEnvelope()).success).toBe(true)
  })

  test('rejects an envelope without an id', () => {
    expect(
      outboxEnvelopeSchema.safeParse(createEnvelope({ id: undefined })).success,
    ).toBe(false)
  })
})

describe('processOutboxMessage', () => {
  beforeEach(() => {
    queryRows.clear()
    queryRows.set('outbox_is_processed', [{ is_processed: false }])
    sqlMock.mockClear()
    sendEmailMock.mockReset()
    vi.spyOn(console, 'info').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  test('fails permanently on a malformed envelope', async () => {
    await expect(
      processPayload({ type: 'account.registered' }),
    ).rejects.toBeInstanceOf(PermanentProcessingError)
    expect(sqlMock).not.toHaveBeenCalled()
  })

  test('skips an unknown type without marking it processed', async () => {
    await processPayload(createEnvelope({ type: 'account.unknown' }))

    expect(sqlMock).not.toHaveBeenCalled()
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  test('fails on an unsupported version without marking it processed', async () => {
    await expect(
      processPayload(createEnvelope({ version: 2 })),
    ).rejects.toThrow('Unsupported version 2')

    expect(sqlMock).not.toHaveBeenCalled()
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  test('skips an already processed event', async () => {
    queryRows.set('outbox_is_processed', [{ is_processed: true }])

    await processPayload(createEnvelope())

    expect(getQueries()).toEqual([
      expect.stringContaining('outbox_is_processed'),
    ])
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  test('fails when the processed state cannot be checked', async () => {
    queryRows.set('outbox_is_processed', [{ is_processed: null }])

    await expect(processPayload(createEnvelope())).rejects.toThrow()
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  test('skips sending but marks processed when the resolver returns no row', async () => {
    await processPayload(createEnvelope())

    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(getQueries()).toEqual([
      expect.stringContaining('outbox_is_processed'),
      expect.stringContaining('outbox_account_resolve'),
      expect.stringContaining('outbox_mark_processed'),
    ])
  })

  test('sends the registration email and then marks processed', async () => {
    queryRows.set('outbox_account_resolve', [
      {
        email_address: 'user@example.com',
        email_address_verification: 'code',
        email_address_verification_valid_until: new Date(
          '2026-11-11T12:00:00Z',
        ),
        password_reset_verification: null,
        password_reset_verification_valid_until: null,
        username: 'user',
      },
    ])

    await processPayload(
      createEnvelope({
        data: {
          account_id: ACCOUNT_ID,
          language: 'en',
          time_zone: 'Europe/Berlin',
        },
      }),
    )

    expect(sendEmailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'account.registered',
        props: expect.objectContaining({
          emailAddressVerificationLink:
            'https://example.com/account/verify?code=code',
          timeZone: 'Europe/Berlin',
          validUntil: '2026-11-11T12:00:00.000Z',
        }),
      }),
    )
    expect(getQueries().at(-1)).toContain('outbox_mark_processed')
  })
})
