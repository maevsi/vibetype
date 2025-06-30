<template>
  <AppButton
    class="focus-visible:ring-0"
    :aria-label="`View ${account.username}'s profile`"
    is-block
    :to="
      localePath({
        name: 'account-view-username',
        params: { username: account.username },
      })
    "
  >
    <div
      class="flex items-center gap-3 rounded-xl border border-(--semantic-base-line) bg-(--semantic-base-surface-1) p-3 dark:border-none"
    >
      <AccountProfilePicture
        :account-id="account.id"
        class="size-15 rounded-full"
        height="60"
        width="60"
      />
      <TypographyH3>
        {{ account.username }}
      </TypographyH3>
    </div>
  </AppButton>
</template>

<script setup lang="ts">
const { account } = defineProps<{
  account: {
    id: string
    username: string
    description?: string | null
  }
}>()
const localePath = useLocalePath()
</script>
