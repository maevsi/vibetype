import * as Sentry from '@sentry/nuxt'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteNamedMapI18n } from 'vue-router/auto-routes'

import type { Modal } from '~/types/modal'

export const useStore = defineStore(SITE_NAME, () => {
  const localePath = useLocalePath()

  // const jwt = ref<string>() // we don't store the JWT itself for security reasons
  const jwtPayload = ref<Jwt>()
  const modals = ref<Modal[]>([])
  const routeHistory = ref<string[]>([])
  const routeHistoryDisabled = ref<boolean>(false)
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

      Sentry.setUser({
        id: jwtPayloadNew.sub as string | undefined,
        username: jwtPayloadNew.username as string | undefined,
      })
    } else {
      jwtPayload.value = undefined
      signedInAccountId.value = undefined
      signedInUsername.value = undefined

      Sentry.setUser(null)
    }
  }

  const modalRemove = (modalId: string) => {
    modals.value = modals.value.filter((modal) => {
      return modal.id !== modalId
    })
  }

  const navigateBack = async () => {
    routeHistoryDisabled.value = true
    await navigateTo(
      localePath(
        (routeHistory.value.pop() as keyof RouteNamedMapI18n) || 'index',
      ),
    )
    routeHistoryDisabled.value = false
  }

  return {
    jwtPayload,
    modals,
    routeHistory,
    routeHistoryDisabled,
    signedInAccountId,
    signedInUsername,
    jwtRemove,
    jwtSet,
    modalRemove,
    navigateBack,
  }
})
