<template>
  <div
    :aria-label="t('ariaLabel', { score: clampedScore })"
    class="rounded-[20px] bg-(--accent-strong) px-3 py-2"
    role="img"
  >
    <span class="text-xs leading-4 font-semibold text-white">{{
      t('score', { score: clampedScore })
    }}</span>
  </div>
</template>

<script setup lang="ts">
const { score } = defineProps<{ score: number }>()
const { t } = useI18n()

const clampedScore = computed(() => Math.min(100, Math.max(0, score)))
</script>

<i18n lang="yaml">
de:
  ariaLabel: 'Übereinstimmung: {score}%'
  score: '{score}%'
en:
  ariaLabel: 'Match score: {score}%'
  score: '{score}%'
</i18n>
