<template>
  <div class="flex items-center gap-2 border-b border-(--faint-line) p-4">
    <AccountProfilePicture
      :account-id="account.id"
      class="size-15 rounded-full"
      height="48"
      width="48"
    />
    <TypographySubtitleLarge>
      {{ account.username }}
    </TypographySubtitleLarge>
    <ButtonColored
      variant="secondary"
      size="small"
      aria-label=""
      class="ml-auto"
      @click="openUnblockDrawer"
    >
    </ButtonColored>
    <AccountUnblockDrawer
      v-model:open="isUnblockDrawerOpen"
      :blocked-account-id="account.blockNodeId"
      :blocked-username="account.username"
    />
  </div>
</template>

<script setup lang="ts">
const isUnblockDrawerOpen = ref<boolean>()

const openUnblockDrawer = () => {
  isUnblockDrawerOpen.value = true
}

const { account } = defineProps<{
  account: {
    id: string
    username: string
    blockNodeId: string
  }
}>()
</script>
