<template>
  <AppCard
    v-if="isShown"
    :aria-labelledby="templateIdTitle"
    class="flex items-start gap-3 p-4"
    role="region"
  >
    <div
      class="flex size-10 shrink-0 items-center justify-center rounded-full bg-line text-fg-1"
    >
      <AppIconBellAlert />
    </div>
    <div class="flex flex-1 flex-col gap-3">
      <div class="flex flex-col gap-1">
        <span :id="templateIdTitle" class="text-title3 text-balance">{{
          t('title')
        }}</span>
        <p class="text-body-small font-normal text-fg-2">
          {{
            context === 'event' ? t('descriptionEvent') : t('descriptionGuest')
          }}
        </p>
      </div>
      <div class="flex gap-2">
        <AppButton
          :aria-label="t('dismiss')"
          class="flex-1"
          size="small"
          variant="secondary"
          @click="dismissSoftAsk"
        >
          {{ t('dismiss') }}
        </AppButton>
        <AppButton
          :aria-label="t('confirm')"
          class="flex-1"
          :loading="isRequesting"
          size="small"
          @click="confirm"
        >
          {{ t('confirm') }}
        </AppButton>
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
// Shown only after the page it sits on requested it, so it follows an action the user just finished.
const { context } = defineProps<{
  context: 'event' | 'guest'
}>()

const { t } = useI18n()
const notificationStore = useNotificationStore()
const {
  dismissSoftAsk,
  isPermissionAskable,
  isSoftAskDismissed,
  isSoftAskRequested,
  refreshSoftAskDismissed,
} = useNotificationPrompt()
const templateIdTitle = useId()

const isMounted = ref(false)
const isRequesting = ref(false)
const isShown = computed(
  () =>
    isMounted.value &&
    isSoftAskRequested.value &&
    isPermissionAskable.value &&
    !isSoftAskDismissed.value,
)

const confirm = async () => {
  isRequesting.value = true

  try {
    await requestNotificationPermission(notificationStore)
  } finally {
    isRequesting.value = false
    // Granted or blocked, the question has been answered and must not return.
    isSoftAskRequested.value = false
  }
}

onMounted(() => {
  refreshSoftAskDismissed()
  isMounted.value = true
})
// A request belongs to the page that follows the action, so it must not wait around for another page that renders the card.
onBeforeUnmount(() => {
  isSoftAskRequested.value = false
})
</script>

<i18n lang="yaml">
de:
  confirm: Einschalten
  descriptionEvent: Erfahre sofort, wenn jemand zu- oder absagt, und verpasse keine Antwort auf deine Einladungen.
  descriptionGuest: Wir sagen dir Bescheid, wenn sich bei der Veranstaltung etwas ändert.
  dismiss: Nicht jetzt
  title: Benachrichtigungen einschalten?
en:
  confirm: Turn on
  descriptionEvent: Hear right away when someone accepts or cancels, so you never miss a reply to your invitations.
  descriptionGuest: We'll let you know when something about the event changes.
  dismiss: Not now
  title: Turn on notifications?
</i18n>
