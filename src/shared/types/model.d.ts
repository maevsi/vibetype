import type { Language } from '~~/gql/generated/graphql'

export type uuid = string

export type Jwt = {
  attendances: uuid[]
  exp: number
  guests: uuid[]
  jti: uuid
  language?: Language | null
  role: `${SITE_NAME}_account` | `${SITE_NAME}_anonymous`
  sub: string
  username: string
}
