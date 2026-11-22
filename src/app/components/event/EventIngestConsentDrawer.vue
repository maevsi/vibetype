<template>
  <AppDrawer v-model="isOpen">
    <div class="flex flex-col gap-2 pb-4 text-body text-fg-2">
      <p>{{ t('description') }}</p>
      <p>{{ t('details') }}</p>
      <AppLink is-underlined :to="localePath('docs-legal-privacy')">
        {{ t('privacyPolicy') }}
      </AppLink>
    </div>
    <template #title>{{ t('title') }}</template>
    <template #footer>
      <AppButton :aria-label="t('allow')" @click="allow">
        {{ t('allow') }}
      </AppButton>
      <AppButton
        :aria-label="t('cancel')"
        variant="tertiary"
        @click="isOpen = false"
      >
        {{ t('cancel') }}
      </AppButton>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  allowed: []
}>()

const isOpen = defineModel<boolean>()

const { t } = useI18n()
const localePath = useLocalePath()
const { give } = useEventIngestConsent()

const allow = () => {
  give()
  isOpen.value = false
  emit('allowed')
}
</script>

<i18n lang="yaml">
de:
  allow: Erlauben
  cancel: Abbrechen
  description: Um die Veranstaltung für Dich auszufüllen, sendet unser Server das Foto des Plakats oder den Text der verlinkten Seite an OpenAI in den USA, wo ein KI-Modell die Angaben ausliest.
  details: OpenAI erhält keine Angaben zu Deinem Konto und nutzt die Daten nicht zum Training. Du kannst diese Erlaubnis jederzeit in den Datenschutz-Einstellungen widerrufen.
  privacyPolicy: Datenschutzerklärung
  title: Plakate mit KI lesen?
en:
  allow: Allow
  cancel: Cancel
  description: To fill in the event for you, our server sends the poster photo or the linked page's text to OpenAI in the USA, where an AI model reads out the details.
  details: OpenAI gets no details of your account and doesn't use the data for training. You can withdraw this permission at any time in the privacy settings.
  privacyPolicy: Privacy policy
  title: Read posters with AI?
</i18n>
