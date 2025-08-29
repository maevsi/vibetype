<template>
  <div>
    <LayoutTopBar>
      <span>
        {{ title }}
      </span>
      <template #back>
        <ButtonIcon
          :aria-label="t('back')"
          :to="
            localePath({
              name: 'session-edit',
            })
          "
        >
          <AppIconBack />
        </ButtonIcon>
      </template>
    </LayoutTopBar>
    <AppError
      v-if="!account"
      :error="{ message: t('errorAccountMissing'), statusCode: 404 }"
    />
    <LayoutPage>
      <FormInputSearch v-model="searchQuery" />
      <div v-if="filteredBlockedAccounts?.length" class="flex flex-col gap-2">
        <div
          v-for="blockedAccount in filteredBlockedAccounts"
          :key="blockedAccount.id"
          class="flex items-center gap-2 border-b border-(--faint-line) p-4"
        >
          <AccountProfilePicture
            :account-id="blockedAccount.id"
            class="size-15 rounded-full"
            height="48"
            width="48"
          />
          <TypographySubtitleLarge>
            {{ blockedAccount.username }}
          </TypographySubtitleLarge>
          <ButtonColored
            variant="secondary"
            size="small"
            :aria-label="t('unblock')"
            class="ml-auto"
            @click="() => openUnblockDrawer(blockedAccount)"
          >
            {{ t('unblock') }}
          </ButtonColored>
        </div>
      </div>
      <TypographyBodyMedium
        v-else-if="searchQuery && !filteredBlockedAccounts?.length"
      >
        {{ t('errorNotFound') }}
      </TypographyBodyMedium>
      <TypographyBodyMedium v-else>
        {{ t('noBlockedAccounts') }}
      </TypographyBodyMedium>
      <AccountUnblockDrawer
        v-model:open="isUnblockDrawerOpen"
        :blocked-account-id="selectedAccount?.id || ''"
        :blocked-username="selectedAccount?.username || ''"
      />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { refDebounced } from '@vueuse/core'
import { useAccountBlockedAccountsQuery } from '~~/gql/documents/queries/account/accountBlockedAccounts'

interface BlockedAccount {
  id: string
  username: string
  description?: string | null
  imprint?: string | null
  storageKey?: string | null
}

definePageMeta({
  layout: 'plain',
})

const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

const store = useStore()
const account = computed(() => store.signedInAccountId)

const blockedAccountsQuery = useAccountBlockedAccountsQuery()

const blockedAccounts = computed((): BlockedAccount[] => {
  const accounts =
    blockedAccountsQuery.data.value?.accountBlockedAccounts?.nodes
  if (!accounts) return []

  return accounts
    .filter(
      (
        acc,
      ): acc is {
        id: string
        username: string
        description?: string | null
        imprint?: string | null
        storageKey?: string | null
      } => Boolean(acc.id && acc.username),
    )
    .map((acc) => ({
      id: acc.id,
      username: acc.username,
      description: acc.description,
      imprint: acc.imprint,
      storageKey: acc.storageKey,
    }))
})

const localePath = useLocalePath()

const searchQuery = ref<string>()
const searchQueryDebounced = refDebounced(searchQuery, 300)
const searchQueryDebouncedTrimmed = computed(
  () => searchQueryDebounced.value?.trim() || undefined,
)

const filteredBlockedAccounts = computed((): BlockedAccount[] => {
  const accounts = blockedAccounts.value
  if (!searchQueryDebouncedTrimmed.value) return accounts

  return accounts.filter((account) =>
    account.username
      ?.toLowerCase()
      .includes(searchQueryDebouncedTrimmed.value!.toLowerCase()),
  )
})

const isUnblockDrawerOpen = ref<boolean>()
const selectedAccount = ref<BlockedAccount | null>(null)

const openUnblockDrawer = (account: BlockedAccount) => {
  selectedAccount.value = account
  isUnblockDrawerOpen.value = true
}
</script>

<i18n lang="yaml">
de:
  back: zurück
  errorAccountMissing: Konto nicht verfügbar
  errorNotFound: Niemand gefunden
  noBlockedAccounts: Keine blockierten Benutzer
  title: Blockierte Benutzer
  unblock: Ja, entsperren
en:
  back: back
  errorAccountMissing: Account unavailable
  errorNotFound: Noone found
  noBlockedAccounts: No blocked users
  title: Blocked Users
  unblock: Unblock
</i18n>
