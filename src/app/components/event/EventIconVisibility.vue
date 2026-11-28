<template>
  <AppIconArchiveBox v-if="isArchived" :title="t('archived')" />
  <AppIconPencil v-else-if="publicationState === 'draft'" :title="t('draft')" />
  <AppIconCalendar
    v-else-if="publicationState === 'scheduled'"
    :title="t('scheduled')"
  />
  <AppIconEye
    v-else-if="visibility === EventVisibility.Public"
    :title="t('public')"
  />
  <AppIconLockClosed
    v-else-if="visibility === EventVisibility.Private"
    :title="t('private')"
  />
  <AppIconBugAnt v-else :title="t('bug')" />
</template>

<script setup lang="ts">
import { EventVisibility } from '~~/gql/generated/graphcache'

const {
  isArchived,
  publicationState = undefined,
  visibility,
} = defineProps<{
  isArchived?: boolean
  publicationState?: ReturnType<typeof getEventPublicationState>
  visibility: string
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  archived: archiviert
  bug: Bug
  draft: Entwurf
  private: privat
  public: öffentlich
  scheduled: geplant
en:
  archived: archived
  bug: bug
  draft: draft
  private: private
  public: public
  scheduled: scheduled
</i18n>
