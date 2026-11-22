<template>
  <AppIconArchiveBox v-if="isArchived" :title="t('archived')" />
  <AppIconPencil v-else-if="isPublished === false" :title="t('draft')" />
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

const { isArchived, isPublished, visibility } = defineProps<{
  isArchived?: boolean
  isPublished?: boolean
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
en:
  archived: archived
  bug: bug
  draft: draft
  private: private
  public: public
</i18n>
