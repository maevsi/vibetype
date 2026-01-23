export default defineEventHandler(async (event) => {
  const jwtPublicKey = await useJwtPublicKey()

  if (!jwtPublicKey) {
    return throwError({
      status: 500,
      statusText: 'The authentication key is not available!',
    })
  }

  setResponseHeader(event, 'content-type', 'text/plain')
  return jwtPublicKey
})
