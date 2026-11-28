<template>
  <AppDrawer v-model="isOpen">
    <form
      :id="templateIdForm"
      class="flex flex-col gap-4 pb-4"
      @submit.prevent="send"
    >
      <p class="text-body text-fg-2">
        {{ t('description', { name: submission?.name || t('nameUnknown') }) }}
      </p>
      <div class="flex flex-col gap-2">
        <label class="text-body-small" :for="templateIdContact">
          {{ t('organizerContact') }}
        </label>
        <AppInput
          :id="templateIdContact"
          v-model="organizerContact"
          :aria-describedby="templateIdContactHint"
          maxlength="1000"
          :placeholder="t('organizerContactPlaceholder')"
          type="text"
        />
        <p :id="templateIdContactHint" class="text-caption text-fg-2">
          {{ t('organizerContactHint') }}
        </p>
      </div>
    </form>
    <template #title>{{ t('title') }}</template>
    <template #footer>
      <AppButton
        :aria-label="t('send')"
        :form="templateIdForm"
        :loading="isSending"
        type="submit"
      >
        {{ t('send') }}
      </AppButton>
      <AppButton
        :aria-label="t('own')"
        :disabled="isSending"
        variant="secondary"
        @click="own"
      >
        {{ t('own') }}
      </AppButton>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
import { FetchError } from 'ofetch'

const { submission = undefined } = defineProps<{
  submission?: EventSubmission
}>()

const emit = defineEmits<{
  own: []
  sent: []
}>()

const isOpen = defineModel<boolean>()

const { t } = useI18n()
const alertError = useAlertError()
const { $csrfFetch } = useNuxtApp()

// data
const isSending = ref(false)
const organizerContact = ref('')

// methods
const own = () => {
  isOpen.value = false
  emit('own')
}
const send = async () => {
  if (!submission) return

  isSending.value = true

  try {
    await $csrfFetch('/api/service/zammad/event', {
      body: {
        ...submission,
        organizerContact: organizerContact.value.trim() || undefined,
      },
      method: 'POST',
    })
    isOpen.value = false
    organizerContact.value = ''
    emit('sent')
  } catch (error) {
    alertError({
      ...(error instanceof Error ? { error } : {}),
      messageI18n:
        error instanceof FetchError && error.statusCode === 429
          ? t('errorLimitReached')
          : t('errorSendFailed'),
    })
  } finally {
    isSending.value = false
  }
}

// template
const templateIdContact = useId()
const templateIdContactHint = useId()
const templateIdForm = useId()
</script>

<i18n lang="yaml">
de:
  description: Wenn Du „{name}“ nicht selbst veranstaltest, schick die Veranstaltung an uns. Wir sprechen die Veranstaltenden an, statt sie unter Deinem Namen zu veröffentlichen.
  errorLimitReached: Du hast heute schon viele Veranstaltungen geschickt. Versuche es morgen erneut.
  errorSendFailed: Die Veranstaltung konnte nicht gesendet werden.
  nameUnknown: diese Veranstaltung
  organizerContact: Kontakt der Veranstaltenden (optional)
  organizerContactHint: Wir nutzen ihn nur, um die Veranstaltenden auf @.upper:{'globalSiteName'} einzuladen.
  organizerContactPlaceholder: E-Mail, Webseite oder Instagram
  own: Ich veranstalte sie
  send: An @.upper:{'globalSiteName'} senden
  title: Veranstaltest Du das?
en:
  description: If you don't organize "{name}" yourself, send the event to us. We'll reach out to its organizers instead of publishing it under your name.
  errorLimitReached: You've already sent many events today. Try again tomorrow.
  errorSendFailed: The event could not be sent.
  nameUnknown: this event
  organizerContact: Organizer contact (optional)
  organizerContactHint: We only use it to invite the organizers to @.upper:{'globalSiteName'}.
  organizerContactPlaceholder: Email, website or Instagram
  own: I organize it
  send: Send to @.upper:{'globalSiteName'}
  title: Is this your event?
</i18n>
