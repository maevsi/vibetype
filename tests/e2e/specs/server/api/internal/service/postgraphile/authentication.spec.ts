import { expect, test } from '@playwright/test'

import { TURNSTILE_HEADER_KEY } from '#src/shared/utils/constants'

const PATH = '/api/internal/service/postgraphile/authentication'
// accepted by Cloudflare's always-pass testing secret key, which the test server is configured with
const TURNSTILE_DUMMY_TOKEN = 'XXXX.DUMMY.TOKEN.XXXX'

const OPERATIONS = {
  accountRegistration:
    'mutation AccountRegistration($input: AccountRegistrationInput!) { accountRegistration(input: $input) { clientMutationId } }',
  jwtCreate:
    'mutation JwtCreate($input: JwtCreateInput!) { jwtCreate(input: $input) { clientMutationId result } }',
}

test.describe('postgraphile authentication', () => {
  test.skip(
    process.env.VIO_SERVER === 'static',
    'static builds have no server api',
  )

  for (const [name, query] of Object.entries(OPERATIONS)) {
    test(`rejects ${name} without turnstile token`, async ({ request }) => {
      const response = await request.post(PATH, { data: { query } })

      expect(response.status()).toBe(422)
    })

    test(`accepts ${name} with turnstile token`, async ({ request }) => {
      const response = await request.post(PATH, {
        data: { query },
        headers: { [TURNSTILE_HEADER_KEY]: TURNSTILE_DUMMY_TOKEN },
      })

      expect(response.ok()).toBe(true)
    })
  }

  // the operation name is chosen by the client, so it must not decide whether verification happens
  for (const [name, query] of Object.entries({
    aliased:
      'mutation JwtCreate($input: JwtCreateInput!) { token: jwtCreate(input: $input) { result } }',
    fragment:
      'mutation Other($input: JwtCreateInput!) { ...Login } fragment Login on Mutation { jwtCreate(input: $input) { result } }',
    'preceded by another operation':
      'mutation Other { __typename } mutation JwtCreate($input: JwtCreateInput!) { jwtCreate(input: $input) { result } }',
    renamed:
      'mutation Other($input: JwtCreateInput!) { jwtCreate(input: $input) { result } }',
    unnamed:
      'mutation ($input: JwtCreateInput!) { jwtCreate(input: $input) { result } }',
  })) {
    test(`rejects ${name} jwtCreate without turnstile token`, async ({
      request,
    }) => {
      const response = await request.post(PATH, { data: { query } })

      expect(response.status()).toBe(422)
    })
  }

  test('accepts unprotected mutations without turnstile token', async ({
    request,
  }) => {
    const response = await request.post(PATH, {
      data: { query: 'mutation Other { __typename }' },
    })

    expect(response.ok()).toBe(true)
  })
})
