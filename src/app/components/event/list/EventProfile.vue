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
          class="absolute top-2 left-2 flex size-6 items-center justify-center rounded-full bg-white transition-all hover:scale-110"
          @click.stop="toggleFavorite"
        >
          <IVibetypeFavorite
            v-if="!isFavorite"
            class="text-(--complement-strong)"
          />
          <IVibetypeFavoriteFilled v-else class="text-(--complement-strong)" />
        </button>
      </div>
      <div
        class="ml-4 flex flex-1 flex-col justify-center gap-2 pt-6 pb-2 md:pt-0"
      >
        <template v-if="event.name.length > 25">
          <TypographyTitleMedium class="line-clamp-2 leading-tight">
            {{ event.name }}
          </TypographyTitleMedium>
        </template>
        <template v-else>
          <TypographyTitleLarge class="line-clamp-2 leading-tight">
            {{ event.name }}
          </TypographyTitleLarge>
        </template>
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
import { useEventFavoriteMutation } from '~~/gql/documents/mutations/event/eventFavorite'
import { useEventUnfavoriteMutation } from '~~/gql/documents/mutations/event/eventDeleteFavorite'
import { useEventFavoriteByCreatedByAndEventIdQuery } from '~~/gql/documents/queries/event/eventFavorites'

const { t } = useI18n()

interface Props {
  event: Pick<
    EventItemFragment,
    'id' | 'accountByCreatedBy' | 'name' | 'start' | 'slug'
  >
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

const favoriteId = ref<string | null>(null)
const favoriteNodeId = ref<string | null>(null)
const isFavorite = ref(false)
const isProcessing = ref(false)

const favoriteMutation = useEventFavoriteMutation()
const unfavoriteMutation = useEventUnfavoriteMutation()

const markFavorite = async (eventId: string) => {
  if (isProcessing.value) return

  isProcessing.value = true
  const result = await favoriteMutation.executeMutation({
    eventId,
    createdBy: store.signedInAccountId,
  })

  if (result.data?.createEventFavorite?.eventFavorite) {
    favoriteId.value = result.data.createEventFavorite.eventFavorite.id
    favoriteNodeId.value = result.data.createEventFavorite.eventFavorite.nodeId
    isFavorite.value = true
  }

  isProcessing.value = false
  return result
}

const removeFavorite = async () => {
  if (!favoriteNodeId.value || isProcessing.value) return

  isProcessing.value = true
  const result = await unfavoriteMutation.executeMutation({
    nodeId: favoriteNodeId.value,
  })

  if (!result.error) {
    favoriteId.value = null
    favoriteNodeId.value = null
    isFavorite.value = false
  }

  isProcessing.value = false
  return result
}

const toggleFavorite = async () => {
  if (isProcessing.value) return

  if (isFavorite.value) {
    isFavorite.value = false
    const result = await removeFavorite()
    if (result?.error) {
      isFavorite.value = true
    }
  } else {
    isFavorite.value = true
    const result = await markFavorite(props.event.id)
    if (result?.error) {
      isFavorite.value = false
    }
  }
}

const favoriteData = useEventFavoriteByCreatedByAndEventIdQuery({
  createdBy: store.signedInAccountId ?? '',
  eventId: props.event.id,
})

onMounted(() => {
  watchEffect(() => {
    const favorite = favoriteData.data.value?.eventFavoriteByCreatedByAndEventId
    if (favorite) {
      isFavorite.value = true
      favoriteId.value = favorite.id
      favoriteNodeId.value = favorite.nodeId
    }
  })
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
