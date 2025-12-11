<template>
  <AppIconArchiveBox v-if="isArchived" :title="t('archived')" />
  <AppIconEye
    v-else-if="visibility === EventVisibility.Public"
    :title="t('public')"
  />
  <AppIconTicket
    v-else-if="visibility === EventVisibility.Unlisted"
    :title="t('unlisted')"
  />
  <AppIconLockClosed
    v-else-if="visibility === EventVisibility.Private"
    :title="t('private')"
  />
  <AppIconBugAnt v-else :title="t('bug')" />
</template>

<script setup lang="ts">
import { EventVisibility } from '~~/gql/generated/graphql'

const { isArchived, visibility } = defineProps<{
  isArchived?: boolean
  visibility: string
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  archived: archiviert
  bug: Bug
  private: privat
  public: öffentlich
  unlisted: nur mit Einladung
en:
  archived: archived
  bug: bug
  private: private
  public: public
  unlisted: invitation only
</i18n>
