export default defineEventHandler(async () => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwt = getJwtFromCookie()

  const jwtPayload = await verifyJwt<Jwt>(jwt)
  return {
    jwtPayload,
  }
})
