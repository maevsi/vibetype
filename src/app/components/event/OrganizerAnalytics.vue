<template>
  <section class="flex flex-col gap-4">
    <TypographyH3>{{ t('title') }}</TypographyH3>

    <div class="grid grid-cols-3 gap-3">
      <div class="flex flex-col gap-1 rounded-2xl bg-(--neutral-level-1) p-4">
        <TypographySubtitleSmall class="text-(--semantic-base-text-secondary)">
          {{ t('views') }}
        </TypographySubtitleSmall>
        <span class="text-2xl font-bold text-(--accent-strong)">
          {{ metrics?.views ?? 0 }}
        </span>
      </div>

      <div class="flex flex-col gap-1 rounded-2xl bg-(--neutral-level-1) p-4">
        <TypographySubtitleSmall class="text-(--semantic-base-text-secondary)">
          {{ t('rsvps') }}
        </TypographySubtitleSmall>
        <span class="text-2xl font-bold text-(--accent-strong)">
          {{ metrics?.rsvps ?? 0 }}
        </span>
      </div>

      <div class="flex flex-col gap-1 rounded-2xl bg-(--neutral-level-1) p-4">
        <TypographySubtitleSmall class="text-(--semantic-base-text-secondary)">
          {{ t('saves') }}
        </TypographySubtitleSmall>
        <span class="text-2xl font-bold text-(--accent-strong)">
          {{ metrics?.saves ?? 0 }}
        </span>
      </div>
    </div>

    <div
      :aria-label="t('chartLabel')"
      class="flex h-32 items-end gap-1.5 rounded-2xl bg-(--neutral-level-1) p-4"
      role="img"
    >
      <div
        v-for="i in 7"
        :key="i"
        :aria-label="t('chartBarLabel', { day: i, height: barHeight(i - 1) })"
        class="flex-1 rounded-t-md bg-(--accent-strong)"
        :style="{ height: barHeight(i - 1) + '%' }"
      />
    </div>

    <TypographySubtitleSmall class="text-(--semantic-base-text-secondary)">
      {{ t('disclaimer') }}
    </TypographySubtitleSmall>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  metrics?: {
    rsvps?: number
    saves?: number
    views?: number
  }
}>()

const barHeight = (i: number): number => {
  return 30 + ((i * 17) % 65)
}
</script>

<i18n lang="yaml">
de:
  chartBarLabel: 'Tag {day}: {height} %'
  chartLabel: Aktivität der letzten 7 Tage (Vorschau)
  disclaimer: Demodaten - Backend folgt.
  rsvps: Zusagen
  saves: Favoriten
  title: Analysen
  views: Aufrufe
en:
  chartBarLabel: 'Day {day}: {height}%'
  chartLabel: Last 7 days activity (preview)
  disclaimer: Demo data - backend coming soon.
  rsvps: RSVPs
  saves: Saves
  title: Analytics
  views: Views
</i18n>
