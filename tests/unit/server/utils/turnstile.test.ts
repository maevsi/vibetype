import { beforeEach, describe, expect, test, vi } from 'vitest'

import { TURNSTILE_HEADER_KEY } from '#src/shared/utils/constants'

const verifyTurnstileTokenMock = vi.fn()

vi.stubGlobal('TURNSTILE_HEADER_KEY', TURNSTILE_HEADER_KEY)
vi.stubGlobal(
  'getRequestHeader',
  (event: { headers: Record<string, unknown> }, name: string) =>
    event.headers[name],
)
vi.stubGlobal(
  'createAppError',
  ({ status, statusText }: { status: number; statusText: string }) =>
    Object.assign(new Error(statusText), { status }),
)
vi.stubGlobal('verifyTurnstileToken', verifyTurnstileTokenMock)

// turnstileVerify relies on Nuxt auto-imports, stubbed above, that the type checker can't resolve outside of Nuxt either, so the import path is kept opaque to it
const TURNSTILE_MODULE_PATH = '#src/server/utils/turnstile'
const { turnstileVerify } = (await import(TURNSTILE_MODULE_PATH)) as {
  turnstileVerify: (event: unknown) => Promise<void>
}

const createEvent = (token?: unknown) => ({
  headers:
    token === undefined ? {} : { [TURNSTILE_HEADER_KEY.toLowerCase()]: token },
})

describe('turnstileVerify', () => {
  beforeEach(() => {
    verifyTurnstileTokenMock.mockReset()
  })

  test('rejects a missing token', async () => {
    await expect(turnstileVerify(createEvent())).rejects.toMatchObject({
      status: 422,
    })
    expect(verifyTurnstileTokenMock).not.toHaveBeenCalled()
  })

  test('rejects multiple tokens', async () => {
    await expect(
      turnstileVerify(createEvent(['token', 'token'])),
    ).rejects.toMatchObject({ status: 422 })
    expect(verifyTurnstileTokenMock).not.toHaveBeenCalled()
  })

  test('rejects an unsuccessful verification', async () => {
    verifyTurnstileTokenMock.mockResolvedValue({
      'error-codes': ['invalid-input-response'],
      success: false,
    })

    await expect(turnstileVerify(createEvent('token'))).rejects.toMatchObject({
      message: expect.stringContaining('invalid-input-response'),
      status: 403,
    })
  })

  test('accepts a successful verification', async () => {
    verifyTurnstileTokenMock.mockResolvedValue({
      'error-codes': [],
      success: true,
    })

    await expect(turnstileVerify(createEvent('token'))).resolves.toBeUndefined()
    expect(verifyTurnstileTokenMock).toHaveBeenCalledWith('token')
  })
})
