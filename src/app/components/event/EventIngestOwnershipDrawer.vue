<template>
  <AppDrawer v-model="isOpen" @close="onClose">
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
        variant="tertiary"
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
// emitted only once the drawer has closed, as removing its history entry would cancel a navigation started before
let outcome: 'own' | 'sent' | undefined

// methods
const onClose = () => {
  if (outcome === 'own') emit('own')
  if (outcome === 'sent') emit('sent')
  outcome = undefined
}
const own = () => {
  outcome = 'own'
  isOpen.value = false
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
    organizerContact.value = ''
    outcome = 'sent'
    isOpen.value = false
  } catch (error) {
    alertError({
      ...(error instanceof Error ? { error } : {}),
      messageI18n:
        error instanceof FetchError && error.statusCode === 429
          ? t('errorLimitReached')
          : error instanceof FetchError &&
              error.statusText === MODERATION_ERROR_CODE
            ? t('globalErrorModerated')
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
  description: Schick uns „{name}“. Nehmen wir sie an, bekommst Du Punkte für Vorteile bei Partner-Veranstaltungen. Punkte gibt es bald, dieser Fund zählt schon.
  errorLimitReached: Du hast heute schon viel eingesendet, danke! Versuche es morgen erneut.
  errorSendFailed: Deine Einsendung konnte nicht gesendet werden.
  nameUnknown: diese Veranstaltung
  organizerContact: Kontakt der Veranstaltenden (optional)
  organizerContactHint: Nicht Deiner. Wir laden damit die Veranstaltenden ein.
  organizerContactPlaceholder: E-Mail, Webseite oder Instagram
  own: Ich veranstalte das selbst
  send: Einsenden und Punkte sammeln
  title: Sammle Punkte für Deinen Fund
en:
  description: Send us "{name}". If we accept it, you earn points for perks at partner events. Points start soon, and this find already counts.
  errorLimitReached: You've submitted a lot today, thanks! Try again tomorrow.
  errorSendFailed: Your submission could not be sent.
  nameUnknown: this event
  organizerContact: Organizer's contact (optional)
  organizerContactHint: Not yours. We use it to invite the organizers.
  organizerContactPlaceholder: Email, website or Instagram
  own: I organize this myself
  send: Submit and earn points
  title: Earn points for your find
</i18n>
