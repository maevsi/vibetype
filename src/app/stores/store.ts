import * as Sentry from '@sentry/nuxt'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(SITE_NAME, () => {
  const localePath = useLocalePath()
  const router = useRouter()
  const runtimeConfig = useRuntimeConfig()

  // const jwt = ref<string>() // we don't store the JWT itself for security reasons
  const jwtPayload = ref<Jwt>()
  const signedInAccountId = ref<string>()
  const signedInUsername = ref<string>()

  const jwtRemove = () => {
    jwtSet(undefined)
    Sentry.setUser(null)
  }

  const jwtSet = (jwtPayloadNew?: Jwt) => {
    if (
      jwtPayloadNew?.role === `${SITE_NAME}_account` &&
      jwtPayloadNew.exp !== undefined &&
      jwtPayloadNew.exp > Math.floor(Date.now() / 1000)
    ) {
      jwtPayload.value = jwtPayloadNew
      signedInAccountId.value = jwtPayloadNew.sub as string | undefined
      signedInUsername.value = jwtPayloadNew.username as string | undefined

      // the sign-out keeps clearing the user, so a disabled tracking never leaves stale user data on the sentry project
      if (runtimeConfig.public.sentry.features.userTracking) {
        Sentry.setUser({
          id: jwtPayloadNew.sub as string | undefined,
          username: jwtPayloadNew.username as string | undefined,
        })
      }
    } else {
      jwtPayload.value = undefined
      signedInAccountId.value = undefined
      signedInUsername.value = undefined

      Sentry.setUser(null)
    }
  }

  // the browser's history is the only one that also knows about its own back button, deep links and replaced redirects, while `back` is the previous in-app entry vue-router records in it
  const navigateBack = () =>
    window.history.state?.back
      ? router.back()
      : navigateTo(localePath(signedInUsername.value ? 'dashboard' : 'index'), {
          replace: true,
        })

  return {
    jwtPayload,
    signedInAccountId,
    signedInUsername,
    jwtRemove,
    jwtSet,
    navigateBack,
  }
})
