export default defineEventHandler(async () => {
  const { setJwtCookie } = await useJsonWebToken()

  setJwtCookie('')
})
