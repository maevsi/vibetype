export default defineEventHandler(async (event) => {
  const jwtPublicKey = await useJwtPublicKey()

  if (!jwtPublicKey) {
    return throwError({
      statusCode: 500,
      statusMessage: 'The authentication key is not available!',
    })
  }

  setResponseHeader(event, 'content-type', 'text/plain')
  return jwtPublicKey
})
