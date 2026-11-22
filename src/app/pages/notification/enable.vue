<template>
  <LayoutPage>
    <div class="flex flex-1 flex-col justify-center gap-6">
      <div
        class="flex size-16 items-center justify-center rounded-full bg-surface-raised text-link"
      >
        <AppIconBellAlert class="size-8" />
      </div>
      <div class="flex flex-col gap-3">
        <h1>
          <span class="text-heading-medium text-balance">{{ t('title') }}</span>
        </h1>
        <p class="text-body font-normal text-fg-2">
          {{ t('description') }}
        </p>
        <p class="text-body-small font-normal text-fg-3">
          {{ t('hint') }}
        </p>
      </div>
    </div>
    <template #bottom>
      <AppButton
        :aria-label="t('turnOn')"
        class="w-full max-w-md"
        :loading="isRequesting"
        @click="turnOn"
      >
        {{ t('turnOn') }}
      </AppButton>
      <AppButton
        :aria-label="t('skip')"
        class="w-full max-w-md"
        :disabled="isRequesting"
        variant="secondary"
        @click="skip"
      >
        {{ t('skip') }}
      </AppButton>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

const { t } = useI18n()
const localePath = useLocalePath()
const notificationStore = useNotificationStore()
const route = useRoute()
const { markOnboardingSeen } = useNotificationPrompt()

const to = computed(() =>
  typeof route.query.to === 'string' && getIsSitePath(route.query.to)
    ? route.query.to
    : localePath('dashboard'),
)
const continueOn = () => navigateTo(to.value, { replace: true })

// The page is shown once, so landing here already counts as seen.
onMounted(() => {
  markOnboardingSeen()

  // Nothing is left to ask once the permission was decided elsewhere.
  if (
    notificationStore.permissionState &&
    notificationStore.permissionState !== 'prompt'
  )
    continueOn()
})

const isRequesting = ref(false)
const turnOn = async () => {
  isRequesting.value = true

  try {
    await requestNotificationPermission(notificationStore)
  } catch (error) {
    console.warn('Failed to request the notification permission.', error)
  } finally {
    isRequesting.value = false
  }

  await continueOn()
}
const skip = () => continueOn()

const title = t('title')
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  description: Schalte Benachrichtigungen ein und erfahre sofort von neuen Einladungen, Antworten und Freundschaftsanfragen. Keine Sorge, wir schicken keinen Spam.
  hint: Du kannst das jederzeit in den Einstellungen ändern.
  skip: Überspringen
  title: Bleib auf dem Laufenden
  turnOn: Benachrichtigungen einschalten
en:
  description: Turn on notifications and hear right away about new invitations, replies and friend requests. Don't worry, we won't send you spam.
  hint: You can change this anytime in the settings.
  skip: Skip
  title: Stay updated
  turnOn: Turn on notifications
</i18n>
