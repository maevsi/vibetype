<template>
  <Combobox
    v-model="selection"
    :disabled
    ignore-filter
    reset-model-value-on-clear
  >
    <ComboboxAnchor class="w-full">
      <ComboboxInput
        :id
        v-model="searchTerm"
        :aria-invalid
        class="h-13 rounded-medium border-0 bg-surface-raised px-6 text-body text-fg-1 shadow-none placeholder:text-fg-3 focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-inset disabled:opacity-40 aria-invalid:ring-2 aria-invalid:ring-error aria-invalid:ring-inset"
        :display-value="(username: string) => (username ? `@${username}` : '')"
        :placeholder="t('placeholder')"
        @blur="emit('blur')"
      />
    </ComboboxAnchor>
    <ComboboxList
      class="w-(--reka-combobox-trigger-width) rounded-medium border-0 bg-surface-raised p-1"
    >
      <ComboboxEmpty v-if="!api.isFetching" class="text-body-small text-fg-2">
        {{ searchQuery ? t('noMatch') : t('hint') }}
      </ComboboxEmpty>
      <ComboboxItem
        v-for="account in accounts"
        :key="account.rowId"
        class="justify-start gap-3 rounded-medium px-3 py-2"
        :value="account.username"
      >
        <AccountProfilePicture
          :account-id="account.rowId"
          class="size-8 rounded-full"
          height="32"
          width="32"
        />
        <span class="text-body">{{ `@${account.username}` }}</span>
      </ComboboxItem>
    </ComboboxList>
  </Combobox>
</template>

<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

import { graphql } from '~~/gql/generated'

const { disabled = false, id } = defineProps<{
  ariaInvalid?: boolean
  disabled?: boolean
  id: string
}>()

const emit = defineEmits<{
  blur: []
}>()

const username = defineModel<string>({ required: true })

const store = useStore()
const { t } = useI18n()

// data
const searchTerm = ref('')
const searchTermDebounced = refDebounced(searchTerm, 300)
const searchQuery = computed(() =>
  searchTermDebounced.value.trim().replace(/^@/, ''),
)

// api data
const accountSearchQuery = useApiQuery({
  query: graphql(`
    query AccountPickerSearch($first: Int, $query: String) {
      accountSearch(first: $first, query: $query) {
        nodes {
          id
          rowId
          username
        }
      }
    }
  `),
  // An empty query matches every username, see `AccountSearch`.
  pause: computed(() => !searchQuery.value),
  variables: computed(() => ({
    first: ITEMS_PER_PAGE,
    query: searchQuery.value,
  })),
})
const api = await useApiData([accountSearchQuery])

// computations
const accounts = computed(() =>
  api.value.data.accountSearch?.nodes.filter(
    (account) => account.rowId !== store.signedInAccountId,
  ),
)
const selection = computed({
  get: () => username.value || null,
  set: (value: string | null) => {
    username.value = value ?? ''
  },
})
</script>

<i18n lang="yaml">
de:
  hint: Gib einen Nutzernamen ein.
  noMatch: Diesen Nutzernamen gibt es nicht. Prüfe die Schreibweise oder füge die Person stattdessen per E-Mail-Adresse hinzu.
  placeholder: Nutzername suchen
en:
  hint: Type a username.
  noMatch: This username doesn't exist. Check the spelling or add the person by email address instead.
  placeholder: Search for a username
</i18n>
