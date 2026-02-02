export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hookOnce('close', () => {
    transporter.close()
  })
})
