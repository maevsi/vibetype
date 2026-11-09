<template>
  <AppButton
    v-if="store.signedInAccountId"
    :aria-label="isFavorite ? t('favoriteDelete') : t('favoriteCreate')"
    :disabled="isFavoritePending"
    @click="toggleEventFavorite"
  >
    <AppIconFavoriteFilled
      v-if="isFavorite"
      :class="cn('text-accent-pink', iconClass)"
    />
    <AppIconFavorite
      v-else
      :class="cn('text-fg-1' /*'text-fg-2'*/, iconClass)"
    />
  </AppButton>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'
import type { DeepReadonly, HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'

const { event, iconClass = undefined } = defineProps<{
  event: DeepReadonly<{
    eventFavoritesByEventId?: {
      nodes: {
        createdBy: string
        rowId: string
      }[]
    } | null
    rowId: string
  }>
  iconClass?: HtmlHTMLAttributes['class']
}>()

const store = useStore()
const { t } = useI18n()
const executeUrqlRequest = useExecuteUrqlRequest()

const createEventFavoriteMutation = useMutation(
  graphql(`
    mutation CreateEventFavorite($input: CreateEventFavoriteInput!) {
      createEventFavorite(input: $input) {
        eventFavorite {
          createdBy
          eventByEventId {
            id
          }
          eventId
          id
          rowId
        }
      }
    }
  `),
)
const deleteEventFavoriteByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteEventFavoriteByRowId(
      $input: DeleteEventFavoriteByRowIdInput!
    ) {
      deleteEventFavoriteByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const isFavoritePending = computed(
  () =>
    createEventFavoriteMutation.fetching.value ||
    deleteEventFavoriteByRowIdMutation.fetching.value,
)
// `favoriteOverride` tracks the result of the latest toggle locally: some
// callers (e.g. the dashboard recommendations) pass in an `event` snapshot
// that never refreshes from the cache, so `isFavorite` can't rely on the
// prop alone to reflect a toggle performed in this component instance.
// `undefined` = defer to the prop, `null` = locally unfavorited.
const favoriteOverride = ref<{ createdBy: string; rowId: string } | null>()
const currentFavorite = computed(() =>
  favoriteOverride.value === undefined
    ? event.eventFavoritesByEventId?.nodes[0]
    : favoriteOverride.value,
)
const isFavorite = computed(
  () =>
    !!(
      store.signedInAccountId &&
      currentFavorite.value?.createdBy &&
      currentFavorite.value.createdBy === store.signedInAccountId
    ),
)
const toggleEventFavorite = async () => {
  if (isFavorite.value) {
    const favorite = currentFavorite.value
    if (!favorite) return

    const result = await executeUrqlRequest({
      errorMessageI18n: t('favoriteDeleteError'),
      request: deleteEventFavoriteByRowIdMutation.executeMutation({
        input: {
          rowId: favorite.rowId,
        },
      }),
    })
    if (result) favoriteOverride.value = null
  } else {
    if (!store.signedInAccountId) return

    const result = await executeUrqlRequest({
      errorMessageI18n: t('favoriteCreateError'),
      request: createEventFavoriteMutation.executeMutation({
        input: {
          eventFavorite: {
            createdBy: store.signedInAccountId,
            eventId: event.rowId,
          },
        },
      }),
    })
    const created = result?.data?.createEventFavorite?.eventFavorite
    if (created)
      favoriteOverride.value = {
        createdBy: created.createdBy,
        rowId: created.rowId,
      }
  }
}
</script>

<i18n lang="yaml">
de:
  favoriteCreate: Als Favorit markieren
  favoriteCreateError: Favorit konnte nicht hinzugefügt werden
  favoriteDelete: Nicht mehr als Favorit markieren
  favoriteDeleteError: Favorit konnte nicht entfernt werden
en:
  favoriteCreate: Mark as favorite
  favoriteCreateError: Favorite could not be added
  favoriteDelete: Unmark as favorite
  favoriteDeleteError: Favorite could not be removed
</i18n>
