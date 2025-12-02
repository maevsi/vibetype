import { jwtVerify, importSPKI } from 'jose'

import { JWT_ALGORITHM } from '../constants' // TODO: remove import once shared namespace has proper auto-imports (https://github.com/nuxt/nuxt/issues/32714)

export const verifyJwt = async ({
  jwt,
  jwtPublicKey,
}: {
  jwt: string
  jwtPublicKey: string
}) =>
  await jwtVerify(jwt, await importSPKI(jwtPublicKey, JWT_ALGORITHM), {
    algorithms: [JWT_ALGORITHM],
    audience: 'postgraphile',
    issuer: 'postgraphile',
  })
