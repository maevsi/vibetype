<template>
  <div class="flex flex-1 flex-col gap-6">
    <LayoutPageTitle :title />
    <LayoutCallToAction
      v-if="!store.signedInAccountId"
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
    <AppFeature v-else feature="notifications">
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
    </AppFeature>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const store = useStore()
const templateIdDevice = useId()
const templateIdTypes = useId()

const title = t('title')
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  anonymousCta: Anmelden
  anonymousCtaDescription: Melde dich an, um deine Benachrichtigungen einzustellen.
  device: Dieses Gerät
  title: Benachrichtigungseinstellungen
  types: Worüber du informiert wirst
  typesDescription: Die Auswahl gilt für Push-Benachrichtigungen auf all deinen Geräten. In der App erscheinen alle Benachrichtigungen weiterhin.
en:
  anonymousCta: Sign in
  anonymousCtaDescription: Sign in to manage your notifications.
  device: This device
  title: Notification settings
  types: What you hear about
  typesDescription: Your choice applies to push notifications on all your devices. Every notification still appears in the app.
</i18n>
