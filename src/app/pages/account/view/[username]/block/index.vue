<template>
  <Loader :api is-page>
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-4">
        <template v-if="blockedAccounts?.length">
          <AppInputSearch v-model="searchQuery" />
          <AppList v-if="blockedAccountsFiltered?.length">
            <AppListItem
              v-for="blockedAccount in blockedAccountsFiltered"
              :key="blockedAccount.id"
              class="px-2"
            >
              <AccountProfilePicture
                :account-id="blockedAccount.id"
                class="size-12 shrink-0 rounded-full"
                height="48"
                width="48"
              />
              <span class="min-w-0 flex-1 truncate font-medium">
                {{ `@${blockedAccount.username}` }}
              </span>
              <AppButton
                :aria-label="
                  t('unblockAccount', { username: blockedAccount.username })
                "
                class="shrink-0"
                size="small"
                variant="secondary"
                @click="openUnblockDrawer(blockedAccount)"
              >
                {{ t('unblock') }}
              </AppButton>
            </AppListItem>
          </AppList>
          <AppEmptyState
            v-else
            :title="t('searchEmptyTitle', { query: searchQueryTrimmed })"
          >
            <AppButton :aria-label="t('searchClear')" @click="searchQuery = ''">
              {{ t('searchClear') }}
            </AppButton>
          </AppEmptyState>
        </template>
        <AppEmptyState
          v-else
          :description="t('emptyDescription')"
          :title="t('emptyTitle')"
        >
          <template #icon><AppIconNoSymbol /></template>
        </AppEmptyState>
      </div>
    </LayoutPage>
    <AccountBlockRemoveDrawer
      v-if="blockRemoveAccount"
      v-model:open="isBlockRemoveDrawerOpen"
      :account="blockRemoveAccount"
    />
  </Loader>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'
import type { AccountBlockAccountsRecord } from '~~/gql/generated/graphcache'

// validation
await useSignInRequired()
const store = useStore()
const route = useRoute()
const { createA11yError } = useA11yError()
if (
  store.signedInUsername &&
  route.params.username !== store.signedInUsername
) {
  throw createA11yError({
    status: 403,
  })
}

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// api data
const accountBlockAccountsQuery = useApiQuery({
  query: graphql(`
    query AccountBlockAccounts {
      accountBlockAccounts {
        nodes {
          id
          storageKey
          username
        }
      }
    }
  `),
})
const api = await useApiData([accountBlockAccountsQuery])
const blockedAccounts = computed(() =>
  api.value.data.accountBlockAccounts?.nodes.filter(
    (
      x,
    ): x is Exclude<typeof x, null | undefined> & {
      id: NonNullable<(typeof x)['id']>
    } => !!x.id,
  ),
)

// filtering
const searchQuery = ref<string>()
const searchQueryTrimmed = computed(
  () => searchQuery.value?.trim() || undefined,
)
const blockedAccountsFiltered = computed(() => {
  if (!searchQueryTrimmed.value) return blockedAccounts.value

  return blockedAccounts.value?.filter(
    (account) =>
      searchQueryTrimmed.value &&
      account.username
        ?.toLowerCase()
        .includes(searchQueryTrimmed.value.toLowerCase()),
  )
})

// drawer
const isBlockRemoveDrawerOpen = ref<boolean>()
const blockRemoveAccount = ref<AccountBlockAccountsRecord>()
const openUnblockDrawer = (account: AccountBlockAccountsRecord) => {
  blockRemoveAccount.value = account
  isBlockRemoveDrawerOpen.value = true
}
</script>

<i18n lang="yaml">
de:
  emptyDescription: Konten, die Du blockierst, erscheinen hier, damit Du sie wieder entsperren kannst.
  emptyTitle: Du hast niemanden blockiert
  searchClear: Suche zurücksetzen
  searchEmptyTitle: Kein blockiertes Konto passt zu „{query}“
  title: Blockierte Konten
  unblock: Entsperren
  unblockAccount: "Entsperren: {'@'}{username}"
en:
  emptyDescription: Accounts you block show up here, so you can unblock them again.
  emptyTitle: You haven't blocked anyone
  searchClear: Clear search
  searchEmptyTitle: 'No blocked account matches "{query}"'
  title: Blocked accounts
  unblock: Unblock
  unblockAccount: "Unblock {'@'}{username}"
</i18n>
