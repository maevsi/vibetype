<template>
  <AppIconCheckCircleSolid
    v-if="feedback === InvitationFeedback.Accepted"
    class="text-link"
    :title="title(t('feedbackAccepted'))"
  />
  <AppIconXCircleSolid
    v-else-if="feedback === InvitationFeedback.Canceled"
    class="text-error"
    :title="title(t('feedbackCanceled'))"
  />
  <AppIconQuestionMarkCircleSolid
    v-else-if="feedback === null"
    class="text-fg-2"
    :title="t('feedbackNone')"
  />
  <AppIconBugAnt v-else :title="t('bug')" />
</template>

<script setup lang="ts">
import { InvitationFeedback } from '~~/gql/generated/graphcache'
import type { GuestItemFragment } from '~~/gql/generated/graphql'

const { feedback, isOverride = false } = defineProps<{
  feedback: GuestItemFragment['feedback']
  isOverride?: boolean
}>()

const { t } = useI18n()

const title = (label: string) =>
  isOverride ? t('feedbackOverride', { feedback: label }) : label
</script>

<i18n lang="yaml">
de:
  bug: Bug
  feedbackAccepted: Zugesagt
  feedbackCanceled: Abgelehnt
  feedbackNone: Noch keine Rückmeldung
  feedbackOverride: '{feedback} (von Dir markiert)'
en:
  bug: Bug
  feedbackAccepted: Accepted
  feedbackCanceled: Declined
  feedbackNone: No feedback yet
  feedbackOverride: '{feedback} (marked by you)'
</i18n>
