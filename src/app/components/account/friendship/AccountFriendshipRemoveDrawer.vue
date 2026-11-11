<template>
  <AppConfirmDeleteDrawer
    v-model:open="isOpen"
    :cancel-label="t('friendKeep')"
    :confirm-label="t('friendRemove')"
    :error
    :is-pending="isPending"
    :title="t('title')"
    @confirm="onConfirm"
    @restart="restart"
  >
    {{ t('friendRemoveQuestion', { username }) }}
  </AppConfirmDeleteDrawer>
</template>

<script setup lang="ts">
const { accountId, username } = defineProps<{
  accountId: string
  username: string
}>()

const emit = defineEmits<{ error: [] }>()
const isOpen = defineModel<boolean>('open')

const { deleteFriendship, isPending } = useFriendshipMutations()
const { confirm, error, restart } = useMutationConfirmation()
const { polite } = useAnnouncer()

const onConfirm = async () => {
  const result = await confirm(deleteFriendship(accountId))

  if (!result) {
    emit('error')
    return
  }

  isOpen.value = false
  polite(t('friendRemoved', { username }))
}

// template
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  friendKeep: Nein, behalten
  friendRemove: Ja, entfernen
  friendRemoved: '{username} ist nicht mehr mit dir befreundet.'
  friendRemoveQuestion: Möchtest du {username} wirklich als Freund entfernen?
  title: Freund entfernen
en:
  friendKeep: No, keep them
  friendRemove: Yes, remove
  friendRemoved: '{username} is no longer your friend.'
  friendRemoveQuestion: Do you really want to remove {username} from your friends?
  title: Remove friend
</i18n>
