<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <ClientOnly>
        <ConsentSettings @decided="onDecided">
          <section class="flex flex-col gap-3">
            <h2 class="text-caption text-fg-2 uppercase">
              {{ t('aiFeatures') }}
            </h2>
            <div
              class="flex items-start gap-4 rounded-medium bg-surface-raised p-4"
            >
              <div class="flex min-w-0 flex-1 flex-col gap-1">
                <label class="text-body font-semibold" :for="templateIdSwitch">
                  {{ t('eventIngestTitle') }}
                </label>
                <p :id="templateIdDescription" class="text-caption text-fg-2">
                  {{ t('eventIngestDescription') }}
                </p>
              </div>
              <Switch
                :id="templateIdSwitch"
                :aria-describedby="templateIdDescription"
                :model-value="isEventIngestConsentGiven"
                @update:model-value="onEventIngestConsentToggle"
              />
            </div>
          </section>
        </ConsentSettings>
      </ClientOnly>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

const {
  give: eventIngestConsentGive,
  isGiven: isEventIngestConsentGiven,
  withdraw: eventIngestConsentWithdraw,
} = useEventIngestConsent()

const onDecided = () => toast.success(t('saved'))
const onEventIngestConsentToggle = (isOn: boolean) => {
  if (isOn) eventIngestConsentGive()
  else eventIngestConsentWithdraw()

  toast.success(t('saved'))
}

// template
const templateIdDescription = useId()
const templateIdSwitch = useId()
</script>

<i18n lang="yaml">
de:
  aiFeatures: KI-Funktionen
  eventIngestDescription: 'Spart Dir das Abtippen: Die Plakatjagd sendet Fotos von Plakaten und den Text verlinkter Seiten an OpenAI, deren KI die Veranstaltung für Dich ausfüllt.'
  eventIngestTitle: Plakate mit KI lesen
  saved: Gespeichert
  title: Datenschutz-Einstellungen
en:
  aiFeatures: AI features
  eventIngestDescription: 'Saves you the typing: poster hunting sends poster photos and the text of linked pages to OpenAI, whose AI fills in the event for you.'
  eventIngestTitle: Read posters with AI
  saved: Saved
  title: Privacy settings
</i18n>
