export default defineNuxtPlugin(() => {
  if (hasAttCapability) {
    const cookieControl = useCookieControl()
    registerIosTrackingCallbackHandler(cookieControl)
  }
})
