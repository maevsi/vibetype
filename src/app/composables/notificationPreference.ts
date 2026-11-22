import { graphql } from '~~/gql/generated'
import type { AllPreferenceNotificationsQuery } from '~~/gql/generated/graphql'

const allPreferenceNotificationsQuery = graphql(`
  query AllPreferenceNotifications {
    allPreferenceNotifications {
      nodes {
        accountId
        id
        isPushEnabled
        rowId
        type
      }
    }
  }
`)

const createPreferenceNotificationMutation = graphql(`
  mutation CreatePreferenceNotification(
    $input: CreatePreferenceNotificationInput!
  ) {
    createPreferenceNotification(input: $input) {
      preferenceNotification {
        accountId
        id
        isPushEnabled
        rowId
        type
      }
    }
  }
`)

const updatePreferenceNotificationMutation = graphql(`
  mutation UpdatePreferenceNotificationByRowId(
    $input: UpdatePreferenceNotificationByRowIdInput!
  ) {
    updatePreferenceNotificationByRowId(input: $input) {
      preferenceNotification {
        accountId
        id
        isPushEnabled
        rowId
        type
      }
    }
  }
`)

type PreferenceNotificationItem = NonNullable<
  AllPreferenceNotificationsQuery['allPreferenceNotifications']
>['nodes'][number]

// A missing row means push is enabled, so only a switched off type has to be stored.
export const useNotificationPreference = () => {
  const { $urql } = useNuxtApp()
  const { t } = useI18n({ useScope: 'global' })
  const alertError = useAlertError()
  const store = useStore()

  const error = ref<Error>()
  const hasLoaded = ref(false)
  const preferences = ref<PreferenceNotificationItem[]>([])
  const pendingTypes = ref<NotificationTypeName[]>([])

  const load = async () => {
    if (!store.signedInAccountId) return

    const result = await $urql.value
      .query(
        allPreferenceNotificationsQuery,
        {},
        { requestPolicy: 'network-only' },
      )
      .toPromise()

    if (result.error || !result.data?.allPreferenceNotifications) {
      error.value = result.error ?? new Error(t('globalErrorNoData'))
    } else {
      error.value = undefined
      preferences.value = result.data.allPreferenceNotifications.nodes
    }

    hasLoaded.value = true
  }

  const isPushEnabled = (type: NotificationTypeName) =>
    preferences.value.find((preference) => preference.type === type)
      ?.isPushEnabled ?? true

  const setPushEnabled = async (
    type: NotificationTypeName,
    isEnabled: boolean,
  ) => {
    const accountId = store.signedInAccountId
    const existing = preferences.value.find(
      (preference) => preference.type === type,
    )

    if (!accountId || pendingTypes.value.includes(type)) return

    pendingTypes.value.push(type)

    try {
      const { error: mutationError, saved } = existing
        ? await $urql.value
            .mutation(updatePreferenceNotificationMutation, {
              input: {
                preferenceNotificationPatch: { isPushEnabled: isEnabled },
                rowId: existing.rowId,
              },
            })
            .toPromise()
            .then((result) => ({
              error: result.error,
              saved:
                result.data?.updatePreferenceNotificationByRowId
                  ?.preferenceNotification,
            }))
        : await $urql.value
            .mutation(createPreferenceNotificationMutation, {
              input: {
                preferenceNotification: {
                  accountId,
                  isPushEnabled: isEnabled,
                  type,
                },
              },
            })
            .toPromise()
            .then((result) => ({
              error: result.error,
              saved:
                result.data?.createPreferenceNotification
                  ?.preferenceNotification,
            }))

      if (!saved) {
        alertError({
          error: mutationError,
          messageI18n: t('globalErrorMessage'),
        })
        return
      }

      preferences.value = [
        ...preferences.value.filter(
          (preference) => preference.rowId !== saved.rowId,
        ),
        saved,
      ]
    } finally {
      pendingTypes.value.splice(pendingTypes.value.indexOf(type), 1)
    }
  }

  if (import.meta.client) onMounted(load)

  return { error, hasLoaded, isPushEnabled, load, pendingTypes, setPushEnabled }
}
