type uuid = string

export type Jwt = {
  attendances: uuid[]
  exp: number
  guests: uuid[]
  jti: uuid
  role: `${SITE_NAME}_account` | `${SITE_NAME}_anonymous`
  sub: string
  username: string
}
