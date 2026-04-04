<template>
  <div
    class="has-focus-visible:focus-ring relative isolate flex items-center gap-3 rounded-lg border border-(--faint-line) bg-(--semantic-base-surface-1) p-3 shadow-xs dark:border-none"
  >
    <AccountProfilePicture
      :account-id="account.rowId"
      class="size-15 rounded-full"
      height="60"
      width="60"
    />

    <AppButton
      :aria-label="t('link', { username: account.username })"
      class="focus-visible:ring-0"
      is-block
      :to="
        localePath({
          name: 'account-view-username',
          params: { username: account.username },
        })
      "
    >
      <span class="absolute inset-0 z-10" />
      <TypographyH3>
        {{ account.username }}
      </TypographyH3>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
// compiler
const { account } = defineProps<{
  account: {
    rowId: string
    username: string
  }
}>()

// template
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  link: Zum Profil von ${username}
en:
  link: View {username}'s profile
</i18n>
