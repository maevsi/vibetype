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

const allow = () => {
  isOpen.value = false
  emit('allowed')
}
</script>

<i18n lang="yaml">
de:
  allow: Erlauben
  cancel: Abbrechen
  description: Damit Du nicht alles abtippen musst, senden wir das Foto des Plakats oder den Text der verlinkten Seite an OpenAI in den USA. Deren KI liest die Angaben aus und füllt die Veranstaltung für Dich aus.
  details: 'Dein Konto bleibt privat: OpenAI erfährt nichts darüber und nutzt das Gesendete nicht zum Training. Du kannst diese Erlaubnis jederzeit in den Datenschutz-Einstellungen widerrufen.'
  privacyPolicy: Datenschutzerklärung
  title: Plakate mit KI lesen?
en:
  allow: Allow
  cancel: Cancel
  description: So you don't have to type everything yourself, we send the poster photo or the linked page's text to OpenAI in the USA. Their AI reads out the details and fills in the event for you.
  details: "Your account stays private: OpenAI learns nothing about it and doesn't use what you send for training. You can withdraw this permission anytime in the privacy settings."
  privacyPolicy: Privacy policy
  title: Read posters with AI?
</i18n>
