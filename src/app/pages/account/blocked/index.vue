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
        <AccountUnblockCard
          v-for="blockedAccount in filteredBlockedAccounts"
          :key="blockedAccount.id"
          :account="blockedAccount"
        />
      </div>
      <TypographyBodyMedium
        v-else-if="searchQuery && !filteredBlockedAccounts?.length"
      >
        {{ t('errorNotFound') }}
      </TypographyBodyMedium>
      <TypographyBodyMedium v-else>
        {{ t('noBlockedAccounts') }}
      </TypographyBodyMedium>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { refDebounced } from '@vueuse/core'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { AccountBlockedDocument } from '~~/gql/generated/graphql'

definePageMeta({
  layout: 'plain',
})
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

const store = useStore()
const account = computed(() => store.signedInAccountId)
const after = ref<string>()

const accountBlockedQuery = useQuery({
  query: AccountBlockedDocument,
  variables: computed(() => ({
    after: after.value,
    first: ITEMS_PER_PAGE_LARGE,
    createdBy: store.signedInAccountId,
  })),
})

const blockedAccounts = computed(() => {
  const blocks = accountBlockedQuery.data.value?.allAccountBlocks?.nodes
  if (!blocks) return []

  return blocks
    .map((block) => {
      const blockedAccount = getAccountItem(block.accountByBlockedAccountId)
      return {
        id: blockedAccount?.id,
        username: blockedAccount?.username,
        blockNodeId: block.nodeId,
      }
    })
    .filter(
      (
        blockedAccount,
      ): blockedAccount is {
        id: string
        username: string
        blockNodeId: string
      } =>
        Boolean(
          blockedAccount.id &&
            blockedAccount.username &&
            blockedAccount.blockNodeId,
        ),
    )
})
const localePath = useLocalePath()

//search
const searchQuery = ref<string>()
const searchQueryDebounced = refDebounced(searchQuery, 300)
const searchQueryDebouncedTrimmed = computed(
  () => searchQueryDebounced.value?.trim() || undefined,
)

const filteredBlockedAccounts = computed(() => {
  const accounts = blockedAccounts.value
  if (!searchQueryDebouncedTrimmed.value) return accounts

  return accounts.filter((account) =>
    account.username
      ?.toLowerCase()
      .includes(searchQueryDebouncedTrimmed.value!.toLowerCase()),
  )
})
</script>

<i18n lang="yaml">
de:
  back: zurück
  errorAccountMissing: Konto nicht verfügbar
  errorNotFound: Niemand gefunden
  noBlockedAccounts: Keine blockierten Benutzer
  title: Blockierte Benutzer
en:
  back: back
  errorAccountMissing: Account unavailable
  errorNotFound: Noone found
  noBlockedAccounts: No blocked users
  title: Blocked Users
</i18n>
