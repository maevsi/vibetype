// nuxt-csurf otherwise encrypts tokens with a key generated at build time, which every deployment replaces, so pages opened before it fail with `403 CSRF Token Mismatch` // TODO: remove once nuxt-csurf derives its key from `appSecret` itself
export default defineNitroPlugin(() => {
  // a production build that is not given `NUXT_APP_SECRET` keeps the build's key
  const { appSecret } = useRuntimeConfig()

  if (process.env.NUXT_CSURF_ENCRYPT_SECRET || !appSecret) return

  // each request reads its runtime config from the environment anew, whereas the shared config is frozen
  process.env.NUXT_CSURF_ENCRYPT_SECRET = getCsrfEncryptSecret(appSecret)
})
