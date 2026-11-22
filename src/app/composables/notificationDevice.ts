import { graphql } from '~~/gql/generated'
import type { AllDevicesQuery } from '~~/gql/generated/graphql'

const allDevicesQuery = graphql(`
  query AllDevices {
    allDevices(orderBy: LAST_SEEN_AT_DESC) {
      nodes {
        fcmToken
        id
        label
        lastSeenAt
        platform
        rowId
      }
    }
  }
`)

const deleteDeviceByRowIdMutation = graphql(`
  mutation DeleteDeviceByRowId($input: DeleteDeviceByRowIdInput!) {
    deleteDeviceByRowId(input: $input) {
      clientMutationId
    }
  }
`)

export type NotificationDeviceItem = NonNullable<
  AllDevicesQuery['allDevices']
>['nodes'][number]

export const useNotificationDevice = () => {
  const { $urql } = useNuxtApp()
  const { t } = useI18n({ useScope: 'global' })
  const alertError = useAlertError()
  const notificationStore = useNotificationStore()
  const store = useStore()

  const devices = ref<NotificationDeviceItem[]>([])
  const error = ref<Error>()
  const hasLoaded = ref(false)
  const pendingRowIds = ref<string[]>([])

  const load = async () => {
    if (!store.signedInAccountId) return

    const result = await $urql.value
      .query(allDevicesQuery, {}, { requestPolicy: 'network-only' })
      .toPromise()

    if (result.error || !result.data?.allDevices) {
      error.value = result.error ?? new Error(t('globalErrorNoData'))
    } else {
      error.value = undefined
      devices.value = result.data.allDevices.nodes
    }

    hasLoaded.value = true
  }

  const remove = async (device: NotificationDeviceItem) => {
    if (pendingRowIds.value.includes(device.rowId)) return

    pendingRowIds.value.push(device.rowId)

    try {
      const result = await $urql.value
        .mutation(deleteDeviceByRowIdMutation, {
          input: { rowId: device.rowId },
        })
        .toPromise()

      if (result.error) {
        alertError({
          error: result.error,
          messageI18n: t('globalErrorMessage'),
        })
        return
      }

      devices.value = devices.value.filter(({ id }) => id !== device.id)

      if (device.fcmToken === notificationStore.fcmToken) {
        notificationStore.deviceForget()
      }
    } finally {
      pendingRowIds.value.splice(pendingRowIds.value.indexOf(device.rowId), 1)
    }
  }

  if (import.meta.client) {
    onMounted(load)
    // The registration of this device finishes after the list may have loaded.
    watch(() => notificationStore.deviceRevision, load)
  }

  return { devices, error, hasLoaded, load, pendingRowIds, remove }
}
