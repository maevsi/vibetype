export default defineEventHandler(async () => {
  const { setJwtCookie } = await useJsonWebToken()

  setJwtCookie({ expires: 0 })
})
