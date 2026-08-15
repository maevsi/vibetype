export default defineNitroPlugin((_nitroApp) => {
  const runtimeConfig = useRuntimeConfig()

  if (runtimeConfig.public.vio.isTesting) {
    process.env.NUXT_OG_IMAGE_SECRET = 'test'
  }
})
