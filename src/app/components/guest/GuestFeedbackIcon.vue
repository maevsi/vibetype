<template>
  <AppIconCheckCircleSolid
    v-if="feedback === 'ACCEPTED'"
    class="text-green-600"
    :title="t('feedbackAccepted')"
  />
  <AppIconXCircleSolid
    v-else-if="feedback === 'CANCELED'"
    class="text-(--semantic-critic-text)"
    :title="t('feedbackCanceled')"
  />
  <!-- TODO: check if can be replaced with `AppIconQuestionMarkCircle` -->
  <AppIconQuestionMarkCircleSolid
    v-else-if="feedback === null"
    class="text-gray-600"
    :title="t('feedbackNone')"
  />
  <AppIconBugAnt v-else :title="t('bug')" />
</template>

<script setup lang="ts">
const { feedback } = defineProps<{
  feedback: string
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  bug: Bug
  feedbackAccepted: Zugesagt
  feedbackCanceled: Abgelehnt
  feedbackNone: Noch keine Rückmeldung
en:
  bug: Bug
  feedbackAccepted: Accepted
  feedbackCanceled: Declined
  feedbackNone: No feedback yet
</i18n>
