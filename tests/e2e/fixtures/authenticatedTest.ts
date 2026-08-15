import { importPKCS8, SignJWT } from 'jose'

import { JWT_COOKIE_NAME, SITE_NAME } from '#src/node/static'
import { JWT_ALGORITHM } from '#src/shared/utils/constants'
import {
  TESTING_ACCOUNT_ROW_ID,
  TESTING_ACCOUNT_USERNAME,
  TESTING_JWT_PRIVATE_KEY,
} from '#src/shared/utils/testing'
import { SITE_URL } from '#tests/e2e/utils/constants'

import { appTest } from './appTest'

const signTestingAccountJwt = async () => {
  const privateKey = await importPKCS8(TESTING_JWT_PRIVATE_KEY, JWT_ALGORITHM)

  return await new SignJWT({
    attendances: [],
    guests: [],
    role: `${SITE_NAME}_account`,
    username: TESTING_ACCOUNT_USERNAME,
  })
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setSubject(TESTING_ACCOUNT_ROW_ID)
    .setIssuer('postgraphile')
    .setAudience('postgraphile')
    .setJti(crypto.randomUUID())
    .setExpirationTime('1h')
    .sign(privateKey)
}

export const authenticatedTest = appTest.extend<{ signedIn: void }>({
  signedIn: [
    async ({ context }, use) => {
      await context.addCookies([
        {
          httpOnly: true,
          name: JWT_COOKIE_NAME,
          secure: true,
          url: SITE_URL,
          value: await signTestingAccountJwt(),
        },
      ])

      await use()
    },
    { auto: true },
  ],
})
