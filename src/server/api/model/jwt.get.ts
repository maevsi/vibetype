export default defineEventHandler(async () => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwt = getJwtFromCookie()

  const jwtDecoded = await verifyJwt<Jwt>(jwt)
  return {
    jwtDecoded,
  }
})
