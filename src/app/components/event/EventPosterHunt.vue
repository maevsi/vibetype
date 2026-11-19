<template>
  <section
    :aria-labelledby="templateId"
    class="flex flex-col gap-4 rounded-medium bg-surface-raised p-2"
  >
    <div class="flex flex-col gap-1 px-2 pt-2">
      <h2 :id="templateId" class="text-headline">
        {{ t('posterHuntTitle') }}
      </h2>
      <p class="text-body-small text-fg-2">
        {{ t('posterHuntDescription') }}
      </p>
    </div>
    <div
      class="grid gap-2"
      :class="isLinkAvailable ? 'grid-cols-3' : 'grid-cols-2'"
    >
      <AppButton
        :aria-label="t('posterHuntPhoto')"
        class="h-15 flex-col justify-center gap-1 rounded-small p-2 text-caption"
        size="none"
        :to="localePath('event-ingest-image')"
      >
        <AppIconCamera />
        {{ t('posterHuntPhoto') }}
      </AppButton>
      <AppButton
        :aria-label="t('posterHuntImage')"
        class="h-15 flex-col justify-center gap-1 rounded-small bg-surface p-2 text-caption text-fg-1"
        size="none"
        :to="localePath('event-ingest-image')"
        variant="ghost"
      >
        <AppIconArrowUpTray />
        {{ t('posterHuntImage') }}
      </AppButton>
      <AppButton
        v-if="isLinkAvailable"
        :aria-label="t('posterHuntLink')"
        class="h-15 flex-col justify-center gap-1 rounded-small bg-surface p-2 text-caption text-fg-1"
        size="none"
        :to="localePath('event-ingest-url')"
        variant="ghost"
      >
        <AppIconLink />
        {{ t('posterHuntLink') }}
      </AppButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const templateId = useId()

// the link page only exists in development
const isLinkAvailable = import.meta.dev
</script>

<i18n lang="yaml">
de:
  posterHuntDescription: Du hast eine spannende Veranstaltung außerhalb von @.upper:{'globalSiteName'} gesehen?
  posterHuntImage: Bild hochladen
  posterHuntLink: Link angeben
  posterHuntPhoto: Foto aufnehmen
  posterHuntTitle: Plakatjagd
en:
  posterHuntDescription: Saw an interesting event outside of @.upper:{'globalSiteName'}?
  posterHuntImage: Upload image
  posterHuntLink: Provide link
  posterHuntPhoto: Take photo
  posterHuntTitle: Poster hunting
</i18n>
