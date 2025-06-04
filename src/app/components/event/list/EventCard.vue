<template>
  <AppButton
    v-if="event.accountByCreatedBy?.username"
    :aria-label="event.name"
    class="focus-visible:ring-0"
    is-block
    :to="
      localePath({
        name: 'event-view-username-event_name',
        params: {
          username: event.accountByCreatedBy.username,
          event_name: event.slug,
        },
      })
    "
  >
    <div
      class="relative flex items-center rounded-lg border border-solid bg-(--semantic-base-surface-1) p-4"
      :class="[
        isOwnProfile
          ? isOrganizing
            ? 'border-(--accent-strong)'
            : 'border-(--faint-line)'
          : 'border-transparent',
      ]"
    >
      <div class="relative rounded-md">
        <EventCardHeroImage :event="event" />
        <button
          v-if="store.signedInUsername"
          class="absolute top-2 left-2 z-20 flex size-5 items-center justify-center rounded-full bg-white transition-all hover:scale-110"
          @click.stop.prevent="toggleFavorite"
        >
          <AppIconFavorite
            v-if="!isFavorite"
            class="pointer-events-none size-4 text-(--complement-strong)"
          />
          <AppIconFavoriteFilled
            v-else
            class="pointer-events-none size-4 text-(--complement-strong)"
          />
        </button>
      </div>
      <div
        class="ml-4 flex flex-1 flex-col justify-center gap-2 pt-8 pb-2 md:pt-0"
      >
        <span class="text-large line-clamp-2 leading-tight font-semibold">
          {{ event.name }}
        </span>

        <TypographySubtitleSmall>
          {{ eventStart.format('ddd, D MMMM •') }}
          {{ eventStart.format('h:mm a') }}
        </TypographySubtitleSmall>
      </div>
      <div
        v-if="isOrganizing || isAttending"
        class="text-(semantic-base-primary-button-text) absolute top-2 right-2 rounded-sm px-2 py-1"
        :class="
          isOrganizing ? 'bg-(--accent-strong)' : 'bg-(--complement-strong)'
        "
      >
        <TypographyLabel>
          <template v-if="isOwnProfile">
            {{ isOrganizing ? t('organizing') : t('attending') }}
          </template>
          <template v-else>
            {{ isAttending ? t('attending') : '' }}
          </template>
        </TypographyLabel>
      </div>
    </div>
  </AppButton>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'
import { useEventFavoriteMutation } from '~~/gql/documents/mutations/event/eventFavoriteCreate'
import { useEventUnfavoriteMutation } from '~~/gql/documents/mutations/event/eventFavoriteDelete'
import { getEventFavoriteItem } from '~~/gql/documents/fragments/eventFavoriteItem'

const { t } = useI18n()

interface Props {
  event: EventItemFragment
  isOrganizing?: boolean
  isAttending?: boolean
  isOwnProfile: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOrganizing: false,
  isAttending: false,
})

const store = useStore()

const dateTime = useDateTime()
const localePath = useLocalePath()
const eventStart = computed(() => dateTime(props.event.start))

const currentUserFavorite = computed(() => {
  if (!store.signedInAccountId) return null

  return (
    props.event.eventFavoritesByEventId?.nodes?.find((favorite) => {
      const favoriteData = getEventFavoriteItem(favorite)
      return favoriteData?.createdBy === store.signedInAccountId
    }) ?? null
  )
})

const initialFavoriteData = currentUserFavorite.value
  ? getEventFavoriteItem(currentUserFavorite.value)
  : null

const favoriteId = ref<string | null>(initialFavoriteData?.id ?? null)
const favoriteNodeId = ref<string | null>(initialFavoriteData?.nodeId ?? null)
const isFavorite = ref(!!initialFavoriteData)

const favoriteMutation = useEventFavoriteMutation()
const unfavoriteMutation = useEventUnfavoriteMutation()
const isFetching = computed(
  () => favoriteMutation.fetching.value || unfavoriteMutation.fetching.value,
)

const markFavorite = async (eventId: string) => {
  if (isFetching.value) return

  const result = await favoriteMutation.executeMutation({
    eventId,
    createdBy: store.signedInAccountId,
  })
  await nextTick()

  return result
}

const removeFavorite = async () => {
  if (!favoriteNodeId.value || isFetching.value) return

  const result = await unfavoriteMutation.executeMutation({
    nodeId: favoriteNodeId.value,
  })
  return result
}

const toggleFavorite = async () => {
  if (isFetching.value) return

  if (isFavorite.value) {
    await removeFavorite()
  } else {
    await markFavorite(props.event.id)
  }
}

watchEffect(() => {
  const favorite = currentUserFavorite.value

  if (favorite) {
    const favoriteData = getEventFavoriteItem(favorite)

    if (favoriteData) {
      favoriteId.value = favoriteData.id
      favoriteNodeId.value = favoriteData.nodeId
      isFavorite.value = true
    }
  } else {
    favoriteId.value = null
    favoriteNodeId.value = null
    isFavorite.value = false
  }
})
</script>

<i18n lang="yaml">
de:
  attending: Du nimmst teil
  organizing: Du organisierst
en:
  attending: You're attending
  organizing: You're organizing
</i18n>
