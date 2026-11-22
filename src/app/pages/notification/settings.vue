<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-6">
        <section
          :aria-labelledby="templateIdDevice"
          class="flex flex-col gap-3"
        >
          <span
            :id="templateIdDevice"
            class="px-2 text-heading-medium text-balance"
          >
            {{ t('device') }}
          </span>
          <NotificationPermission />
        </section>
        <NotificationDeviceList />
        <section :aria-labelledby="templateIdTypes" class="flex flex-col gap-3">
          <span
            :id="templateIdTypes"
            class="px-2 text-heading-medium text-balance"
          >
            {{ t('types') }}
          </span>
          <p class="px-2 text-body-small font-normal text-fg-2">
            {{ t('typesDescription') }}
          </p>
          <NotificationPreferenceList />
        </section>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
useFeatureRequired('notifications')

// validation
await useSignInRequired()

const { t } = useI18n()
const templateIdDevice = useId()
const templateIdTypes = useId()

const title = t('title')
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  device: Dieses Gerät
  title: Benachrichtigungseinstellungen
  types: Worüber du informiert wirst
  typesDescription: Die Auswahl gilt für Push-Benachrichtigungen auf all deinen Geräten. In der App erscheinen alle Benachrichtigungen weiterhin.
en:
  device: This device
  title: Notification settings
  types: What you hear about
  typesDescription: Your choice applies to push notifications on all your devices. Every notification still appears in the app.
</i18n>
