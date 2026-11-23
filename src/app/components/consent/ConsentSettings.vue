<template>
  <div class="flex flex-col gap-6">
    <ul class="flex flex-col gap-3">
      <li
        v-for="purpose in purposes"
        :key="purpose.id"
        class="flex items-start gap-4 rounded-medium bg-surface-raised p-4"
      >
        <div class="flex min-w-0 flex-1 flex-col gap-1">
          <label class="text-body font-semibold" :for="`${id}-${purpose.id}`">
            {{ purpose.title }}
          </label>
          <p
            :id="`${id}-${purpose.id}-description`"
            class="text-caption text-fg-2"
          >
            {{ purpose.description }}
          </p>
        </div>
        <Switch
          :id="`${id}-${purpose.id}`"
          :aria-describedby="`${id}-${purpose.id}-description`"
          :model-value="selection.includes(purpose.id)"
          @update:model-value="(isOn) => toggle(purpose.id, isOn)"
        />
      </li>
    </ul>
    <div class="flex flex-col gap-2">
      <AppButton :aria-label="t('allowAll')" @click="decide(allowAll)">
        {{ t('allowAll') }}
      </AppButton>
      <AppButton
        :aria-label="t('allowNecessaryOnly')"
        @click="decide(allowNecessaryOnly)"
      >
        {{ t('allowNecessaryOnly') }}
      </AppButton>
      <AppButton
        v-if="isChanged"
        :aria-label="t('save')"
        variant="secondary"
        @click="decide(() => save(selection))"
      >
        {{ t('save') }}
      </AppButton>
    </div>
    <AppLink
      class="self-center"
      is-underlined
      :to="localePath('docs-legal-privacy')"
    >
      {{ t('privacyPolicy') }}
    </AppLink>
  </div>
</template>

<script setup lang="ts">
import { GTAG_COOKIE_ID, SENTRY_COOKIE_ID } from '~~/node/static'

const emit = defineEmits<{
  decided: []
}>()

const { t } = useI18n()
const id = useId()
const localePath = useLocalePath()
const { allowAll, allowNecessaryOnly, enabledPurposeIds, save } =
  usePrivacyConsent()

const purposes = computed(() => [
  {
    description: t('analyticsDescription'),
    id: GTAG_COOKIE_ID,
    title: t('analyticsTitle'),
  },
  {
    description: t('errorAnalysisDescription'),
    id: SENTRY_COOKIE_ID,
    title: t('errorAnalysisTitle'),
  },
])

const selection = ref<string[]>([...enabledPurposeIds.value])
const isChanged = computed(
  () =>
    selection.value.length !== enabledPurposeIds.value.length ||
    selection.value.some(
      (purposeId) => !enabledPurposeIds.value.includes(purposeId),
    ),
)

// a decision made elsewhere, e.g. in another open tab's cookies after reload, resets the switches
watch(enabledPurposeIds, (purposeIds) => (selection.value = [...purposeIds]))

const toggle = (purposeId: string, isOn: boolean) => {
  selection.value = isOn
    ? [...selection.value, purposeId]
    : selection.value.filter((current) => current !== purposeId)
}

const decide = (action: () => void) => {
  action()
  emit('decided')
}
</script>

<i18n lang="yaml">
de:
  allowAll: Alle erlauben
  allowNecessaryOnly: Nur Notwendiges
  analyticsDescription: Hilft uns, @.upper:{'globalSiteName'} besser zu machen, indem es zeigt, welche Funktionen genutzt werden. Die Nutzungsdaten gehen an Google, mit ausgeschalteten Werbefunktionen.
  analyticsTitle: Nutzungsanalyse
  errorAnalysisDescription: Hilft uns, Fehler schneller zu finden und zu beheben, indem Deine Bedienschritte, Bildschirminhalte und Ladezeiten aufgezeichnet werden. Diese Daten gehen an Sentry.
  errorAnalysisTitle: Fehleranalyse
  privacyPolicy: Datenschutzerklärung
  save: Auswahl speichern
en:
  allowAll: Allow all
  allowNecessaryOnly: Only necessary
  analyticsDescription: Helps us make @.upper:{'globalSiteName'} better by showing which features people use. The usage data goes to Google, with advertising features turned off.
  analyticsTitle: Usage analytics
  errorAnalysisDescription: Helps us find and fix errors faster by recording your steps, what's on screen and how fast pages load. This data goes to Sentry.
  errorAnalysisTitle: Error analysis
  privacyPolicy: Privacy policy
  save: Save selection
</i18n>
