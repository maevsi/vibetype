<template>
  <section :aria-labelledby="templateId" class="flex flex-col gap-3">
    <span :id="templateId" class="px-2 text-heading-medium text-balance">
      {{ heading }}
    </span>
    <AppAlert
      v-if="error"
      class="flex flex-col items-center gap-2"
      variant="error"
    >
      {{ t('loadError') }}
      <AppButton
        :aria-label="t('retry')"
        size="small"
        variant="secondary"
        @click="load"
      >
        {{ t('retry') }}
      </AppButton>
    </AppAlert>
    <AppLoaderPlaceholder v-else-if="!hasLoaded" />
    <AppCard v-else-if="!devices.length">
      <p class="p-2 text-body-small font-normal text-fg-2">
        {{ t('empty') }}
      </p>
    </AppCard>
    <AppCard v-else>
      <ul class="flex flex-col divide-y divide-line">
        <li
          v-for="device in devices"
          :key="device.id"
          class="flex items-center justify-between gap-4 p-2"
        >
          <div class="flex min-w-0 items-center gap-3">
            <div
              aria-hidden="true"
              class="flex size-10 shrink-0 items-center justify-center rounded-full bg-line text-fg-1"
            >
              <AppIconGooglePlay v-if="device.platform === 'android'" />
              <AppIconAppStore v-else-if="device.platform === 'ios'" />
              <AppIconGlobeAlt v-else />
            </div>
            <div class="flex min-w-0 flex-col">
              <span class="flex flex-wrap items-center gap-x-2 text-body">
                <span class="truncate">
                  {{ device.label ?? platformNames[device.platform] }}
                </span>
                <span
                  v-if="device.fcmToken === notificationStore.fcmToken"
                  class="rounded-full bg-line px-2 text-body-small font-normal text-fg-2"
                >
                  {{ t('thisDevice') }}
                </span>
              </span>
              <i18n-t
                class="text-body-small font-normal text-fg-2"
                keypath="lastSeen"
                tag="span"
              >
                <template #time>
                  <AppTime
                    :datetime="device.lastSeenAt"
                    :options="{ relative: true }"
                  />
                </template>
              </i18n-t>
            </div>
          </div>
          <AppButton
            :aria-label="
              t('remove', {
                device: device.label ?? platformNames[device.platform],
              })
            "
            :loading="pendingRowIds.includes(device.rowId)"
            size="icon"
            variant="secondary-critical"
            @click="remove(device)"
          >
            <AppIconTrash />
            <template #loading>
              <span class="sr-only">{{ t('removing') }}</span>
            </template>
          </AppButton>
        </li>
      </ul>
    </AppCard>
  </section>
</template>

<script setup lang="ts">
import type { DevicePlatform } from '~~/gql/generated/graphql'

const { t } = useI18n()
const notificationStore = useNotificationStore()
const templateId = useId()

const { devices, error, hasLoaded, load, pendingRowIds, remove } =
  useNotificationDevice()

const platformNames = computed((): Record<DevicePlatform, string> => ({
  android: t('platformAndroid'),
  ios: t('platformIos'),
  web: t('platformWeb'),
}))
const heading = computed(() =>
  hasLoaded.value
    ? t('heading', { count: devices.value.length }, devices.value.length)
    : t('headingLoading'),
)
</script>

<i18n lang="yaml">
de:
  empty: Auf keinem Gerät sind Push-Benachrichtigungen aktiv. Schalte sie auf einem Gerät ein, um sie dort zu erhalten.
  heading: Push auf keinem Gerät | Push auf einem Gerät | Push auf {count} Geräten
  headingLoading: Geräte mit Push
  lastSeen: Zuletzt aktiv {time}
  loadError: Die Geräte konnten nicht geladen werden.
  platformAndroid: Android
  platformIos: iOS
  platformWeb: Browser
  remove: '{device} entfernen'
  removing: Wird entfernt
  retry: Erneut versuchen
  thisDevice: Dieses Gerät
en:
  empty: No device receives push notifications. Turn them on on a device to get them there.
  heading: Push on no devices | Push on one device | Push on {count} devices
  headingLoading: Devices with push
  lastSeen: Last seen {time}
  loadError: The devices could not be loaded.
  platformAndroid: Android
  platformIos: iOS
  platformWeb: Web
  remove: Remove {device}
  removing: Removing
  retry: Try again
  thisDevice: This device
</i18n>
