<template>
  <LoaderIndicatorPing v-if="api.isFetching" />
  <div v-else>
    <LayoutTopBar>
      <span>
        {{ title }}
      </span>
      <template #back>
        <ButtonIconBackRoute />
      </template>
    </LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-3">
        <FormInputSearch v-model="searchQuery" />
        <ul
          v-if="blockedAccountsFiltered?.length"
          class="flex flex-col divide-y divide-(--faint-line)"
          role="list"
        >
          <li
            v-for="blockedAccount in blockedAccountsFiltered"
            :key="blockedAccount.id"
            class="flex items-center justify-between px-2 py-4"
          >
            <div class="flex items-center gap-2.5">
              <AccountProfilePicture
                :account-id="blockedAccount.id"
                class="size-12 rounded-full"
                height="48"
                width="48"
              />
              <TypographySubtitleLarge>
                {{ blockedAccount.username }}
              </TypographySubtitleLarge>
            </div>
            <ButtonColored
              :aria-label="t('unblock')"
              size="small"
              variant="secondary"
              @click="openUnblockDrawer(blockedAccount)"
            >
              {{ t('unblock') }}
            </ButtonColored>
          </li>
        </ul>
        <TypographyBodyMedium
          v-else-if="searchQuery && !blockedAccountsFiltered?.length"
        >
          {{ t('errorNotFound') }}
        </TypographyBodyMedium>
        <TypographyBodyMedium v-else>
          {{ t('noBlockedAccounts') }}
        </TypographyBodyMedium>
      </div>
    </LayoutPage>
    <AccountBlockRemoveDrawer
      v-if="blockRemoveAccount"
      v-model:open="isBlockRemoveDrawerOpen"
      :account="blockRemoveAccount"
    />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { AccountBlockAccountsRecord } from '~~/gql/generated/graphql'

// compiler
definePageMeta({
  layout: 'plain',
})

// validation
const store = useStore()
const route = useRoute('account-view-username-block___en')
if (route.params.username !== store.signedInUsername) {
  throw createError({
    fatal: true,
    statusCode: 403,
  })
}

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// api data
const accountBlockAccountsQuery = useQuery({
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
const searchQueryDebouncedTrimmed = computed(
  () => searchQuery.value?.trim() || undefined,
)
const blockedAccountsFiltered = computed(() => {
  if (!searchQueryDebouncedTrimmed.value) return blockedAccounts.value

  return blockedAccounts.value?.filter(
    (account) =>
      searchQueryDebouncedTrimmed.value &&
      account.username
        ?.toLowerCase()
        .includes(searchQueryDebouncedTrimmed.value.toLowerCase()),
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
  errorNotFound: Niemand gefunden
  noBlockedAccounts: Keine blockierten Benutzer
  title: Blockierte Benutzer
  unblock: Benutzer entsperren
en:
  errorNotFound: Noone found
  noBlockedAccounts: No blocked users
  title: Blocked Users
  unblock: Unblock
</i18n>
